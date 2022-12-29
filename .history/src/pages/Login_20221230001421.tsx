import React from 'react';
import AuthForm from '../components/auth/AuthForm';

export default function Login() {
  return <AuthForm type={'login'} onClickEvent={() => console.log('click')} />;
}
