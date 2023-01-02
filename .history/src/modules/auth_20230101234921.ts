import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from '@reduxjs/toolkit';

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

const register = createAsyncThunk('auth/REGISTER', async (form, thunkAPI) => {
  console.log('async');
  console.log(thunkAPI);
});

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
      console.log(state[form]);
      state[form][name] = value;
    },
    initialForm: (
      state,
      { payload }: PayloadAction<{ form: 'login' | 'register' }>
    ) => {
      const { form } = payload;
      if (form === 'login') state[form] = initialAuthFormState[form];
      else state[form] = initialAuthFormState[form];
    },
  },
  extraReducers: (builder) => {},
});

export const { changeField, initialForm } = authSlice.actions;

export default authSlice.reducer;
