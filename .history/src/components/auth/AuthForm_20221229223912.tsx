import styles from './authForm.modue.scss';
import classNames from 'classnames';
const cx = classNames.bind(styles);

export default function AuthForm() {
  return (
    <form className={cx('form')}>
      <label htmlFor='login'>로그인</label>
      <input type='text' />
      <input type='password' />
      <button>로그인</button>
    </form>
  );
}
