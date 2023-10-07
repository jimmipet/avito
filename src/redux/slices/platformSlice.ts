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
  },
});
export const selectSelectedPlatform = (state) => state.platform.selectedPlatform;
export const { setPlatform } = platformSlice.actions;
export default platformSlice.reducer;
