import React from 'react';
import { Outlet } from 'react-router-dom';

import { useRedirectLayout } from 'hooks/useRedirectLayout';
import { ROUTES } from 'routes/config/constants';
import { MERCHANT_SETTINGS_CHILDREN } from 'routes/config/routesChildren/merchantSettings';

const MerchantsSettingsLayout = () => {
  useRedirectLayout(ROUTES.MERCHANTS_SETTINGS.PATH, MERCHANT_SETTINGS_CHILDREN);

  return <Outlet />;
};

export default MerchantsSettingsLayout;
