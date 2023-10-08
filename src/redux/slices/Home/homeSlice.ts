import { createSlice } from '@reduxjs/toolkit';

const homePageSlice = createSlice({
  name: 'homePage',
  initialState: {
    selectedGenre: null,
    selectedOther: null,
    selectedPlatform: null,
  },
  reducers: {
    setGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    resetGenre: (state) => {
      state.selectedGenre = null;
    },
    setOther: (state, action) => {
      state.selectedOther = action.payload;
    },
    resetOther: (state) => {
      state.selectedOther = null;
    },
    setPlatform: (state, action) => {
      state.selectedPlatform = action.payload;
    },
    resetPlatform: (state) => {
      state.selectedPlatform = null;
    },
  },
});

export const {
  setGenre,
  resetGenre,
  setOther,
  resetOther,
  setPlatform,
  resetPlatform,
} = homePageSlice.actions;

export default homePageSlice.reducer;
