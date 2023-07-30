/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoalCategory, GoalInterface, GoalStatus } from 'utils/interfaces/goal';

export interface IGoalReducer {
	goals: GoalInterface[];
	categories: GoalCategory[];
	statuses: GoalStatus[];
	theme: string;
	currentPage: string;
	language: string;
	roadmaps: any[];
}
