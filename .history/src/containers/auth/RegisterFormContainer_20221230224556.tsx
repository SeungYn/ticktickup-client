import { useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { RootState } from '../../modules';

export default function RegisterFormContainer() {
  const { register } = useSelector((state: RootState) => state.auth);
  console.log(register);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };
  return <AuthForm type={'login'} form={register} onSubmit={onSubmit} />;
}
