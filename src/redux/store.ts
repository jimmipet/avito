import { configureStore } from '@reduxjs/toolkit'
import platformReducer from './slices/Filtr/platformSlice';
import genreReducer from './slices/Filtr/genreSlice';
import otherReducer from './slices/Filtr/otherSlice';

export const store = configureStore({
  reducer: {
    platform: platformReducer,
    genre: genreReducer,
    other: otherReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch