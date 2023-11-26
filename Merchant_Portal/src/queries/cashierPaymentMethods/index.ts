import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';

import { NOTIF_TYPES } from '@private/notifications';

import api from 'api';
import { CASHIER_PAYMENT_METHODS_KEYS } from 'api/cashierPaymentMethods/constants';
import {
  ICashierPaymentMethod,
  IPaymentMethodPayload,
  IUpdatePaymentMethod,
} from 'api/cashierPaymentMethods/types';
import { STATUSES } from 'constants/common';
import { getAllEntities } from 'queries/utils';
import { notificationService } from 'utils/notificationService';
import { IAllPageFilters, IPageType, QueryError } from 'utils/types';

export const useGetCashierPaymentMethods = (
  pageFilters: IAllPageFilters
): UseQueryResult<IPageType<ICashierPaymentMethod>> =>
  getAllEntities<ICashierPaymentMethod>({
    pageFilters,
    queryKey: CASHIER_PAYMENT_METHODS_KEYS.ALL,
    getAllEntitiesFunc: api.cashierPaymentMethods.getAllCashierPaymentMethods,
  });

export const useGetPaymentMethod = (
  id: string
): UseQueryResult<ICashierPaymentMethod> => {
  const getPaymentMethod = React.useCallback(
    () => (id ? api.cashierPaymentMethods.getPaymentMethod(id) : null),
    [id]
  );

  return useQuery([CASHIER_PAYMENT_METHODS_KEYS.PAYMENT_METHOD, id], getPaymentMethod);
};

export type ICreatePaymentMethodResult = UseMutationResult<
  ICashierPaymentMethod,
  QueryError,
  IPaymentMethodPayload,
  { ntfID: string }
>;

export const useCreatePaymentMethod = (): ICreatePaymentMethodResult => {
  const { t } = useTranslation();

  return useMutation(api.cashierPaymentMethods.createPaymentMethod, {
    retry: 1,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('paymentMethods.form.notifications.create.loading'),
        type: NOTIF_TYPES.LOADING,
      });

      return { ntfID };
    },
    onError: (error: QueryError, _variables, context) => {
      const isSavingError = error?.response?.status === STATUSES.INVALID_DATA;
      const errorsExists = Object.keys(error?.response?.data?.errors || {}).length;

      if (errorsExists) {
        notificationService.show({
          type: NOTIF_TYPES.ERROR,
          title: t('notifications.errorTitle'),
          message:
            error?.response?.data?.message ||
            (isSavingError
              ? t('notifications.invalidData')
              : t('paymentMethods.form.notifications.create.error')),
          updateId: context?.ntfID,
        });
      } else {
        notificationService.remove(context?.ntfID || '');
      }
    },
    onSuccess: (response, _, context) => {
      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('paymentMethods.form.notifications.create.success'),
        updateId: context?.ntfID,
      });
    },
  });
};

export const useUpdatePaymentMethod = (): UseMutationResult<
  ICashierPaymentMethod,
  QueryError,
  IUpdatePaymentMethod,
  { ntfID: string }
> => {
  const { t } = useTranslation();

  return useMutation(api.cashierPaymentMethods.updatePaymentMethod, {
    retry: 1,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('paymentMethods.form.notifications.edit.loading'),
        type: NOTIF_TYPES.LOADING,
      });

      return { ntfID };
    },
    onError: (error: QueryError, _variables, context) => {
      const isSavingError = error?.response?.status === STATUSES.INVALID_DATA;
      const errorsExists = Object.keys(error?.response?.data?.errors || {}).length;

      if (errorsExists) {
        notificationService.show({
          type: NOTIF_TYPES.ERROR,
          title: t('notifications.errorTitle'),
          message:
            error?.response?.data?.message ||
            (isSavingError
              ? t('notifications.invalidData')
              : t('paymentMethods.form.notifications.edit.error')),
          updateId: context?.ntfID,
        });
      } else {
        notificationService.remove(context?.ntfID || '');
      }
    },
    onSuccess: (response, _, context) => {
      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('paymentMethods.form.notifications.edit.success'),
        updateId: context?.ntfID,
      });
    },
  });
};
