import styles from './authForm.modue.scss';
import classNames from 'classnames';
const cs = classNames.bind(styles);
console.log(cs);

export default function AuthForm() {
  return (
    <form>
      <input type='text' />
      <input type='password' />
      <button>로그인</button>
    </form>
  );
}
