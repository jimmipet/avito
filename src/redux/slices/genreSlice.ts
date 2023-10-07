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
  },
});
export const selectSlectedGenre = (state) => state.genre.selectedGenre;
export const { setGenre } = genreSlice.actions;
export default genreSlice.reducer;
