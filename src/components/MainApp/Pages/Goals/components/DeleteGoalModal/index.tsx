/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { FC, useMemo } from 'react';
import ReactDom from 'react-dom';
import cx from 'classnames';

// Actions
import { deleteGoal } from 'redux/goals-service/reducer';

// MUI
import { Box, Button, IconButton, Typography } from '@mui/material';

// Icons
import Close from 'assets/icons/close.svg';
import Delete from 'assets/icons/delete-icon.svg';

// Hooks
import { useEnableEffect } from 'shared/hooks/useEnableEffect';

// Styles
import './style.scss';

// @ts-ignore
const containerEl = document.getElementById('portal-root');

interface DeleteGoalModalProps {
	isShow: boolean;
	setIsShow: (props: boolean) => void;
	name: string;
	elemDeleting: string;
}

const DeleteGoalModal: FC<DeleteGoalModalProps> = ({ isShow, setIsShow, name, elemDeleting }) => {
	const { t } = useTranslation('mainApp');
	const dispatch = useDispatch();
	const { enableCloseEffect, handleCloseModal } = useEnableEffect(setIsShow);

	const getTitle = useMemo(() => {
		switch (elemDeleting) {
			case 'task':
				return (
					<Typography variant="body" className="delete-modal__title">
						{t('sure-delete-task')} &quot;<span>{name}</span>&quot;? {t('affect-deleting')}
					</Typography>
				);

			case 'goal':
				return (
					<Typography variant="body" className="delete-modal__title">
						{t('sure-delete-goal')} &quot;<span>{name}</span>&apos;?
					</Typography>
				);

			default:
				return null;
		}
	}, [isShow]);

	const handleDelete = () => {
		handleCloseModal();
		dispatch(deleteGoal(name));
	};

	if (!isShow) {
		return null;
	}

	return ReactDom.createPortal(
		<Box className="delete-modal__wrapper">
			<Box
				className={cx('delete-modal', {
					close: enableCloseEffect,
				})}
			>
				<IconButton className="delete-modal__close-icon" onClick={handleCloseModal}>
					<img src={Close} alt="close" />
				</IconButton>
				<Box className="delete-modal__content">
					<img src={Delete} alt="warning" className="delete-icon" />
					{getTitle}
					<Box className="delete-modal__actions">
						<Button variant="buttonLight" color="secondary" size="small" onClick={handleCloseModal}>
							<Typography variant="smallDetails">{t('cancel')}</Typography>
						</Button>
						<Button variant="buttonDark" color="primary" size="small" onClick={handleDelete}>
							<Typography variant="smallDetails">{t('delete-goal')}</Typography>
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>,
		// @ts-ignore
		containerEl
	);
};

export default DeleteGoalModal;
