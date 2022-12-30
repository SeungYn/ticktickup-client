import AuthForm from '../../components/auth/AuthForm';

export default function LoginForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };
  return <AuthForm type={'login'} onSubmit={onSubmit} />;
}
