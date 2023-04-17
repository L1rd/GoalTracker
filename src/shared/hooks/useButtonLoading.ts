import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { DispatchType } from 'redux/store';
import './components/LoaderButton/index.sass';

export const useLoading = () => {
	const dispatch: DispatchType = useDispatch();
	const [isLoading, setLoading] = useState(false);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const startLoading = async (action: AsyncThunkAction<any, any, any>) => {
		setLoading(true);
		return dispatch(action)
			.unwrap()
			.finally(() => setLoading(false));
	};

	return { isLoading, startLoading, setLoading };
};
