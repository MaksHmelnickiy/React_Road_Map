import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';

import { ISelectOption } from '@private/components';
import { useUpdateEffect } from '@private/hooks';
import { NOTIF_TYPES } from '@private/notifications';

import api from 'api';
import { MOTO_KEYS } from 'api/manualTransaction/constants';
import {
  IManualTransactionForm,
  IManualTransactionResponse,
  IPaymentMethodsPayload,
  IPspDescriptionsPayload,
  IRuleset,
} from 'api/manualTransaction/types';
import { STATUSES } from 'constants/common';
import { notificationService } from 'utils/notificationService';
import { QueryError } from 'utils/types';

export const useGetPaymentMethods = (
  payload: IPaymentMethodsPayload
): UseQueryResult<string[]> => {
  const { id, moto } = payload;

  const getPaymentMethods = React.useCallback(
    () => (id ? api.manualTransaction.getPaymentMethods(payload) : null),
    [payload]
  );

  return useQuery([MOTO_KEYS.PAYMENT_METHODS, id, moto], getPaymentMethods, {
    enabled: !!payload.id,
  });
};

type IGetPspDescriptionsResult = UseQueryResult<ISelectOption[] | null> & {
  fetchPspDescriptions: (data: IPspDescriptionsPayload) => void;
};

export const useGetPspDescriptions = (): IGetPspDescriptionsResult => {
  const [payload, setPayload] = React.useState<IPspDescriptionsPayload>();

  const getPspDescriptions = React.useCallback(
    () => (payload ? api.manualTransaction.getPspDescriptions(payload) : null),
    [payload]
  );

  const query = useQuery(
    [MOTO_KEYS.PSP_DESCRIPTIONS, payload?.merchantTerminalId, payload?.paymentMethod],
    getPspDescriptions,
    {
      enabled: false,
    }
  );

  useUpdateEffect(() => {
    query.refetch();
  }, [payload]);

  const fetchPspDescriptions = React.useCallback(
    (data: IPspDescriptionsPayload) => setPayload(data),
    []
  );

  return { ...query, fetchPspDescriptions };
};

type IAvailableRulesets = UseMutationResult<
  IRuleset[],
  QueryError,
  IManualTransactionForm
>;

export const useGetAvailableRulesets = (): IAvailableRulesets => {
  const { t } = useTranslation();

  return useMutation(api.manualTransaction.getAvailableRulesets, {
    retry: 1,
    onMutate: () => {
      notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('manualTransaction.notifications.rulesets.loading'),
        type: NOTIF_TYPES.LOADING,
        toastId: 'availableRulesets',
      });
    },
    onError: (error, _variables) => {
      const errorsExists = Object.keys(error?.response?.data?.errors || {}).length;

      if (errorsExists) {
        notificationService.show({
          type: NOTIF_TYPES.ERROR,
          title: t('notifications.errorTitle'),
          message: t('manualTransaction.notifications.rulesets.error'),
          updateId: 'availableRulesets',
          dismissIn: 10000,
        });
      } else {
        notificationService.remove('availableRulesets');
      }
    },
    onSuccess: async (response, _) => {
      if (response.length) {
        return notificationService.show({
          type: NOTIF_TYPES.SUCCESS,
          title: t('notifications.successTitle'),
          message: t('manualTransaction.notifications.rulesets.success'),
          updateId: 'availableRulesets',
        });
      }

      notificationService.show({
        type: NOTIF_TYPES.WARNING,
        title: t('notifications.warningTitle'),
        message: t('manualTransaction.notifications.rulesets.warning'),
        updateId: 'availableRulesets',
        dismissIn: 8000,
      });
    },
  });
};

type ICreateTransaction = UseMutationResult<
  IManualTransactionResponse,
  QueryError,
  IManualTransactionForm,
  { ntfID: string }
>;

export const useCreateManualTransaction = (): ICreateTransaction => {
  const { t } = useTranslation();

  return useMutation(api.manualTransaction.createManualTransaction, {
    retry: 1,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('manualTransaction.notifications.create.loading'),
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
              : t('manualTransaction.notifications.create.error')),
          updateId: context?.ntfID,
        });
      } else {
        notificationService.remove(context?.ntfID || '');
      }
    },
    onSuccess: async (response, _, context) => {
      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('manualTransaction.notifications.create.success'),
        updateId: context?.ntfID,
      });
    },
  });
};
