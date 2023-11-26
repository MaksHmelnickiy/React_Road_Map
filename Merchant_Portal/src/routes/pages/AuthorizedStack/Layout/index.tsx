import React from 'react';
import { matchPath, Navigate, Outlet, useLocation } from 'react-router-dom';

import AppLoader from 'components/AppLoader';
import { APP_ANIMATION_DURATION } from 'components/AppLoader/styled';
import { useAvailablePath } from 'hooks/useRedirectLayout';
import { useGetDictionaries } from 'queries/data';
import { useGetPortalUserConfig } from 'queries/portalUser';
import { ROUTES } from 'routes/config/constants';

import MainHeader from './Header';
import Sidebar from './Sidebar';
import { Container, Content } from './styled';

const Layout = () => {
  const location = useLocation();
  const { data, isLoading } = useGetDictionaries();
  const { data: userConfig, isLoading: isLoadingUserConfig } = useGetPortalUserConfig();
  const availablePath = useAvailablePath();

  const [isReady, setIsReady] = React.useState(!!data && !!userConfig);

  React.useEffect(() => {
    if (isReady) {
      return;
    }
    const minimalTimeout = setTimeout(() => setIsReady(true), APP_ANIMATION_DURATION * 2);

    return () => {
      clearTimeout(minimalTimeout);
    };
  }, []);

  const { EDIT, CREATE } =
    ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION.SUB_PATH.THEME.SUB_PATH;

  const isCustomizer =
    matchPath(EDIT.PATH, location.pathname) || matchPath(CREATE.PATH, location.pathname);

  if (!availablePath) {
    return <Navigate to={ROUTES.PERMISSION_DENIED.PATH} replace />;
  }

  if (isLoading || isLoadingUserConfig || !isReady) {
    return <AppLoader />;
  }

  if (isCustomizer) {
    return <Outlet />;
  }

  return (
    <Container>
      <MainHeader />
      <Content>
        <Sidebar />
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
