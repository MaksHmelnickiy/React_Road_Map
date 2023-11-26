import React from 'react';
import { generatePath, Navigate, Outlet } from 'react-router-dom';

import { PERMISSIONS } from 'api/auth/constants';
import { CLIENTS_KEYS } from 'api/clients/contants';
import { IClient } from 'api/clients/types';
import { USERS_KEYS } from 'api/users/constants';
import { IUser } from 'api/users/types';
import { ICONS_MAP } from 'constants/icons';
import { queryClient } from 'queries';
import { MERCHANT_SETTINGS_CHILDREN } from 'routes/config/routesChildren/merchantSettings';
import { PSP_MANAGEMENT_CHILDREN } from 'routes/config/routesChildren/pspManagement';
import { SETTINGS_CHILDREN } from 'routes/config/routesChildren/settings';
import { TRAFFIC_MANAGEMENT_CHILDREN } from 'routes/config/routesChildren/traficManagement';

import { ROUTES } from './constants';

const HomeLayout = React.lazy(() => import('routes/pages/HomeLayout'));
const Layout = React.lazy(() => import('routes/pages/AuthorizedStack/Layout'));

const SignIn = React.lazy(
  () => import('routes/pages/UnauthorizedStack/Authentication/SignIn')
);
const ForgotPassword = React.lazy(
  () => import('routes/pages/UnauthorizedStack/Authentication/ForgotPassword')
);
const SetPassword = React.lazy(
  () => import('routes/pages/UnauthorizedStack/Authentication/SetPassword')
);

const PspManagementLayout = React.lazy(
  () => import('routes/pages/AuthorizedStack/PspManagement/Layout')
);
const MerchantsSettingsLayout = React.lazy(
  () => import('routes/pages/AuthorizedStack/MerchantsSettings/Layout')
);
const TrafficManagementLayout = React.lazy(
  () => import('routes/pages/AuthorizedStack/TrafficManagement/Layout')
);
const SettingsLayout = React.lazy(
  () => import('routes/pages/AuthorizedStack/Settings/Layout')
);

const Transactions = React.lazy(
  () => import('routes/pages/AuthorizedStack/Transactions')
);
const Transaction = React.lazy(
  () => import('routes/pages/AuthorizedStack/Transactions/Transaction')
);
const ManualTransaction = React.lazy(
  () => import('routes/pages/AuthorizedStack/ManualTransaction')
);

const Clients = React.lazy(() => import('routes/pages/AuthorizedStack/Clients'));
const Client = React.lazy(
  () => import('routes/pages/AuthorizedStack/Clients/Client/View')
);
const CreateClient = React.lazy(
  () => import('routes/pages/AuthorizedStack/Clients/Client/Create')
);
const EditClient = React.lazy(
  () => import('routes/pages/AuthorizedStack/Clients/Client/Edit')
);

const Users = React.lazy(() => import('routes/pages/AuthorizedStack/Users'));
const User = React.lazy(() => import('routes/pages/AuthorizedStack/Users/User/View'));
const UserCreate = React.lazy(
  () => import('routes/pages/AuthorizedStack/Users/User/Create')
);
const UserEdit = React.lazy(() => import('routes/pages/AuthorizedStack/Users/User/Edit'));

const Merchants = React.lazy(() => import('routes/pages/AuthorizedStack/Merchants'));
const Merchant = React.lazy(
  () => import('routes/pages/AuthorizedStack/Merchants/Merchant')
);
const Stylization = React.lazy(
  () => import('routes/pages/AuthorizedStack/MerchantsSettings/Stylization')
);
const ThemeCreate = React.lazy(
  () => import('routes/pages/AuthorizedStack/ThemeEditor/Create')
);
const ThemeEdit = React.lazy(
  () => import('routes/pages/AuthorizedStack/ThemeEditor/Edit')
);

const NotFound = React.lazy(
  () => import('routes/pages/UnauthorizedStack/SomethingWrongPages/NotFound')
);
const PermissionDenied = React.lazy(
  () => import('routes/pages/UnauthorizedStack/SomethingWrongPages/PermissionDenied')
);
const SomethingWrong = React.lazy(
  () => import('routes/pages/UnauthorizedStack/SomethingWrongPages/SomethingWrong')
);

export interface IRouteParams {
  id?: string;
  themeId?: string;
}

type TDynamicBreadCrumbFunction = (params?: IRouteParams) => string;
type TDynamicUrlFunction = (params?: IRouteParams) => string;

export interface IRoutesConfigItem {
  component: typeof Transactions | typeof Outlet;
  path: string;
  isPrivate?: boolean;
  disableLazy?: boolean;
  children?: IRoutesConfigItem[];
  navBarIcon?: React.ReactElement;
  breadcrumb?: string | TDynamicBreadCrumbFunction;
  url?: string | TDynamicUrlFunction;
  permissions?: PERMISSIONS[];
  permissionType?: 'AND' | 'OR';
  intlKey?: string;
  isParentFolder?: boolean;
  isSubFolder?: boolean;
}

export const ROUTES_CONFIG = [
  {
    component: SignIn,
    path: ROUTES.SIGN_IN.PATH,
  },
  {
    component: ForgotPassword,
    path: ROUTES.FORGOT_PASSWORD.PATH,
  },
  {
    component: SetPassword,
    path: ROUTES.SET_PASSWORD.PATH,
  },
  {
    component: Outlet,
    path: ROUTES.HOME.PATH,
    isPrivate: true,
    children: [
      {
        component: Layout,
        path: ROUTES.HOME.PATH,
        children: [
          {
            component: HomeLayout,
            path: ROUTES.HOME.PATH,
            // navBarIcon: <ICONS_MAP.HomeMenu />,
            // breadcrumb: 'navigationBar.home',
          },
          {
            component: Outlet,
            path: ROUTES.TRANSACTIONS.PATH,
            url: ROUTES.TRANSACTIONS.PATH,
            breadcrumb: 'transactions.title',
            children: [
              {
                component: Transactions,
                path: ROUTES.TRANSACTIONS.PATH,
                navBarIcon: <ICONS_MAP.TransactionMenu />,
                permissions: [PERMISSIONS.CAN_VIEW_TRANSACTIONS],
                breadcrumb: 'transactions.title',
              },
              {
                component: Transaction,
                path: ROUTES.TRANSACTIONS.SUB_PATH.VIEW.PATH,
                permissions: [PERMISSIONS.CAN_VIEW_SINGLE_TRANSACTION],
                isPrivate: true,
                url: (params) => {
                  const id = params?.id;
                  const { PATH, PARAMS } = ROUTES.TRANSACTIONS.SUB_PATH.VIEW;
                  return !id ? '' : generatePath(PATH, { [PARAMS.ID]: id });
                },
                breadcrumb: 'transaction.title',
              },
            ],
          },
          {
            component: Outlet,
            path: ROUTES.USERS.PATH,
            url: ROUTES.USERS.PATH,
            breadcrumb: 'users.title',
            children: [
              {
                component: Users,
                path: ROUTES.USERS.PATH,
                navBarIcon: <ICONS_MAP.Users />,
                permissions: [PERMISSIONS.CAN_VIEW_USERS],
                breadcrumb: 'users.title',
              },
              {
                component: Outlet,
                path: ROUTES.USERS.SUB_PATH.USER.PATH,
                url: (params) => {
                  const id = params?.id;
                  const { PATH, PARAMS } = ROUTES.USERS.SUB_PATH.USER;
                  return !id ? '' : generatePath(PATH, { [PARAMS.ID]: id });
                },
                breadcrumb: (params: IRouteParams): string => {
                  if (!params?.id) return '';
                  const user = queryClient.getQueryData<IUser>([
                    USERS_KEYS.USER,
                    params.id,
                  ]);
                  return user ? user.login : 'users.user';
                },
                children: [
                  {
                    component: User,
                    path: ROUTES.USERS.SUB_PATH.USER.PATH,
                    permissions: [PERMISSIONS.CAN_VIEW_SINGLE_USER],
                  },
                  {
                    component: UserEdit,
                    path: ROUTES.USERS.SUB_PATH.EDIT.PATH,
                    permissions: [PERMISSIONS.CAN_UPDATE_USER],
                    url: (params) => {
                      const id = params?.id;
                      const { PATH, PARAMS } = ROUTES.USERS.SUB_PATH.EDIT;
                      return !id ? '' : generatePath(PATH, { [PARAMS.ID]: id });
                    },
                    breadcrumb: (params: IRouteParams): string => {
                      if (!params?.id) return '';
                      const user = queryClient.getQueryData<IUser>([
                        USERS_KEYS.USER,
                        params.id,
                      ]);
                      return user ? `${user.firstName} ${user.lastName}` : 'users.user';
                    },
                  },
                ],
              },
              {
                component: UserCreate,
                path: ROUTES.USERS.SUB_PATH.CREATE,
                url: ROUTES.USERS.SUB_PATH.CREATE,
                breadcrumb: 'users.create.title',
                permissions: [PERMISSIONS.CAN_CREATE_USER],
              },
            ],
          },
          {
            component: Outlet,
            path: ROUTES.CLIENTS.PATH,
            url: ROUTES.CLIENTS.PATH,
            breadcrumb: 'clients.title',
            children: [
              {
                component: Clients,
                path: ROUTES.CLIENTS.PATH,
                navBarIcon: <ICONS_MAP.Clients />,
                permissions: [PERMISSIONS.CAN_VIEW_CLIENTS],
                breadcrumb: 'clients.title',
              },
              {
                component: Outlet,
                path: ROUTES.CLIENTS.SUB_PATH.CLIENT.PATH,
                url: (params) => {
                  const id = params?.id;
                  const { PATH, PARAMS } = ROUTES.CLIENTS.SUB_PATH.CLIENT;
                  return !id ? '' : generatePath(PATH, { [PARAMS.ID]: id });
                },
                breadcrumb: (params: IRouteParams): string => {
                  if (!params?.id) return '';

                  const client = queryClient.getQueryData<IClient>([
                    CLIENTS_KEYS.CLIENT_INFO,
                    params.id,
                  ]);

                  return client
                    ? `${client.firstName} ${client.lastName}`
                    : 'client.title';
                },
                children: [
                  {
                    component: Client,
                    path: ROUTES.CLIENTS.SUB_PATH.CLIENT.PATH,
                    permissions: [PERMISSIONS.CAN_VIEW_SINGLE_CLIENT],
                  },
                  {
                    component: EditClient,
                    path: ROUTES.CLIENTS.SUB_PATH.EDIT.PATH,
                    permissions: [PERMISSIONS.CAN_UPDATE_CLIENT],
                    breadcrumb: 'client.form.titleEdit',
                    isPrivate: true,
                    url: (params) => {
                      const id = params?.id;
                      const { PATH, PARAMS } = ROUTES.CLIENTS.SUB_PATH.EDIT;
                      return !id ? '' : generatePath(PATH, { [PARAMS.ID]: id });
                    },
                  },
                  {
                    component: ManualTransaction,
                    path: ROUTES.CLIENTS.SUB_PATH.CLIENT.SUB_PATH.MANUAL_TRANSACTION.PATH,
                    breadcrumb: 'manualTransaction.title',
                    permissions: [PERMISSIONS.CAN_CREATE_MANUAL_TRANSACTION],
                    url: (params) => {
                      const id = params?.id;
                      const { PATH, PARAMS } =
                        ROUTES.CLIENTS.SUB_PATH.CLIENT.SUB_PATH.MANUAL_TRANSACTION;
                      return !id
                        ? ''
                        : generatePath(PATH, {
                            [PARAMS.ID]: id,
                          });
                    },
                  },
                ],
              },
              {
                component: CreateClient,
                path: ROUTES.CLIENTS.SUB_PATH.CREATE,
                url: ROUTES.CLIENTS.SUB_PATH.CREATE,
                permissions: [PERMISSIONS.CAN_CREATE_CLIENT],
                breadcrumb: 'client.form.titleCreate',
              },
              {
                component: ManualTransaction,
                path: ROUTES.CLIENTS.SUB_PATH.MANUAL_TRANSACTION.PATH,
                url: ROUTES.CLIENTS.SUB_PATH.MANUAL_TRANSACTION.PATH,
                permissions: [PERMISSIONS.CAN_CREATE_MANUAL_TRANSACTION],
                breadcrumb: 'manualTransaction.title',
              },
            ],
          },
          {
            component: PspManagementLayout,
            path: ROUTES.PSP_MANAGEMENT.PATH,
            navBarIcon: <ICONS_MAP.PSP />,
            intlKey: 'navigationBar.pspManagement',
            permissions: [
              PERMISSIONS.CAN_VIEW_PSPS,
              PERMISSIONS.CAN_VIEW_PSP_TERMINALS,
              PERMISSIONS.CAN_VIEW_TERMINAL_LINKS,
              PERMISSIONS.CAN_VIEW_TERMINAL_LINKS_GROUPS,
            ],
            permissionType: 'OR',
            isParentFolder: true,
            children: PSP_MANAGEMENT_CHILDREN,
          },
          {
            component: TrafficManagementLayout,
            path: ROUTES.TRAFFIC_MANAGEMENT.PATH,
            navBarIcon: <ICONS_MAP.TrafficManagement />,
            intlKey: 'navigationBar.trafficManagement',
            isParentFolder: true,
            permissions: [
              PERMISSIONS.CAN_VIEW_COUNTRY_GROUPS,
              PERMISSIONS.CAN_VIEW_RULESETS,
            ],
            permissionType: 'OR',
            children: TRAFFIC_MANAGEMENT_CHILDREN,
          },
          {
            component: Outlet,
            path: ROUTES.MERCHANTS.PATH,
            url: ROUTES.MERCHANTS.PATH,
            breadcrumb: 'merchants.title',
            children: [
              {
                component: Merchants,
                path: ROUTES.MERCHANTS.PATH,
                permissions: [PERMISSIONS.CAN_VIEW_MERCHANTS],
                navBarIcon: <ICONS_MAP.Merchants />,
                breadcrumb: 'merchants.title',
              },
              {
                component: Outlet,
                path: ROUTES.MERCHANTS.SUB_PATH.MERCHANT.PATH,
                permissions: [PERMISSIONS.CAN_VIEW_SINGLE_MERCHANT],
                url: (params: IRouteParams) => {
                  const id = params?.id;
                  const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT;
                  return !id ? '' : generatePath(PATH, { [PARAMS.ID]: id });
                },
                breadcrumb: (params: IRouteParams) => params?.id || 'merchant.title',
                children: [
                  {
                    component: Merchant,
                    path: ROUTES.MERCHANTS.SUB_PATH.MERCHANT.PATH,
                    permissions: [PERMISSIONS.CAN_VIEW_SINGLE_MERCHANT],
                  },
                  {
                    component: Outlet,
                    path: ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION.PATH,
                    url: (params: IRouteParams) => {
                      const id = params?.id;
                      const { PATH } =
                        ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION;
                      return !id
                        ? ''
                        : generatePath(PATH, {
                            [ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION
                              .PARAMS.ID]: id,
                          });
                    },
                    breadcrumb: 'stylization.title',
                    children: [
                      {
                        component: Stylization,
                        path: ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION
                          .PATH,
                        permissions: [PERMISSIONS.CAN_VIEW_PAYMENT_PAGE_STYLIZATIONS],
                      },
                      {
                        component: ThemeCreate,
                        path: ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION
                          .SUB_PATH.THEME.SUB_PATH.CREATE.PATH,
                        permissions: [PERMISSIONS.CAN_CREATE_PAYMENT_PAGE_STYLIZATION],
                      },
                      {
                        component: ThemeEdit,
                        path: ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION
                          .SUB_PATH.THEME.SUB_PATH.EDIT.PATH,
                        permissions: [PERMISSIONS.CAN_CHANGE_PAYMENT_PAGE_STYLIZATION],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            component: MerchantsSettingsLayout,
            path: ROUTES.MERCHANTS_SETTINGS.PATH,
            navBarIcon: <ICONS_MAP.MerchantsSettingsMenu />,
            breadcrumb: 'navigationBar.merchantsSettings',
            isParentFolder: true,
            children: MERCHANT_SETTINGS_CHILDREN,
          },
          {
            component: SettingsLayout,
            path: ROUTES.SETTINGS.PATH,
            navBarIcon: <ICONS_MAP.Settings />,
            permissions: [PERMISSIONS.VIEW_ROLES, PERMISSIONS.VIEW_PERMISSIONS],
            isParentFolder: true,
            breadcrumb: 'navigationBar.settings',
            children: SETTINGS_CHILDREN,
          },
        ],
      },
      {
        component: NotFound,
        path: ROUTES.NOT_FOUND.PATH,
        isPrivate: true,
      },
      {
        component: PermissionDenied,
        path: ROUTES.PERMISSION_DENIED.PATH,
        isPrivate: true,
      },
      {
        component: SomethingWrong,
        path: ROUTES.SOMETHING_WRONG.PATH,
        isPrivate: true,
      },
      {
        component: <Navigate to={ROUTES.NOT_FOUND.PATH} replace />,
        path: '*',
      },
    ],
  },
] as IRoutesConfigItem[];
