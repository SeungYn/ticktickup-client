import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Register = {
  username: string;
  password: string;
  passwordConfirm: string;
  [key: string]: string;
};

export type Login = {
  username: string;
  password: string;
  [key: string]: string;
};

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
    changeField: (
      state,
      {
        payload,
      }: PayloadAction<{
        form: 'login' | 'register';
        value: string;
        name: string;
      }>
    ) => {
      const { form, name, value } = payload;
      state[form][name] = value;
    },
    initialForm: (
      state,
      { payload }: PayloadAction<{ form: 'login' | 'register' }>
    ) => {
      const { form } = payload;
    },
  },
});

export const { changeField } = authSlice.actions;

export default authSlice.reducer;
