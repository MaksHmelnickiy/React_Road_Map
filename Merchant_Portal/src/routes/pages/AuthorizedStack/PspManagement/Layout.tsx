import React from 'react';
import { Outlet } from 'react-router-dom';

import { useRedirectLayout } from 'hooks/useRedirectLayout';
import { ROUTES } from 'routes/config/constants';
import { PSP_MANAGEMENT_CHILDREN } from 'routes/config/routesChildren/pspManagement';

const Layout = () => {
  useRedirectLayout(ROUTES.PSP_MANAGEMENT.PATH, PSP_MANAGEMENT_CHILDREN);

  return <Outlet />;
};

export default Layout;
