import React from 'react';
import AuthForm from '../components/auth/AuthForm';

export default function Login() {
  const onSubmit = (
    e: React.ChangeEvent<React.MouseEvent<HTMLButtonElement>>
  ) => {
    e.preventDefault();
    console.log('submit');
  };
  return <AuthForm type={'login'} onClickEvent={onSubmit} />;
}
