import { PayloadAction } from '@reduxjs/toolkit';
import { GoalCategory, GoalInterface, GoalStatus } from 'utils/interfaces/goal';
import { RoadmapInterface } from 'utils/interfaces/roadmap';
import { IGoalReducer } from './interfaces';

export const changeThemeOperation = (state: IGoalReducer, { payload }: PayloadAction<string>) => {
	state.theme = payload;
};

export const changePageOperation = (state: IGoalReducer, { payload }: PayloadAction<string>) => {
	state.currentPage = payload;
};

export const createGoalOperation = (state: IGoalReducer, { payload }: PayloadAction<GoalInterface>) => {
	state.goals = [
		...state.goals,
		{
			title: payload.title,
			category: payload.category,
			priority: payload.priority,
			start: payload.start,
			end: payload.end,
			tasks: payload.tasks,
			subgoals: payload.subgoals,
			type: payload.type,
			progress: payload.progress,
			status: payload.status,
		},
	];
};

export const createCategoryOperation = (state: IGoalReducer, { payload }: PayloadAction<GoalCategory>) => {
	state.categories = [...state.categories, payload];
};

export const deleteCategoryOperation = (state: IGoalReducer, { payload }: PayloadAction<string>) => {
	state.categories = state.categories.filter(item => item.title !== payload);
};

export const updateCategoryOperation = (state: IGoalReducer, { payload }: PayloadAction<GoalCategory[]>) => {
	state.categories = [...payload];
};

export const updateCategoryStatus = (state: IGoalReducer, { payload }: PayloadAction<GoalStatus[]>) => {
	state.statuses = [...payload];
};

export const deleteGoalOperation = (state: IGoalReducer, { payload }: PayloadAction<string>) => {
	state.goals = state.goals.filter(item => item.title !== payload);
};

export const changeLanguageOperation = (state: IGoalReducer, { payload }: PayloadAction<string>) => {
	state.language = payload;
};

export const createRoadmapOperation = (state: IGoalReducer, { payload }: PayloadAction<RoadmapInterface>) => {
	state.roadmaps = [...state.roadmaps, payload];
};
