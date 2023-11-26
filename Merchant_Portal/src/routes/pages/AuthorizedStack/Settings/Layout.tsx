import React from 'react';
import { Outlet } from 'react-router-dom';

import { useRedirectLayout } from 'hooks/useRedirectLayout';
import { ROUTES } from 'routes/config/constants';
import { SETTINGS_CHILDREN } from 'routes/config/routesChildren/settings';

const SettingsLayout = () => {
  useRedirectLayout(ROUTES.SETTINGS.PATH, SETTINGS_CHILDREN);

  return <Outlet />;
};

export default SettingsLayout;
