/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useState } from 'react';

export const useEnableEffect = (
	setIsShow: ((value: boolean) => void) | Dispatch<SetStateAction<boolean>>,
	onClose?: any
) => {
	const [enableCloseEffect, setEnableCloseEffect] = useState<boolean>(false);

	const handleCloseModal = () => {
		setEnableCloseEffect(true);
		setTimeout(() => {
			setIsShow(false);
			setEnableCloseEffect(false);
			onClose?.();
		}, 500);
	};

	return { enableCloseEffect, handleCloseModal };
};
