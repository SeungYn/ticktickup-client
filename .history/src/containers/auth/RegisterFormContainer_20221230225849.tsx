import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { RootState } from '../../modules';
import { changeField } from '../../modules/auth';

export default function RegisterFormContainer() {
  const { register } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  const onChange = (e: any) => {
    dispatch(changeField({ a: 1 }));
  };
  return (
    <AuthForm
      type={'login'}
      form={register}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
