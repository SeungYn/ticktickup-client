import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { RootState } from '../../modules';
import { authLogin, authRegister, changeField, initialForm } from '../../modules/auth';

export default function LoginFormContainer() {
  const { login } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
    dispatch(authLogin({username:'123', password:'123'})));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'login', name, value }));
  };

  useEffect(() => {
    dispatch(initialForm({ form: 'login' }));
  }, [dispatch]);

  return (
    <AuthForm
      type={'login'}
      form={login}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
