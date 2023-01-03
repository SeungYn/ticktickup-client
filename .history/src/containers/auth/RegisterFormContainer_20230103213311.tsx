import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { AppDispatch, RootState } from '../../modules';
import { authRegister, changeField } from '../../modules/auth';

export default function RegisterFormContainer() {
  const { register, authError } = useSelector((state: RootState) => state.auth);
  const { loading } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');

    const test = await dispatch(
      authRegister({ username: register.username, password: register.password })
    );
    console.log(test);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeField({ form: 'register', name, value }));
  };

  return (
    <AuthForm
      type={'register'}
      form={register}
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading.loading}
      passwordMatch={register.passwordMatch}
      authError={authError}
    />
  );
}
