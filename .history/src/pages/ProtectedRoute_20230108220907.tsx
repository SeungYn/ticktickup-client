import { useAppSelector } from '../hooks/rtk';

interface ProtectedRouteType {
  children: React.ReactNode;
}

export default function ProtectedRoute() {
  const user = useAppSelector((state) => state.user);
  console.log(user);

  return <div></div>;
}
