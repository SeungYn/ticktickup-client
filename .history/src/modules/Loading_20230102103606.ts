import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: { loading: false },
  reducers: {
    startLoading: (state, { payload }) => {
      state.loading = true;
    },
    finishLoading: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export const { startLoading, finishLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
