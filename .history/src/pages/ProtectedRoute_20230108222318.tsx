import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/rtk';

interface ProtectedRouteType {
  children?: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteType) {
  const user = useAppSelector((state) => state.user);
  console.log(user);
  if (!user.username) {
    return <Navigate to='/login' replace />;
  }
  return <>{children}</>;
}
