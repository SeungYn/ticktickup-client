import React from 'react';
import RegisterFormContainer from '../containers/auth/RegisterFormContainer';

export default function RegisterPage() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };
  return <RegisterFormContainer />;
}
