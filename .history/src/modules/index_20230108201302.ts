import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import loadingReducer from './Loading';
import modalReducer from './modal';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    modal: modalReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

console.log(typeof store.dispatch);
