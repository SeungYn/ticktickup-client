import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialUserFormStateType {
  username: string;
  service: string;
}

const initialUserState: InitialUserFormStateType = {
  username: '',
  service: '',
};
