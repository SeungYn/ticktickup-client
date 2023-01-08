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
      console.log(payload);
      const { username, service } = payload;
      state.username = username;
      state.service = service;
      localStorage.setItem('username', username as string);
      localStorage.setItem('service', service as string);
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
