import React from 'react';
import AuthForm from '../components/auth/AuthForm';

export default function Login() {
  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  return <AuthForm type={'login'} onClickEvent={() => console.log('click')} />;
}
