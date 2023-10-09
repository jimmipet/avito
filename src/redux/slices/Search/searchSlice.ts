import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState:{
        searchValue:null
    },
    reducers:{
        setSearch:(state, action) =>{
            state.searchValue = action.payload;
        },
    },
})
export const selectSelectedSearch = (state) => state.search.searchValue
export const {setSearch} = searchSlice.actions;
export default searchSlice.reducer