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
    resetOther:(state) => {
      state.selectedOther= null;
    },
  },
});
export const selectSelectedOther = (state) => state.other.selectedOther;
export const { setOther, resetOther} = otherSlice.actions;
export default otherSlice.reducer;
