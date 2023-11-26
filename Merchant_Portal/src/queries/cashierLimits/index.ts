import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';

import { NOTIF_TYPES } from '@private/notifications';

import api from 'api';
import { CASHIER_LIMITS_KEYS } from 'api/cashierLimits/constants';
import { ICashierLimit, IEditLimitPayload, ILimitForm } from 'api/cashierLimits/types';
import { STATUSES } from 'constants/common';
import { getAllEntities } from 'queries/utils';
import { notificationService } from 'utils/notificationService';
import { IAllPageFilters, IPageType, QueryError } from 'utils/types';

export const useGetCashierLimits = (
  pageFilters: IAllPageFilters
): UseQueryResult<IPageType<ICashierLimit>> =>
  getAllEntities<ICashierLimit>({
    pageFilters,
    queryKey: CASHIER_LIMITS_KEYS.ALL,
    getAllEntitiesFunc: api.cashierLimits.getAllCashierLimits,
  });

export const useGetLimitGeneralInfo = (id?: string): UseQueryResult<ICashierLimit> => {
  const getLimitDetails = React.useCallback(
    () => (id ? api.cashierLimits.getLimit(id) : null),
    [id]
  );

  return useQuery([CASHIER_LIMITS_KEYS.LIMIT_INFO, id], getLimitDetails);
};

export const useCreateLimit = (): UseMutationResult<
  ICashierLimit,
  QueryError,
  ILimitForm,
  { ntfID: string }
> => {
  const { t } = useTranslation();

  return useMutation(api.cashierLimits.createLimit, {
    retry: 1,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('cashierLimits.form.notifications.create.loading'),
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
          message: isSavingError
            ? t('notifications.invalidData')
            : error?.response?.data?.message ||
              t('cashierLimits.form.notifications.create.error'),
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
        message: t('cashierLimits.form.notifications.create.success'),
        updateId: context?.ntfID,
      });
    },
  });
};

export const useEditLimit = (): UseMutationResult<
  ICashierLimit,
  QueryError,
  IEditLimitPayload,
  { ntfID: string }
> => {
  const { t } = useTranslation();

  return useMutation(api.cashierLimits.editLimit, {
    retry: 1,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('cashierLimits.form.notifications.edit.loading'),
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
          message: isSavingError
            ? t('notifications.invalidData')
            : error?.response?.data?.message ||
              t('cashierLimits.form.notifications.edit.error'),
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
        message: t('cashierLimits.form.notifications.edit.success'),
        updateId: context?.ntfID,
      });
    },
  });
};
