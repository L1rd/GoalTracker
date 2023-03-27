import { StoreType } from 'redux/store';

export const selectorGetTheme = (store: StoreType): string | null => store.goals.theme;
