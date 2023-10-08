import { createSlice } from '@reduxjs/toolkit';

const platformSlice = createSlice({
  name: 'platform',
  initialState: {
    selectedPlatform: null,
  },
  reducers: {
    setPlatform: (state, action) => {
      state.selectedPlatform = action.payload;
    },
    resetPlatform: (state) => {
      state.selectedPlatform= null;
    },
  },
});
export const selectSelectedPlatform = (state) => state.platform.selectedPlatform;
export const { setPlatform, resetPlatform } = platformSlice.actions;
export default platformSlice.reducer;
