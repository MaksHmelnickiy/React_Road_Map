import React from 'react';
import { Outlet } from 'react-router-dom';

import { PERMISSIONS } from 'api/auth/constants';
import { ROUTES } from 'routes/config/constants';
import { IRoutesConfigItem } from 'routes/config/index';

const RolesAndPermissions = React.lazy(
  () => import('routes/pages/AuthorizedStack/Settings/RolesAndPermissions')
);
const CreateRole = React.lazy(
  () => import('routes/pages/AuthorizedStack/Settings/RolesAndPermissions/Role/Create')
);

// const Settings = React.lazy(
//   () => import('routes/pages/AuthorizedStack/Settings/PortalSettings')
// );

export const SETTINGS_CHILDREN: IRoutesConfigItem[] = [
  {
    component: Outlet,
    path: ROUTES.SETTINGS.SUB_PATH.ROLES_AND_PERMISSIONS.PATH,
    breadcrumb: 'rolesAndPermissions.title',
    permissions: [PERMISSIONS.VIEW_ROLES, PERMISSIONS.VIEW_PERMISSIONS],
    isSubFolder: true,
    children: [
      {
        component: RolesAndPermissions,
        path: ROUTES.SETTINGS.SUB_PATH.ROLES_AND_PERMISSIONS.PATH,
        permissions: [PERMISSIONS.VIEW_ROLES, PERMISSIONS.VIEW_PERMISSIONS],
      },
      {
        component: CreateRole,
        path: ROUTES.SETTINGS.SUB_PATH.ROLES_AND_PERMISSIONS.SUB_PATH.CREATE,
        url: ROUTES.SETTINGS.SUB_PATH.ROLES_AND_PERMISSIONS.SUB_PATH.CREATE,
        breadcrumb: 'rolesAndPermissions.role.create.title',
        permissions: [PERMISSIONS.CREATE_ROLE],
      },
    ],
  },
  // {
  //   component: Settings,
  //   path: ROUTES.SETTINGS.SUB_PATH.PORTAL_SETTINGS.PATH,
  //   url: ROUTES.SETTINGS.SUB_PATH.PORTAL_SETTINGS.PATH,
  //   breadcrumb: 'settings.title',
  //   isSubFolder: true,
  // },
];
