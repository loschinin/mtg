import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './index.ts';
import reviewsData from '../../mockData/data.json';

interface Review {
  name: string;
  review: string;
  date: string;
}

interface ReviewsState {
  ru: { [key: string]: Review };
  en: { [key: string]: Review };
}

const initialState: ReviewsState = reviewsData as ReviewsState;

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReview() {},
  },
});

export const selectReviews = (state: RootState, language: 'ru' | 'en') =>
  Object.values(state.reviews[language]);

export default reviewsSlice.reducer;
