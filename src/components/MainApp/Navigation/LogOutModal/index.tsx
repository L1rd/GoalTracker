/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import ReactDom from 'react-dom';
import cx from 'classnames';

// MUI
import { Box, Button, IconButton, Typography } from '@mui/material';

// Icons
import Close from 'assets/icons/close.svg';
import Warning from 'assets/icons/warning.svg';

// Hooks
import { useEnableEffect } from 'shared/hooks/useEnableEffect';

// Styles
import './style.scss';

// @ts-ignore
const containerEl = document.getElementById('portal-root');

interface LogOutModalProps {
	isShow: boolean;
	setIsShow: (props: boolean) => void;
}

const LogOutModal: FC<LogOutModalProps> = ({ isShow, setIsShow }) => {
	const { t } = useTranslation('mainApp');
	const navigate = useNavigate();

	const { enableCloseEffect, handleCloseModal } = useEnableEffect(setIsShow);

	const handleLogOut = () => {
		handleCloseModal();
		navigate('/GoalTracker/');
	};

	if (!isShow) {
		return null;
	}

	return ReactDom.createPortal(
		<Box className="logout-modal__wrapper">
			<Box
				className={cx('logout-modal', {
					close: enableCloseEffect,
				})}
			>
				<IconButton className="logout-modal__close-icon" onClick={handleCloseModal}>
					<img src={Close} alt="close" />
				</IconButton>
				<Box className="logout-modal__content">
					<img src={Warning} alt="warning" />
					<Typography variant="h4" className="logout-modal__title">
						{t('log-out')}
					</Typography>
					<Typography variant="body" className="logout-modal__description">
						{t('sure-log-out')}
					</Typography>
					<Box className="logout-modal__actions">
						<Button variant="buttonLight" color="primary" size="small" onClick={handleCloseModal}>
							<Typography variant="smallDetails">{t('cancel')}</Typography>
						</Button>
						<Button variant="buttonDark" color="secondary" size="small" onClick={handleLogOut}>
							<Typography variant="smallDetails">{t('log-out')}</Typography>
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>,
		// @ts-ignore
		containerEl
	);
};

export default LogOutModal;
