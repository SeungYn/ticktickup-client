import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
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

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
