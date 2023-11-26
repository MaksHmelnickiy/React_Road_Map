import React from 'react';
import { generatePath, Outlet } from 'react-router-dom';

import { PERMISSIONS } from 'api/auth/constants';
import { ROUTES } from 'routes/config/constants';
import { IRoutesConfigItem } from 'routes/config/index';

const Psp = React.lazy(() => import('routes/pages/AuthorizedStack/PspManagement/Psp'));
const PspView = React.lazy(
  () => import('routes/pages/AuthorizedStack/PspManagement/Psp/View')
);

const Terminals = React.lazy(
  () => import('routes/pages/AuthorizedStack/PspManagement/Terminals')
);
const Terminal = React.lazy(
  () => import('routes/pages/AuthorizedStack/PspManagement/Terminals/Terminal')
);

const TerminalsLinks = React.lazy(
  () => import('routes/pages/AuthorizedStack/PspManagement/TerminalsLinks')
);
const TerminalLink = React.lazy(
  () =>
    import('routes/pages/AuthorizedStack/PspManagement/TerminalsLinks/TerminalLink/View')
);
const CreateTerminalLink = React.lazy(
  () =>
    import(
      'routes/pages/AuthorizedStack/PspManagement/TerminalsLinks/TerminalLink/Create'
    )
);

const TerminalsLinksLimits = React.lazy(
  () => import('routes/pages/AuthorizedStack/PspManagement/TerminalLinksLimits')
);

const TerminalLinksParameters = React.lazy(
  () => import('routes/pages/AuthorizedStack/PspManagement/TerminalLinksParameters')
);

const TerminalLinksGroups = React.lazy(
  () => import('routes/pages/AuthorizedStack/PspManagement/TerminalLinksGroups')
);
const TerminalLinksGroup = React.lazy(
  () =>
    import(
      'routes/pages/AuthorizedStack/PspManagement/TerminalLinksGroups/TerminalLinkGroup'
    )
);

export const PSP_MANAGEMENT_CHILDREN: IRoutesConfigItem[] = [
  {
    component: Outlet,
    path: ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.PATH,
    url: ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.PATH,
    breadcrumb: 'psp.title',
    isPrivate: true,
    permissions: [PERMISSIONS.CAN_VIEW_PSPS],
    isSubFolder: true,
    children: [
      {
        component: Psp,
        path: ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.PATH,
        permissions: [PERMISSIONS.CAN_VIEW_PSPS],
      },
      {
        component: PspView,
        path: ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.SUB_PATH.VIEW.PATH,
        permissions: [PERMISSIONS.CAN_VIEW_SINGLE_PSP],
        url: (params) => {
          const id = params?.id;
          const { PATH, PARAMS } = ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.SUB_PATH.VIEW;
          return !id ? '' : generatePath(PATH, { [PARAMS.ID]: id });
        },
        breadcrumb: (params) => {
          return params?.id || 'psp.subTitle';
        },
      },
    ],
  },
  {
    component: Outlet,
    path: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS.PATH,
    url: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS.PATH,
    breadcrumb: 'terminals.title',
    isPrivate: true,
    permissions: [PERMISSIONS.CAN_VIEW_PSP_TERMINALS],
    isSubFolder: true,
    children: [
      {
        component: Terminals,
        path: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS.PATH,
        permissions: [PERMISSIONS.CAN_VIEW_PSP_TERMINALS],
      },
      {
        component: Terminal,
        path: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS.SUB_PATH.TERMINAL.PATH,
        permissions: [PERMISSIONS.CAN_VIEW_SINGLE_PSP_TERMINAL],
        url: (params) => {
          const id = params?.id;
          const { PATH, PARAMS } =
            ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS.SUB_PATH.TERMINAL;
          return !id ? '' : generatePath(PATH, { [PARAMS.ID]: id });
        },
        breadcrumb: (params) => {
          return params?.id || 'terminal.title';
        },
      },
    ],
  },
  {
    component: Outlet,
    path: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.PATH,
    url: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.PATH,
    breadcrumb: 'terminalsLinks.title',
    permissions: [PERMISSIONS.CAN_VIEW_TERMINAL_LINKS],
    isSubFolder: true,
    children: [
      {
        component: TerminalsLinks,
        permissions: [PERMISSIONS.CAN_VIEW_TERMINAL_LINKS],
        path: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.PATH,
      },
      {
        component: CreateTerminalLink,
        path: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.SUB_PATH.CREATE,
        url: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.SUB_PATH.CREATE,
        breadcrumb: 'paymentMethods.create',
        permissions: [PERMISSIONS.CAN_CREATE_TERMINAL_LINK],
      },
      {
        component: TerminalLink,
        path: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.SUB_PATH.TERMINAL_LINK.PATH,
        permissions: [PERMISSIONS.CAN_VIEW_SINGLE_TERMINAL_LINK],
        url: (params) => {
          const id = params?.id;
          const { PATH, PARAMS } =
            ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.SUB_PATH.TERMINAL_LINK;
          return !id ? '' : generatePath(PATH, { [PARAMS.ID]: id });
        },
        breadcrumb: (params) => {
          return params?.id || 'terminalLink.title';
        },
      },
    ],
  },
  {
    component: Outlet,
    path: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS_LIMITS.PATH,
    url: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS_LIMITS.PATH,
    breadcrumb: 'terminalLinksLimits.title',
    permissions: [PERMISSIONS.CAN_VIEW_TERMINAL_LINKS_LIMITS],
    isSubFolder: true,
    children: [
      {
        component: TerminalsLinksLimits,
        permissions: [PERMISSIONS.CAN_VIEW_TERMINAL_LINKS_LIMITS],
        path: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS_LIMITS.PATH,
      },
    ],
  },
  {
    component: Outlet,
    path: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINAL_LINKS_PARAMETERS.PATH,
    url: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINAL_LINKS_PARAMETERS.PATH,
    breadcrumb: 'terminalLinksParameters.title',
    isSubFolder: true,
    children: [
      {
        component: TerminalLinksParameters,
        path: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINAL_LINKS_PARAMETERS.PATH,
      },
    ],
  },
  {
    component: Outlet,
    path: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINAL_LINKS_GROUPS.PATH,
    url: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINAL_LINKS_GROUPS.PATH,
    breadcrumb: 'terminalLinksGroups.title',
    isSubFolder: true,
    children: [
      {
        component: TerminalLinksGroups,
        permissions: [PERMISSIONS.CAN_VIEW_TERMINAL_LINKS_GROUPS],
        path: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINAL_LINKS_GROUPS.PATH,
      },
      {
        component: TerminalLinksGroup,
        path: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINAL_LINKS_GROUPS.SUB_PATH
          .TERMINAL_LINKS_GROUP.PATH,
        permissions: [PERMISSIONS.CAN_VIEW_TERMINAL_LINKS_GROUPS],
        url: (params) => {
          const id = params?.id;
          const { PATH, PARAMS } =
            ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINAL_LINKS_GROUPS.SUB_PATH
              .TERMINAL_LINKS_GROUP;
          return !id ? '' : generatePath(PATH, { [PARAMS.ID]: id });
        },
        breadcrumb: (params) => {
          return params?.id || 'terminalLinkGroup.title';
        },
      },
    ],
  },
];
