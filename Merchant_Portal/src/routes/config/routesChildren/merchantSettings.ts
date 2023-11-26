import React from 'react';
import { Outlet } from 'react-router-dom';

import { PERMISSIONS } from 'api/auth/constants';
import { ROUTES } from 'routes/config/constants';
import { IRoutesConfigItem } from 'routes/config/index';

const CashierSettings = React.lazy(
  () => import('routes/pages/AuthorizedStack/MerchantsSettings/CashierSettings')
);
const CashierLimits = React.lazy(
  () => import('routes/pages/AuthorizedStack/MerchantsSettings/CashierLimits')
);
// const CreateLimit = React.lazy(
//   () =>
//     import('routes/pages/AuthorizedStack/MerchantsSettings/CashierLimits/Limit/Create')
// );
// const EditLimit = React.lazy(
//   () => import('routes/pages/AuthorizedStack/MerchantsSettings/CashierLimits/Limit/Edit')
// );

const CashierPaymentMethods = React.lazy(
  () => import('routes/pages/AuthorizedStack/MerchantsSettings/PaymentMethods')
);
// const CreateCashierPaymentMethod = React.lazy(
//   () =>
//     import(
//       'routes/pages/AuthorizedStack/MerchantsSettings/PaymentMethods/PaymentMethod/Create'
//     )
// );
// const UpdateCashierPaymentMethod = React.lazy(
//   () =>
//     import(
//       'routes/pages/AuthorizedStack/MerchantsSettings/PaymentMethods/PaymentMethod/Create'
//     )
// );

export const MERCHANT_SETTINGS_CHILDREN: IRoutesConfigItem[] = [
  {
    component: Outlet,
    path: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_SETTINGS.PATH,
    url: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_SETTINGS.PATH,
    breadcrumb: 'cashierSettings.title',
    permissions: [PERMISSIONS.CAN_VIEW_CASHIER_SETTINGS],
    isSubFolder: true,
    children: [
      {
        component: CashierSettings,
        path: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_SETTINGS.PATH,
        permissions: [PERMISSIONS.CAN_VIEW_CASHIER_SETTINGS],
      },
    ],
  },
  {
    component: Outlet,
    path: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.PATH,
    url: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.PATH,
    breadcrumb: 'cashierLimits.title',
    isSubFolder: true,
    permissions: [PERMISSIONS.CAN_VIEW_CASHIER_PAYMENT_LIMITS],
    children: [
      {
        component: CashierLimits,
        path: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.PATH,
        permissions: [PERMISSIONS.CAN_VIEW_CASHIER_PAYMENT_LIMITS],
      },
      // {
      //   component: CreateLimit,
      //   path: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.SUB_PATH.CREATE_LIMIT
      //     .PATH,
      //   breadcrumb: 'cashierLimits.form.titleCreate',
      //   isPrivate: true,
      //   permissions: [PERMISSIONS.CAN_CREATE_CASHIER_PAYMENT_LIMIT],
      //   url: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.SUB_PATH.CREATE_LIMIT.PATH,
      // },
      // {
      //   component: EditLimit,
      //   path: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.SUB_PATH.EDIT_LIMIT.PATH,
      //   breadcrumb: 'cashierLimits.form.titleEdit',
      //   isPrivate: true,
      //   permissions: [PERMISSIONS.CAN_UPDATE_CASHIER_PAYMENT_LIMIT],
      //   url: (params) => {
      //     const id = params?.id;
      //     const { PATH, PARAMS } =
      //       ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.SUB_PATH.EDIT_LIMIT;
      //     return !id
      //       ? ''
      //       : generatePath(PATH, {
      //           [PARAMS.ID]: id,
      //         });
      //   },
      // },
    ],
  },
  {
    component: Outlet,
    path: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.PAYMENT_METHODS.PATH,
    url: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.PAYMENT_METHODS.PATH,
    breadcrumb: 'paymentMethods.title',
    permissions: [PERMISSIONS.CAN_VIEW_CASHIER_PAYMENT_METHODS],
    isSubFolder: true,
    children: [
      {
        component: CashierPaymentMethods,
        path: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.PAYMENT_METHODS.PATH,
        permissions: [PERMISSIONS.CAN_VIEW_CASHIER_PAYMENT_METHODS],
      },
      // {
      //   component: CreateCashierPaymentMethod,
      //   path: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.PAYMENT_METHODS.SUB_PATH.CREATE,
      //   url: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.PAYMENT_METHODS.SUB_PATH.CREATE,
      //   breadcrumb: 'paymentMethods.create',
      //   // permissions: [PERMISSIONS.CAN_CREATE_CASHIER_PAYMENT_METHOD], // TODO
      // },
      // {
      //   component: UpdateCashierPaymentMethod,
      //   path: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.PAYMENT_METHODS.SUB_PATH.EDIT.PATH,
      //   url: (params) => {
      //     const id = params?.id;
      //     const { PATH, PARAMS } =
      //       ROUTES.MERCHANTS_SETTINGS.SUB_PATH.PAYMENT_METHODS.SUB_PATH.EDIT;
      //     return !id ? '' : generatePath(PATH, { [PARAMS.ID]: id });
      //   },
      //   breadcrumb: (params?: IRouteParams): string => {
      //     if (!params?.id) return '';
      //     const paymentMethod = queryClient.getQueryData<ICashierPaymentMethod>([
      //       CASHIER_PAYMENT_METHODS_KEYS.PAYMENT_METHOD,
      //       params.id,
      //     ]);
      //     return paymentMethod
      //       ? paymentMethod.cashierPaymentMethodName
      //       : 'paymentMethods.paymentMethod';
      //   },
      //   // permissions: [PERMISSIONS.CAN_UPDATE_CASHIER_PAYMENT_METHOD], // TODO
      // },
    ],
  },
];
