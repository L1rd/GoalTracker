import { GoalCategory, GoalInterface, GoalStatus } from 'utils/interfaces/goal';
import { RoadmapInterface } from 'utils/interfaces/roadmap';

export interface IGoalReducer {
	goals: GoalInterface[];
	categories: GoalCategory[];
	statuses: GoalStatus[];
	theme: string;
	currentPage: string;
	language: string;
	roadmaps: RoadmapInterface[];
}
