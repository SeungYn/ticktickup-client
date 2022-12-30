import { createSlice } from '@reduxjs/toolkit';

export interface Register {
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface Login {
  username: string;
  password: string;
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
      console.log(state);
    },
  },
});

export const { changeField } = authSlice.actions;

export default authSlice.reducer;
