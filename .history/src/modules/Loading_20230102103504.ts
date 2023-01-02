import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: { loading: false },
  reducers: {
    startLoading: (state, { payload }) => {
      state.loading = true;
    },
  },
});
