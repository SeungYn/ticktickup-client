import styles from './authForm.modue.scss';
import classNames from 'classnames';
import AuthBtn from '../common/AuthBtn';
const cx = classNames.bind(styles);
interface AuthFormType {
  type: string;
  onClickEvent: () => void;
}

export default function AuthForm({ type, onClickEvent }: AuthFormType) {
  return (
    <form className={cx('form')}>
      <h1>로그인</h1>
      <label htmlFor='login'>
        로그인
        <input type='text' />
      </label>

      <label htmlFor='password'>
        비밀번호
        <input type='password' />
      </label>

      <AuthBtn title={'로그인'} onClickEvent={() => {}} />
    </form>
  );
}
