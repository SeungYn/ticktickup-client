import React from 'react';
import { useSelector } from 'react-redux';
import AuthForm from '../components/auth/AuthForm';

export default function Login() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };
  const test = useSelector((state) => state);
  return <AuthForm type={'login'} onSubmit={onSubmit} />;
}
