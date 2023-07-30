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
	roadmaps: [
		{
			title: 'Learning Front-end',
			createdAt: '30/07/2023',
			author: 'Artem',
			stackOfTechnology: 'Front-end',
			goals: [
				{
					title: 'Learn Styles Tools',
					category: 'Personal',
					priority: 4,
					start: '30/05/2023',
					end: '30/06/2023',
					tasks: [
						{ time: '12:58', title: 'CSS' },
						{ time: '12:58', title: 'SCSS/SASS' },
						{ time: '12:58', title: 'Styled-Components/Stitches' },
						{ time: '12:58', title: 'Material UI' },
					],
					subgoals: [],
					type: 'Multi-step',
					progress: 0,
					status: 'in-progress',
				},
				{
					title: 'Learn React',
					category: 'Personal',
					priority: 4,
					start: '30/06/2023',
					end: '30/07/2023',
					tasks: [],
					subgoals: [
						{
							end: '30/07/2023',
							progress: 0,
							start: '29/07/2023',
							title: 'Main Concepts',
							tasks: [
								{
									time: '12:07',
									title: 'Introducing JSX',
								},
								{
									time: '12:07',
									title: 'Rendering Elements',
								},
								{
									time: '12:07',
									title: 'Components and Props',
								},
								{
									time: '12:07',
									title: 'State and Lifecycle',
								},
								{
									time: '12:07',
									title: 'Handling Events',
								},
							],
						},
						{
							end: '30/07/2023',
							progress: 0,
							start: '29/07/2023',
							title: 'Hooks',
							tasks: [
								{
									time: '12:07',
									title: 'Introducing Hooks',
								},
								{
									time: '12:07',
									title: 'Hooks at a Glance',
								},
								{
									time: '12:07',
									title: 'Using the State Hook',
								},
								{
									time: '12:07',
									title: 'Using the Effect Hook',
								},
								{
									time: '12:07',
									title: 'Rules of Hooks',
								},
							],
						},
					],
					type: 'Multi-step',
					progress: 0,
					status: 'in-progress',
				},
				{
					title: 'Learn Redux',
					category: 'Personal',
					priority: 4,
					start: '30/07/2023',
					end: '30/08/2023',
					tasks: [
						{ time: '12:58', title: 'Introduction' },
						{ time: '12:58', title: 'Tutorials' },
						{ time: '12:58', title: 'Using Redux Toolkit' },
						{ time: '12:58', title: 'API Reference' },
					],
					subgoals: [],
					type: 'Multi-step',
					progress: 0,
					status: 'in-progress',
				},
			],
		},
	],
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
