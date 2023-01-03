import { createSlice } from '@reduxjs/toolkit';

const modelSlice = createSlice({
  name: 'modal',
  initialState: { state: false },
  reducers: {
    openModal: (state) => {
      state.state = true;
    },
    closeModal: (state) => {
      state.state = false;
    },
  },
});

export const { openModal, closeModal } = modelSlice.actions;
export default modelSlice.reducer;
