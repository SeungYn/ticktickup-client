import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { RootState } from '../../modules';

export default function LoginFormContainer() {
  const { login } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  console.log(login);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  const onChange = (e) => {};
  return <AuthForm type={'login'} form={login} onSubmit={onSubmit} />;
}
