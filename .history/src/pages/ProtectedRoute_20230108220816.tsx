import { useAppSelector } from '../hooks/rtk';

export default function ProtectedRoute() {
  const user = useAppSelector((state) => state.user);
  console.log(user);

  return <div></div>;
}
