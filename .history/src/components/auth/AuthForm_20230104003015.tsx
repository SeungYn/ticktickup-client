import styles from './authForm.modue.scss';
import classNames from 'classnames';
import AuthBtn from '../common/AuthBtn';
import { Link } from 'react-router-dom';
import { Login, Register } from '../../modules/auth';
import { AppDispatch } from '../../modules';
import React from 'react';
import { css } from 'styled-components';
import ConfirmModal from '../common/ConfirmModal';
const cx = classNames.bind(styles);
interface AuthFormType {
  type: string;
  form: Login | Register;
  loading?: boolean;
  passwordMatch?: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  authError?: null | string;
}

export default function AuthForm({
  type,
  form,
  onChange,
  onSubmit,
  loading,
  passwordMatch,
  authError,
}: AuthFormType) {
  console.log(passwordMatch);
  return (
    <>
      {true && (
        <ConfirmModal
          title='test'
          content='tesddewjafiuajewiuhfiuawhfiuawhieufjawoijgrlkskfkeawojfoij  fawfwat'
          callback={() => {}}
        ></ConfirmModal>
      )}
      <form className={cx('form')} onSubmit={onSubmit}>
        <h1>{type}</h1>
        <label htmlFor='username'>
          아이디
          <input
            type='text'
            name='username'
            onChange={onChange}
            value={form.username}
            required
          />
        </label>

        <label htmlFor='password'>
          비밀번호
          <input
            type='password'
            name='password'
            onChange={onChange}
            value={form.password}
            required
          />
        </label>

        {type === 'register' && (
          <label htmlFor='password' id='label-last'>
            <div>
              <span>비밀번호 확인</span>{' '}
              {!passwordMatch && (
                <span className={cx({ passwordNotMatch: !passwordMatch })}>
                  비밀번호를 확인해 주세요
                </span>
              )}
            </div>
            <input
              type='password'
              name='passwordConfirm'
              value={form.passwordConfirm}
              onChange={onChange}
              required
            />
          </label>
        )}
        {authError && <span style={{ color: 'red' }}>{authError}</span>}
        <AuthBtn title={type} />

        <div className={cx('footer')}>
          {type === 'login' ? (
            <Link to='/register' className={cx('footerBtn')}>
              회원가입
            </Link>
          ) : (
            <Link to='/login' className={cx('footerBtn')}>
              로그인
            </Link>
          )}
          <span className={cx('gap')}></span>
          <button className={cx('footerBtn')}>아이디 찾기</button>
          <span className={cx('gap')}></span>
          <button className={cx('footerBtn')}>비밀번호 찾기</button>
        </div>
      </form>
    </>
  );
}
