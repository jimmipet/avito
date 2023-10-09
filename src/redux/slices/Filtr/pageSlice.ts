import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    currentPage: 1
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },

  },
});
export const selectCurrentPage = (state) => state.page.currentPage;
export const { setPage} = pageSlice.actions;
export default pageSlice.reducer;
