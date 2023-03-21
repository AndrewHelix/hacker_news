import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './news/newsReducer';

export const store = configureStore({
	reducer: {
		news: newsReducer,
	},
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
