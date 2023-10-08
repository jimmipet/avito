import { configureStore } from '@reduxjs/toolkit'
import platformReducer from './slices/platformSlice';
import genreReducer from './slices/genreSlice';
import otherReducer from './slices/otherSlice';

export const store = configureStore({
  reducer: {
    platform: platformReducer,
    genre: genreReducer,
    other: otherReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch