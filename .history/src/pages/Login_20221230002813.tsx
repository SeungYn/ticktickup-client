import React from 'react';
import AuthForm from '../components/auth/AuthForm';

export default function Login() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };
  return <AuthForm type={'login'} onClickEvent={onSubmit} />;
}
