import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from './reviewsSlice.ts';

export const index = configureStore({
  reducer: {
    reviews: reviewsReducer,
  },
});

export type RootState = ReturnType<typeof index.getState>;
