import styles from './authForm.modue.scss';
import classNames from 'classnames';
const cx = classNames.bind(styles);

export default function AuthForm() {
  return (
    <form className={cx('form')}>
      <h1>로그인</h1>
      <label htmlFor='login'>로그인</label>
      <input type='text' />
      <label htmlFor='password'>비밀번호</label>
      <input type='password' />
      <button>로그인</button>
    </form>
  );
}
