import { createSlice } from '@reduxjs/toolkit';
import { IGoalReducer } from './interfaces';
import { changePageOperation, changeThemeOperation } from './operations';

const initialState: IGoalReducer = {
	goals: [],
	theme: 'theme-dark',
	currentPage: '',
};

export const goalsSlice = createSlice({
	name: 'goals',
	initialState,
	reducers: {
		changeTheme: changeThemeOperation,
		changePage: changePageOperation,
	},
});
export const { changeTheme, changePage } = goalsSlice.actions;
export default goalsSlice.reducer;
