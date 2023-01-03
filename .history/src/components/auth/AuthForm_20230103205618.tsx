import styles from './authForm.modue.scss';
import classNames from 'classnames';
import AuthBtn from '../common/AuthBtn';
import { Link } from 'react-router-dom';
import { Login, Register } from '../../modules/auth';
import { AppDispatch } from '../../modules';
import React from 'react';
import { css } from 'styled-components';
const cx = classNames.bind(styles);
interface AuthFormType {
  type: string;
  form: Login | Register;
  loading?: boolean;
  passwordMatch?: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthForm({
  type,
  form,
  onChange,
  onSubmit,
  loading,
  passwordMatch,
}: AuthFormType) {
  return (
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
        <label htmlFor='password'>
          비밀번호 확인
          <input
            type='password'
            name='passwordConfirm'
            value={form.passwordConfirm}
            className={cx({ passwordNotMatch: !passwordMatch })}
            onChange={onChange}
            required
          />
        </label>
      )}
      {`${loading} loading ${passwordMatch} password`}
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
  );
}
