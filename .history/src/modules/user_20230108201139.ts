import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialUserFormStateType {
  username?: string | null;
  service?: string | null;
}

const initialUserState: InitialUserFormStateType = {
  username: localStorage.getItem('username'),
  service: localStorage.getItem('service'),
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<InitialUserFormStateType>) => {
      state.username = payload.username;
      state.service = payload.service;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
