import { createSlice } from '@reduxjs/toolkit';

interface Register {
  username: string | null;
  password: string | null;
  passwordConfirm: string | null;
}

interface Login {
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
    changeField: (state, payload) => {},
  },
});

export default authSlice;
export const a = 1;
