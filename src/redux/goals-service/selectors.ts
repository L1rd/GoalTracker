import { StoreType } from 'redux/store';
import { GoalCategory, GoalInterface, GoalStatus } from 'utils/interfaces/goal';
import { RoadmapInterface } from 'utils/interfaces/roadmap';

export const selectorGetCurrentPage = (store: StoreType): string | null => store.goals.currentPage;
export const selectorGetTheme = (store: StoreType): string => store.goals.theme;
export const selectorGetGoals = (store: StoreType): GoalInterface[] => store.goals.goals;
export const selectorGetCategories = (store: StoreType): GoalCategory[] => store.goals.categories;
export const selectorGetStatuses = (store: StoreType): GoalStatus[] => store.goals.statuses;
export const selectorGetLanguage = (store: StoreType): string => store.goals.language;
export const selectorGetRoadmaps = (store: StoreType): RoadmapInterface[] => store.goals.roadmaps;
