import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query';

import { NOTIF_TYPES } from '@private/notifications';

import api from 'api';
import { CLIENTS_KEYS } from 'api/clients/contants';
import {
  IClient,
  IClientForm,
  IClientGeneralInfo,
  IClientPaymentMethod,
  IClientStats,
  IClientTopErrors,
  IEditClientPayload,
} from 'api/clients/types';
import { STATUSES } from 'constants/common';
import { getAllEntities } from 'queries/utils';
import { notificationService } from 'utils/notificationService';
import { IAllPageFilters, IPageType, QueryError } from 'utils/types';

export const useGetClients = (
  pageFilters: IAllPageFilters
): UseQueryResult<IPageType<IClient>> =>
  getAllEntities<IClient>({
    pageFilters,
    queryKey: CLIENTS_KEYS.ALL,
    getAllEntitiesFunc: api.clients.getAllClients,
  });

export const useGetClientGeneralInfo = (
  id?: string
): UseQueryResult<IClientGeneralInfo> => {
  const getClientDetails = React.useCallback(
    () => (id ? api.clients.getClientsGeneralInfo(id) : null),
    [id]
  );

  return useQuery([CLIENTS_KEYS.CLIENT_INFO, id], getClientDetails);
};

export const useGetClientStats = (id?: string): UseQueryResult<IClientStats> => {
  const getClientStats = React.useCallback(
    () => (id ? api.clients.getClientStats(id) : null),
    [id]
  );

  return useQuery([CLIENTS_KEYS.CLIENT_STATS, id], getClientStats);
};

export const useGetClientTopErrors = (id?: string): UseQueryResult<IClientTopErrors> => {
  const getClientErrors = React.useCallback(
    () => (id ? api.clients.getClientTopErrors(id) : null),
    [id]
  );
  return useQuery([CLIENTS_KEYS.CLIENT_TOP_ERRORS, id], getClientErrors);
};

export const useGetClientPaymentMethod = (
  id?: string
): UseQueryResult<IClientPaymentMethod> => {
  const getClientPaymentMethod = React.useCallback(
    () => (id ? api.clients.getClientPaymentMethod(id) : null),
    [id]
  );
  return useQuery([CLIENTS_KEYS.CLIENT_PAYMENT_METHOD, id], getClientPaymentMethod);
};

export const useCreateClient = (): UseMutationResult<
  IClientGeneralInfo,
  QueryError,
  IClientForm,
  { ntfID: string }
> => {
  const { t } = useTranslation();

  return useMutation(api.clients.createClient, {
    retry: 1,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('client.form.notifications.create.loading'),
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
              : t('client.form.notifications.create.error')),
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
        message: t('client.form.notifications.create.success'),
        updateId: context?.ntfID,
      });
    },
  });
};

export const useEditClient = (): UseMutationResult<
  IClientGeneralInfo,
  QueryError,
  IEditClientPayload,
  { ntfID: string }
> => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return useMutation(api.clients.editClient, {
    retry: 1,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('client.form.notifications.edit.loading'),
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
              : t('client.form.notifications.edit.error')),
          updateId: context?.ntfID,
        });
      } else {
        notificationService.remove(context?.ntfID || '');
      }
    },
    onSuccess: (response, { id }, context) => {
      queryClient.invalidateQueries([CLIENTS_KEYS.CLIENT_INFO, id]);

      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('client.form.notifications.edit.success'),
        updateId: context?.ntfID,
      });
    },
  });
};
