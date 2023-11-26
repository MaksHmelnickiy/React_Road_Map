import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAvailablePath } from 'hooks/useRedirectLayout';
import { ROUTES } from 'routes/config/constants';

// Layout for redirecting to home path
const HomeLayout = () => {
  const availablePath = useAvailablePath();

  return <Navigate to={availablePath || ROUTES.PERMISSION_DENIED.PATH} replace />;
};

export default HomeLayout;
