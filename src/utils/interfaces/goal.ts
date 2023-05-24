export interface GoalTask {
	time: string;
	title: string;
}

export interface GoalCategory {
	title: string;
	isCustom: boolean;
	count?: number;
}

export interface GoalStatus {
	title: string;
	count?: number;
}

export interface SubGoal {
	title: string;
	start: string;
	end: string;
	progress: number;
	tasks: GoalTask[];
}

export interface GoalInterface {
	title: string;
	category: string;
	priority: number;
	start: string;
	end: string;
	tasks: GoalTask[];
	subgoals: SubGoal[];
	type: string;
	progress: number;
	status: string;
}
