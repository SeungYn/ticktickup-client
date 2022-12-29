import styles from './authForm.modue.scss';
import classNames from 'classnames';
import AuthBtn from '../common/AuthBtn';
import { Link, useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
interface AuthFormType {
  type: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function AuthForm({ type, onSubmit }: AuthFormType) {
  const navigate = useNavigate();
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
      {type === 'register' && (
        <label htmlFor='password'>
          비밀번호 확인
          <input type='password' name='password' />
        </label>
      )}
      <AuthBtn title={type} />

      <div className={cx('footer')}>
        <button
          className={cx('footerBtn')}
          onClick={() =>
            type === 'register' ? navigate('/register') : navigate('/login')
          }
        >
          회원가입
        </button>
        <Link to='/' className={cx('footerBtn')}>
          f
        </Link>
        <span className={cx('gap')}></span>
        <button className={cx('footerBtn')}>아이디 찾기</button>
        <span className={cx('gap')}></span>
        <button className={cx('footerBtn')}>비밀번호 찾기</button>
      </div>
    </form>
  );
}
