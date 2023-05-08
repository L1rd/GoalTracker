import { createSlice } from '@reduxjs/toolkit';
import { IGoalReducer } from './interfaces';
import {
	changeThemeOperation,
	createGoalOperation,
	changePageOperation,
	createCategoryOperation,
	deleteCategoryOperation,
	updateCategoryOperation,
	updateCategoryStatus,
	deleteGoalOperation,
} from './operations';

const initialState: IGoalReducer = {
	goals: [],
	categories: [
		{
			title: 'Personal',
			isCustom: false,
			count: 0,
		},
		{
			title: 'Home',
			isCustom: false,
			count: 0,
		},
		{
			title: 'Work',
			isCustom: false,
			count: 0,
		},
	],
	statuses: [
		{
			title: 'Complete',
			count: 0,
		},
		{
			title: 'In Progress',
			count: 0,
		},
		{
			title: 'On Hold',
			count: 0,
		},
		{
			title: 'Timed Out',
			count: 0,
		},
	],
	theme: 'theme-dark',
	currentPage: '',
};

export const goalsSlice = createSlice({
	name: 'goals',
	initialState,
	reducers: {
		changeTheme: changeThemeOperation,
		changePage: changePageOperation,
		createGoal: createGoalOperation,
		createCategory: createCategoryOperation,
		deleteCategory: deleteCategoryOperation,
		updateCategory: updateCategoryOperation,
		updateStatus: updateCategoryStatus,
		deleteGoal: deleteGoalOperation,
	},
});

export const {
	changeTheme,
	changePage,
	createGoal,
	createCategory,
	deleteCategory,
	updateCategory,
	updateStatus,
	deleteGoal,
} = goalsSlice.actions;
export default goalsSlice.reducer;
