import { createSlice } from '@reduxjs/toolkit';

const otherSlice = createSlice({
  name: 'other',
  initialState: {
    selectedOther: null, 
  },
  reducers: {
    setOther: (state, action) => {
      state.selectedOther = action.payload;
    },
  },
});
export const selectSelectedOther = (state) => state.other.selectedOther;
export const { setOther } = otherSlice.actions;
export default otherSlice.reducer;
