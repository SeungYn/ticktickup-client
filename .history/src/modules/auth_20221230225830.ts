import { createSlice } from '@reduxjs/toolkit';

export interface Register {
  username: string | null;
  password: string | null;
  passwordConfirm: string | null;
}

export interface Login {
  username: string | null;
  password: string | null;
}
interface InitialAuthFormState {
  register: Register;
  login: Login;
}

const initialAuthFormState: InitialAuthFormState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },

  login: {
    username: '',
    password: '',
  },
};

const authSlice = createSlice({
  name: 'authForm',
  initialState: initialAuthFormState,
  reducers: {
    changeField: (state, payload) => {
      console.log(state, payload);
    },
  },
});

export const { changeField } = authSlice.actions;

export default authSlice.reducer;
