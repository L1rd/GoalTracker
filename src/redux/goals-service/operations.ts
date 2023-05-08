import { PayloadAction } from '@reduxjs/toolkit';
import { IGoalReducer } from './interfaces';

export const changeThemeOperation = (state: IGoalReducer, { payload }: PayloadAction<string>) => {
	state.theme = payload;
};

export const changePageOperation = (state: IGoalReducer, { payload }: PayloadAction<string>) => {
	state.currentPage = payload;
};
