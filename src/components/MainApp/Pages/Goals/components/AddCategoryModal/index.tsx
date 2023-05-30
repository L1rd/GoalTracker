/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useTranslation } from 'react-i18next';
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import ReactDom from 'react-dom';
import cx from 'classnames';

// MUI
import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';

// Hooks
import { useEnableEffect } from 'shared/hooks/useEnableEffect';

// Styles
import './style.scss';

interface AddCategoryModalProps {
	isShow: boolean;
	setIsShow: (value: boolean) => void | Dispatch<SetStateAction<boolean>>;
	handleAddCustomCategory: (title: string) => void;
	isShowError: boolean;
	setIsShowError: Dispatch<SetStateAction<boolean>>;
}

// @ts-ignore
const containerEl = document.getElementById('portal-root');

const AddCategoryModal: FC<AddCategoryModalProps> = ({
	isShow,
	setIsShow,
	handleAddCustomCategory,
	isShowError,
	setIsShowError,
}) => {
	const { t } = useTranslation('mainApp');
	const [inputValue, setInputValue] = useState('');
	const { enableCloseEffect, handleCloseModal } = useEnableEffect(setIsShow);

	if (!isShow) {
		return null;
	}

	const handleEnterInfo = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInputValue(event.target.value.trim());
	};

	const handleAddCategory = () => {
		handleCloseModal();
		handleAddCustomCategory(inputValue);
		setInputValue('');
	};

	return ReactDom.createPortal(
		<Box className="add-modal__wrapper">
			<Box
				className={cx('add-modal', {
					close: enableCloseEffect,
				})}
			>
				<Box className="add-modal__header">
					<Typography variant="subtitle">{t('add-new-category')}</Typography>
				</Box>
				<Box className="add-modal__content">
					<TextField
						label={t('category-name')}
						variant="outlined"
						value={inputValue}
						onChange={event => handleEnterInfo(event)}
						className="add-modal__input"
						inputProps={{ maxLength: 30 }}
					/>
					<Box className="add-modal__buttons">
						<Button variant="buttonLight" color="secondary" size="medium" onClick={handleCloseModal}>
							<Typography variant="smallDetails">{t('cancel')}</Typography>
						</Button>
						<Button
							variant="buttonDark"
							color="primary"
							size="medium"
							disabled={!inputValue}
							onClick={handleAddCategory}
						>
							<Typography variant="smallDetails">{t('add-category')}</Typography>
						</Button>
					</Box>
				</Box>
				<Snackbar open={isShowError} autoHideDuration={4000} onClose={() => setIsShowError(false)}>
					<Alert onClose={() => setIsShowError(false)} severity="error" sx={{ width: '100%' }}>
						<Typography variant="subtitle">{t('category-with-same-name')}</Typography>
					</Alert>
				</Snackbar>
			</Box>
		</Box>,
		// @ts-ignore
		containerEl
	);
};

export default AddCategoryModal;
