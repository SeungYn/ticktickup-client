import AuthForm from '../../components/auth/AuthForm';

export default function LoginForm() {
  return <AuthForm type={'login'} onSubmit={onSubmit} />;
}
