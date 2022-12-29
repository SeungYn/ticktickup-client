import styles from './authForm.modue.scss';
import classNames from 'classnames';
import AuthBtn from '../common/AuthBtn';
const cx = classNames.bind(styles);
interface AuthFormType {
  type: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function AuthForm({ type, onSubmit }: AuthFormType) {
  return (
    <form className={cx('form')} onSubmit={onSubmit}>
      <h1>{type}</h1>
      <label htmlFor='id'>
        아이디
        <input type='text' name='id' />
      </label>

      <label htmlFor='password'>
        비밀번호
        <input type='password' name='password' />
      </label>

      <AuthBtn title={'로그인'} />
      <div>
        <button>회원가입</button>
        <span></span>
        <button>아이디 찾기</button>
        <span></span>
        <button>비밀번호 찾기</button>
      </div>
    </form>
  );
}
