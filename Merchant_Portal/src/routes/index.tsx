import React, { PropsWithChildren, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { PERMISSIONS } from 'api/auth/constants';
import { useRBAC } from 'hooks/useRBAC';
import { useAuthentication, useSessionRecover } from 'queries/session';
import { IRoutesConfigItem, ROUTES_CONFIG } from 'routes/config';
import { ROUTES } from 'routes/config/constants';
import ErrorBoundary from 'routes/ErrorBoundary';

import { AppContainer } from './styled';

const Maintenance = React.lazy(
  () => import('routes/pages/UnauthorizedStack/SomethingWrongPages/Maintenance')
);

type TRouteWithAuthProps = PropsWithChildren<{
  isPrivate: boolean;
  permissionType?: 'AND' | 'OR';
  permissions?: PERMISSIONS[];
}>;

const RouteWithAuth = ({
  children,
  isPrivate,
  permissions,
  permissionType,
}: TRouteWithAuthProps): React.ReactElement | null => {
  const { enabled } = useRBAC({ list: permissions, conditionType: permissionType });
  const location = useLocation();
  const { isAuthorized } = useAuthentication();

  if (isAuthorized && location.pathname === ROUTES.SIGN_IN.PATH) {
    return <Navigate to={ROUTES.HOME.PATH} replace />;
  }

  if (isPrivate && !isAuthorized && location.pathname !== ROUTES.SIGN_IN.PATH) {
    return <Navigate to={ROUTES.SIGN_IN.PATH} state={{ from: location }} />;
  }

  if (permissions && !enabled) {
    return <Navigate to={ROUTES.PERMISSION_DENIED.PATH} replace />;
  }

  return <>{children}</>;
};

const getComponent = (component: React.ReactElement | React.FC): React.ReactElement => {
  if (React.isValidElement(component)) {
    return component;
  }

  const Component = component;
  return <Component />;
};

const getRoute = (
  {
    path,
    component,
    isPrivate = false,
    children,
    disableLazy = false,
    permissions,
    permissionType,
  }: IRoutesConfigItem,
  key: number
) => {
  return (
    <Route
      key={key}
      path={path}
      element={
        <ErrorBoundary>
          <RouteWithAuth
            permissions={permissions}
            permissionType={permissionType}
            isPrivate={isPrivate}
          >
            {disableLazy ? (
              getComponent(component)
            ) : (
              <Suspense fallback={null}>{getComponent(component)}</Suspense>
            )}
          </RouteWithAuth>
        </ErrorBoundary>
      }
    >
      {!!children && children.map(getRoute)}
    </Route>
  );
};

const IndexRoute: React.FC = () => {
  useSessionRecover();
  const { isInitialized } = useAuthentication();

  if (!isInitialized) {
    return null;
  }

  const renderApp = () => {
    if (global.CONFIG.MAINTENANCE_MODE) {
      return (
        <Suspense fallback={null}>
          <Routes>
            <Route path='*' element={<Maintenance />} />
          </Routes>
        </Suspense>
      );
    }

    return <Routes>{ROUTES_CONFIG.map(getRoute)}</Routes>;
  };

  return <AppContainer>{renderApp()}</AppContainer>;
};

export default IndexRoute;
