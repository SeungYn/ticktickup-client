import { title } from 'process';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import { AppDispatch, RootState } from '../../modules';
import { authRegister, changeField } from '../../modules/auth';
import { closeModal, openModal } from '../../modules/modal';

export default function RegisterFormContainer() {
  const navigate = useNavigate();
  const { register, authError, auth } = useSelector(
    (state: RootState) => state.auth
  );
  const { loading, modal } = useSelector((state: RootState) => state);
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

  const successRegister = () => {
    dispatch(closeModal());
    navigate('/login');
  };

  useEffect(() => {
    if (auth) {
      dispatch(openModal());
    }
  }, [auth]);

  return (
    <AuthForm
      type={'register'}
      form={register}
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading.loading}
      passwordMatch={register.passwordMatch}
      authError={authError}
      modalState={modal.state}
      modal={{
        title: '알림',
        content: '회원가입이 성공적으로 되었습니다.',
        callback: successRegister,
      }}
    />
  );
}
