import { createSlice } from '@reduxjs/toolkit';

export interface MoviewState {
	goals: unknown[];
}

const initialState: MoviewState = {
	goals: [],
};

export const goalsSlice = createSlice({
	name: 'goals',
	initialState,
	reducers: {},
});

export default goalsSlice.reducer;
