import { createSlice } from '@reduxjs/toolkit';
import { IGoalReducer } from './interfaces';
import { changeThemeOperation } from './operations';

const initialState: IGoalReducer = {
	goals: [],
	theme: 'theme-dark',
};

export const goalsSlice = createSlice({
	name: 'goals',
	initialState,
	reducers: {
		changeTheme: changeThemeOperation,
	},
});
export const { changeTheme } = goalsSlice.actions;
export default goalsSlice.reducer;
