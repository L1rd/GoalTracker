import { combineReducers, configureStore } from '@reduxjs/toolkit';
import goalsReducer from '../goals-service/reducer';

const rootReducer = combineReducers({
	goals: goalsReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type StoreType = ReturnType<typeof store.getState>;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
