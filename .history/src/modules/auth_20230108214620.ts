import { AxiosResponse } from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  passwordMatch: boolean;
  [key: string]: string | boolean;
};

export type Login = {
  username: string;
  password: string;
  [key: string]: string;
};

export const authRegister = createAsyncThunk<
  { token: string; username: string },
  { username: string; password: string },
  {
    rejectValue: AuthFailResponse;
    dispatch: AppDispatch;
  }
>('auth/REGISTER', async (form, thunkAPI) => {
  console.log('async');
  console.log(thunkAPI);
  thunkAPI.dispatch(startLoading());
  try {
    const res = (await authService.signup(
      form.username,
      form.password
    )) as AxiosResponse;

    return res.data;
  } catch (e) {
    //todo 에러메세지 가져오기

    return thunkAPI.rejectWithValue({ error: String(e) });
  } finally {
    thunkAPI.dispatch(finishLoading());
  }
});

export const authLogin = createAsyncThunk(
  'auth/LOGIN',
  async (form: Login, thunkAPI) => {
    thunkAPI.dispatch(startLoading());
    try {
      const res = (await authService.login(
        form.username,
        form.password
      )) as AxiosResponse;

      return res.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue({ error: '123' });
    } finally {
      thunkAPI.dispatch(finishLoading());
    }
  }
);

interface InitialAuthFormState {
  register: Register;
  login: Login;
  authError: string | null | undefined;
  authDuplicateError: string | null;
  auth: null | { [key: string]: string };
}

const initialAuthFormState: InitialAuthFormState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
    passwordMatch: true,
  },

  login: {
    username: '',
    password: '',
  },
  authError: null,
  authDuplicateError: null,
  auth: null,
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
      if (form === 'register') {
        if (state[form].password !== state[form].passwordConfirm)
          state[form].passwordMatch = false;
        else state[form].passwordMatch = true;
      }
    },
    initialForm: (state) => {
      console.log(initialAuthFormState);
      return initialAuthFormState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authRegister.pending, (state, action) => {
        state.authError = null;
        console.log('pending auth');
      })
      .addCase(authRegister.fulfilled, (state, action) => {
        state.auth = action.payload;

        console.log('fulfilled auth');
      })
      .addCase(authRegister.rejected, (state, action) => {
        state.authError = action.payload?.error;
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
