import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from '@reduxjs/toolkit';
import { AppDispatch } from '.';
import AuthService from '../service/authService';
import { finishLoading, startLoading } from './Loading';

const authService = AuthService.getHttpInstance();

export interface AuthSuccessResponse {
  username: string;
  token: string;
}

export interface AuthFailResponse {
  error: string;
}

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

export const authRegister = createAsyncThunk(
  'auth/REGISTER',
  async (form: { username: string; password: string }, thunkAPI) => {
    console.log('async');
    console.log(thunkAPI);
    const res = await authService.signup(form.username, form.password);
    console.log('res', res);
    try {
      return { token: '123', username: '123' };
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: '123' });
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/LOGIN',
  async (form: Login, thunkAPI) => {
    thunkAPI.dispatch(startLoading());
    try {
      return { payload: { token: '123', username: '123' } };
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: '123' });
    } finally {
      thunkAPI.dispatch(finishLoading());
    }
  }
);

interface InitialAuthFormState {
  register: Register;
  login: Login;
  authError: string | null;
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
  authError: null,
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
      console.log(current(state));
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
  extraReducers: (builder) => {
    builder
      .addCase(authRegister.pending, (state, action) => {
        console.log('pending auth');
      })
      .addCase(authRegister.fulfilled, (state, action) => {
        console.log('fulfilled auth');
      })
      .addCase(authRegister.rejected, (state, action) => {
        console.log('rejected auth');
      })
      .addCase(authLogin.pending, (state, action) => {
        console.log('pending');
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        console.log('fulfilled');
      })
      .addCase(authLogin.rejected, (state, action) => {
        console.log('rejected');
      });
  },
});

export const { changeField, initialForm } = authSlice.actions;

export default authSlice.reducer;
