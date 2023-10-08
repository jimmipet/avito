import { createSlice } from '@reduxjs/toolkit';

const genreSlice = createSlice({
  name: 'genre',
  initialState: {
    selectedGenre: null, 
  },
  reducers: {
    setGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    resetGenre: (state) => {
      state.selectedGenre = null;
    },
  },
});
export const selectSlectedGenre = (state) => state.genre.selectedGenre;
export const { setGenre,resetGenre } = genreSlice.actions;
export default genreSlice.reducer;
