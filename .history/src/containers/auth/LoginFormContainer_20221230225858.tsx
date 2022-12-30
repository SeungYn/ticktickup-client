import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { RootState } from '../../modules';
import { changeField } from '../../modules/auth';

export default function LoginFormContainer() {
  const { login } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  console.log(login);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  const onChange = (e: any) => {
    dispatch(changeField(123));
  };
  return (
    <AuthForm
      type={'login'}
      form={login}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
