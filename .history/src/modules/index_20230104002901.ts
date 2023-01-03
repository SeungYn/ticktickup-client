import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import loadingReducer from './Loading';
import modelReducer from './model';

export const store = configureStore({
  reducer: { auth: authReducer, loading: loadingReducer, model: modelReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
