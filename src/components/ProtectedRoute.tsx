import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;