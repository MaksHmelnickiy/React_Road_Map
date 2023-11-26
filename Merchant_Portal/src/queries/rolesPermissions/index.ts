import { useTranslation } from 'react-i18next';
import { useMutation, UseMutationResult, useQuery, useQueryClient } from 'react-query';

import { NOTIF_TYPES } from '@private/notifications';
import { AxiosResponse } from 'axios';

import api from 'api';
import { ROLES_PERMISSIONS_KEYS } from 'api/rolesPermissions/constants';
import { IRolePayload, IRolesParams } from 'api/rolesPermissions/types';
import { STATUSES } from 'constants/common';
import { notificationService } from 'utils/notificationService';
import { QueryError } from 'utils/types';

export const useGetRoles = (params?: IRolesParams) => {
  const getRoles = () => api.rolesPermissions.getRoles(params);

  return useQuery(ROLES_PERMISSIONS_KEYS.ROLES, getRoles);
};

export const useGetPermissions = () => {
  return useQuery(
    ROLES_PERMISSIONS_KEYS.PERMISSIONS,
    api.rolesPermissions.getPermissions
  );
};

export type ICreateRoleResult = UseMutationResult<
  AxiosResponse,
  QueryError,
  IRolePayload,
  { ntfID: string }
>;

export const useCreateRole = (): ICreateRoleResult => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return useMutation(api.rolesPermissions.createRole, {
    retry: 1,
    useErrorBoundary: false,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('rolesAndPermissions.role.form.notifications.create.loading'),
        type: NOTIF_TYPES.LOADING,
      });

      return { ntfID };
    },
    onError: (error, _variables, context) => {
      const isSavingError = error?.response?.status === STATUSES.INVALID_DATA;

      notificationService.show({
        type: NOTIF_TYPES.ERROR,
        title: t('notifications.errorTitle'),
        message:
          error?.response?.data?.message ||
          (isSavingError
            ? t('notifications.invalidData')
            : t('rolesAndPermissions.role.form.notifications.create.error')),
        updateId: context?.ntfID,
      });
    },
    onSuccess: (response, _, context) => {
      queryClient.invalidateQueries(ROLES_PERMISSIONS_KEYS.ROLES);

      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('rolesAndPermissions.role.form.notifications.create.success'),
        updateId: context?.ntfID,
      });
    },
  });
};
