/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import ReactDom from 'react-dom';
import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import cx from 'classnames';
import { useEnableEffect } from 'shared/hooks/useEnableEffect';
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
	const [inputValue, setInputValue] = useState('');
	const { enableCloseEffect, handleCloseModal } = useEnableEffect(setIsShow);

	if (!isShow) {
		return null;
	}

	const handleEnterInfo = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInputValue(event.target.value.trim());
	};

	return ReactDom.createPortal(
		<Box className="add-modal__wrapper">
			<Box
				className={cx('add-modal', {
					close: enableCloseEffect,
				})}
			>
				<Box className="add-modal__header">
					<Typography variant="subtitle">Add new category</Typography>
				</Box>
				<Box className="add-modal__content">
					<TextField
						label="Сategory name"
						variant="outlined"
						value={inputValue}
						onChange={event => handleEnterInfo(event)}
						className="add-modal__input"
						inputProps={{ maxLength: 30 }}
					/>
					<Box className="add-modal__buttons">
						<Button variant="buttonLight" color="secondary" size="medium" onClick={handleCloseModal}>
							<Typography variant="smallDetails">Cansel</Typography>
						</Button>
						<Button
							variant="buttonDark"
							color="primary"
							size="medium"
							disabled={!inputValue}
							onClick={() => {
								handleAddCustomCategory(inputValue);
								setInputValue('');
							}}
						>
							<Typography variant="smallDetails">Add category</Typography>
						</Button>
					</Box>
				</Box>
				<Snackbar open={isShowError} autoHideDuration={4000} onClose={() => setIsShowError(false)}>
					<Alert onClose={() => setIsShowError(false)} severity="error" sx={{ width: '100%' }}>
						<Typography variant="subtitle">There is already a category with that name!</Typography>
					</Alert>
				</Snackbar>
			</Box>
		</Box>,
		// @ts-ignore
		containerEl
	);
};

export default AddCategoryModal;
