import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';

import { NOTIF_TYPES } from '@private/notifications';

import api from 'api';
import { USERS_KEYS } from 'api/users/constants';
import { IUser, IUserFormattedData } from 'api/users/types';
import { STATUSES } from 'constants/common';
import { queryClient } from 'queries/index';
import { getAllEntities } from 'queries/utils';
import { notificationService } from 'utils/notificationService';
import { IAllPageFilters, IPageType, QueryError } from 'utils/types';

export const useGetAllUsers = (
  pageFilters: IAllPageFilters
): UseQueryResult<IPageType<IUser>> =>
  getAllEntities<IUser>({
    pageFilters,
    queryKey: USERS_KEYS.ALL,
    getAllEntitiesFunc: api.users.getAllUsers,
  });

export const useGetUser = (id?: string): UseQueryResult<IUser> => {
  const getUser = React.useCallback(() => (id ? api.users.getUser(id) : null), [id]);

  return useQuery([USERS_KEYS.USER, id], getUser);
};

type IUserResult = UseMutationResult<
  IUser,
  QueryError,
  IUserFormattedData,
  { ntfID: string }
>;

export const useCreateUser = (): IUserResult => {
  const { t } = useTranslation();

  return useMutation(api.users.createUser, {
    retry: 1,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('users.notifications.create.loading'),
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
              : t('users.notifications.create.error')),
          updateId: context?.ntfID,
          dismissIn: 5000,
        });
      } else {
        notificationService.remove(context?.ntfID || '');
      }
    },
    onSuccess: async (response, _, context) => {
      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('users.notifications.create.success'),
        updateId: context?.ntfID,
      });
    },
  });
};

export const useUpdateUser = (): IUserResult => {
  const { t } = useTranslation();

  return useMutation(api.users.updateUser, {
    retry: 1,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('users.notifications.update.loading'),
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
              : t('users.notifications.update.error')),
          updateId: context?.ntfID,
        });
      } else {
        notificationService.remove(context?.ntfID || '');
      }
    },
    onSuccess: async (response, user, context) => {
      queryClient.invalidateQueries([USERS_KEYS.USER, user.id]);

      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('users.notifications.update.success'),
        updateId: context?.ntfID,
      });
    },
  });
};
