import React from 'react';
import { Outlet } from 'react-router-dom';

import { useRedirectLayout } from 'hooks/useRedirectLayout';
import { ROUTES } from 'routes/config/constants';
import { TRAFFIC_MANAGEMENT_CHILDREN } from 'routes/config/routesChildren/traficManagement';

const TrafficManagementLayout = () => {
  useRedirectLayout(ROUTES.TRAFFIC_MANAGEMENT.PATH, TRAFFIC_MANAGEMENT_CHILDREN);

  return <Outlet />;
};

export default TrafficManagementLayout;
