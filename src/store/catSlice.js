import { createSlice } from '@reduxjs/toolkit';

const catSlice = createSlice({
  name: 'cat',
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    getCatsFetch: state => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.isLoading = false;
      state.cats = action.payload;
    },
    getCatsFailure: state => {
      state.isLoading = false;
    },
  },
});

export const { getCatsFailure, getCatsFetch, getCatsSuccess } =
  catSlice.actions;

export default catSlice.reducer;
