/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useEnableEffect = (
	setIsShow?: ((value: boolean) => void) | Dispatch<SetStateAction<boolean>>,
	path?: number
) => {
	const navigate = useNavigate();
	const [enableCloseEffect, setEnableCloseEffect] = useState<boolean>(false);

	const handleCloseModal = () => {
		setEnableCloseEffect(true);
		setTimeout(() => {
			if (path) {
				navigate(path);
			} else if (setIsShow) {
				setIsShow(false);
			}
			setEnableCloseEffect(false);
		}, 500);
	};

	return { enableCloseEffect, handleCloseModal };
};
