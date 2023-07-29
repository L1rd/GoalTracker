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
	changeLanguageOperation,
	createRoadmapOperation,
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
			title: 'complete',
			count: 0,
		},
		{
			title: 'in-progress',
			count: 0,
		},
		{
			title: 'on-hold',
			count: 0,
		},
		{
			title: 'timed-out',
			count: 0,
		},
	],
	theme: 'theme-dark',
	currentPage: '',
	language: 'en',
	roadmaps: [],
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
		changeLanguage: changeLanguageOperation,
		createRoadmap: createRoadmapOperation,
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
	changeLanguage,
	createRoadmap,
} = goalsSlice.actions;
export default goalsSlice.reducer;
