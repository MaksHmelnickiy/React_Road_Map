import React from 'react';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

import { useRBAC } from 'hooks/useRBAC';
import { IRoutesConfigItem, ROUTES_CONFIG } from 'routes/config';
import { ROUTES } from 'routes/config/constants';

export const useRedirectLayout = (pagePath: string, config: IRoutesConfigItem[]) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { checkPermission } = useRBAC();

  const availablePath = React.useMemo(() => {
    const availablePath = config.find(({ permissions, permissionType }) =>
      checkPermission({ list: permissions, conditionType: permissionType })
    );

    return availablePath;
  }, []);

  React.useEffect(() => {
    if (matchPath(pagePath, location.pathname)) {
      navigate(availablePath?.path || ROUTES.HOME.PATH, { replace: true });
    }
  }, [location]);
};

// find home path (check available route by permissions)
export const useAvailablePath = () => {
  const { checkPermission } = useRBAC();

  return React.useMemo(() => {
    let availablePath: null | string = null;

    const checkAvailablePath = (config: IRoutesConfigItem[]) => {
      if (availablePath) {
        return;
      }

      for (const route of config) {
        if (availablePath) {
          break;
        }
        const { children, path, permissions, navBarIcon, permissionType, isSubFolder } =
          route;

        if (children) {
          checkAvailablePath(children);
        }

        if ((navBarIcon || isSubFolder) && permissions) {
          const isAvailable = checkPermission({
            list: permissions,
            conditionType: permissionType,
          });

          if (isAvailable) {
            availablePath = path;
          }
        }
      }
    };

    checkAvailablePath(ROUTES_CONFIG);

    return availablePath;
  }, []);
};
