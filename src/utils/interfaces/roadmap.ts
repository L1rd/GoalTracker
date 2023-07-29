import { GoalInterface } from './goal';

export interface RoadmapInterface {
	title: string;
	createdAt: string;
	author: string;
	stackOfTechnology: string;
	goals: GoalInterface[];
}
