import { useAppSelector } from '../hooks/rtk';

export default function ProtectedRoute() {
  const a = useAppSelector((state) => state.user);

  return <div></div>;
}
