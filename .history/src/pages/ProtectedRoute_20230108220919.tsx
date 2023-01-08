import { useAppSelector } from '../hooks/rtk';

interface ProtectedRouteType {
  children?: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteType) {
  const user = useAppSelector((state) => state.user);
  console.log(user);

  return <div></div>;
}
