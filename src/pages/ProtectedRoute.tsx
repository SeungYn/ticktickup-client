import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/rtk';

interface ProtectedRouteType {
  children?: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteType) {
  const { pathname } = useLocation();

  const user = useAppSelector((state) => state.user);

  if (!user.username) {
    return <Navigate to='/login' replace />;
  }
  if (['/login', 'register'].includes(pathname))
    return <Navigate to='/' replace />;
  return <>{children}</>;
}
