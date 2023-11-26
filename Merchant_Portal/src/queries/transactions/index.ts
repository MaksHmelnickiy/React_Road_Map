import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery, useQueryClient, UseQueryResult } from 'react-query';

import { NOTIF_TYPES } from '@private/notifications';

import api from 'api';
import { TRANSACTIONS_KEYS } from 'api/transactions/contants';
import {
  ITransaction,
  ITransactionCard,
  ITransactionCustomer,
  ITransactionDetails,
  ITransactionEditData,
  ITransactionOperationHistory,
  ITransactionWebhooks,
} from 'api/transactions/types';
import { STATUSES } from 'constants/common';
import { getAllEntities } from 'queries/utils';
import { notificationService } from 'utils/notificationService';
import { IAllPageFilters, IPageType, QueryError } from 'utils/types';

export const useGetTransactions = (
  pageFilters: IAllPageFilters
): UseQueryResult<IPageType<ITransaction>> =>
  getAllEntities<ITransaction>({
    pageFilters,
    queryKey: TRANSACTIONS_KEYS.ALL,
    getAllEntitiesFunc: api.transactions.getAllTransactions,
  });

export const useGetTransactionDetails = (
  id?: string
): UseQueryResult<ITransactionDetails> => {
  const getTransactionDetails = React.useCallback(
    () => (id ? api.transactions.getTransactionDetails(id) : null),
    [id]
  );

  return useQuery([TRANSACTIONS_KEYS.TRANSACTION_DETAILS, id], getTransactionDetails);
};

export const useGetTransactionCard = (id?: string): UseQueryResult<ITransactionCard> => {
  const getTransactionCard = React.useCallback(
    () => (id ? api.transactions.getTransactionCard(id) : null),
    [id]
  );

  return useQuery([TRANSACTIONS_KEYS.TRANSACTION_CARD, id], getTransactionCard);
};

export const useGetTransactionCustomer = (
  id?: string
): UseQueryResult<ITransactionCustomer> => {
  const getTransactionCustomer = React.useCallback(
    () => (id ? api.transactions.getTransactionCustomer(id) : null),
    [id]
  );

  return useQuery([TRANSACTIONS_KEYS.TRANSACTION_CUSTOMER, id], getTransactionCustomer);
};

export const useGetTransactionOperationHistory = (
  id: string
): UseQueryResult<ITransactionOperationHistory> => {
  const getOperationHistory = React.useCallback(
    () => (id ? api.transactions.getTransactionOperationHistory(id) : null),
    [id]
  );

  return useQuery([TRANSACTIONS_KEYS.OPERATION_HISTORY, id], getOperationHistory);
};

export const useUpdateTransactionState = (id: string) => {
  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const updateFn = (payload: ITransactionEditData) =>
    api.transactions.updateTransaction(id, payload);

  return useMutation(updateFn, {
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('transaction.notifications.edit.loading'),
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
              : t('transaction.notifications.edit.error')),
          updateId: context?.ntfID,
        });
      } else {
        notificationService.remove(context?.ntfID || '');
      }
    },
    onSuccess: (_payload, _, context) => {
      queryClient.invalidateQueries([TRANSACTIONS_KEYS.TRANSACTION_DETAILS, id]);
      queryClient.invalidateQueries([TRANSACTIONS_KEYS.TRANSACTION_CUSTOMER, id]);

      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('transaction.notifications.edit.success'),
        updateId: context?.ntfID,
      });
    },
  });
};

export const useGetTransactionWebhooks = (
  id?: string
): UseQueryResult<ITransactionWebhooks> => {
  const getWebhooks = React.useCallback(
    () => (id ? api.transactions.getTransactionWebhooks(id) : null),
    [id]
  );

  return useQuery([TRANSACTIONS_KEYS.WEBHOOKS, id], getWebhooks);
};
