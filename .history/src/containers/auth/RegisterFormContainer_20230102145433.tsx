import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { AppDispatch, RootState } from '../../modules';
import { authRegister, changeField } from '../../modules/auth';

export default function RegisterFormContainer() {
  const { register } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
    dispatch(
      authRegister({ username: register.username, password: register.password })
    );
  };

  const onChange = (e: any) => {
    //dispatch(changeField({ a: 1 }));
  };
  return (
    <AuthForm
      type={'register'}
      form={register}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
