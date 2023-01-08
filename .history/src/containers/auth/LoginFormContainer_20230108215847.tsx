import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { AppDispatch, RootState } from '../../modules';
import {
  authLogin,
  authRegister,
  changeField,
  initialForm,
} from '../../modules/auth';
import { setUser } from '../../modules/user';

export default function LoginFormContainer() {
  const { login, auth, authError } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
    console.log(authLogin);
    dispatch(authLogin({ username: login.username, password: login.password }));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'login', name, value }));
  };

  useEffect(() => {
    dispatch(initialForm());

    return () => {
      dispatch(initialForm());
    };
  }, [dispatch]);

  useEffect(() => {
    console.log(auth);
    if (auth) {
      dispatch(setUser(auth));
    }
  }, [auth]);

  return (
    <AuthForm
      type={'login'}
      form={login}
      onChange={onChange}
      onSubmit={onSubmit}
      authError={authError}
    />
  );
}
