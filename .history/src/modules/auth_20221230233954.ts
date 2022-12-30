import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Register {
  username: string;
  password: string;
  passwordConfirm: string;
  [key: string]: string;
}
type test = {
  f?: string;
};
export interface Login {
  username: string;
  password: string;
  [key: string]: string;
}
interface InitialAuthFormState {
  register: Register;
  login: Login;
  [key: string]: string;
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
      { payload }: PayloadAction<{ form: string; value: string; name: string }>
    ) => {
      console.log(state);
      const { form, name, value } = payload;
      state[form];
    },
  },
});

export const { changeField } = authSlice.actions;

export default authSlice.reducer;
