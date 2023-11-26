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
import { IMerchant } from 'api/merchantTerminalThemes/types';
import { PORTAL_USERS_KEYS } from 'api/portalUser/constants';
import {
  IPortalUserConfig,
  ISavePageSettingsData,
  IUpdateUserThemePayload,
  IUserTheme,
} from 'api/portalUser/types';
import { QueryError } from 'utils/types';

import { STATUSES } from '../../constants/common';
import { notificationService } from '../../utils/notificationService';

export const useGetPortalUserConfig = (): UseQueryResult<IMerchant> => {
  return useQuery(PORTAL_USERS_KEYS.PORTAL_USER, api.portalUser.getUserConfig);
};

type IUseSaveUserPageSettings = UseMutationResult<
  IPortalUserConfig,
  QueryError,
  ISavePageSettingsData
>;

export const useSaveUserPageSettings = (): IUseSaveUserPageSettings => {
  const queryClient = useQueryClient();

  return useMutation(api.portalUser.savePageSettings, {
    retry: 1,
    useErrorBoundary: false,
    onSuccess: (response) => {
      queryClient.setQueryData(PORTAL_USERS_KEYS.PORTAL_USER, response);
    },
  });
};

export const useUpdateUserTheme = (): UseMutationResult<
  IUserTheme,
  QueryError,
  IUpdateUserThemePayload,
  string
> => {
  const { t } = useTranslation();

  return useMutation(api.portalUser.updateTheme, {
    retry: 1,
    onMutate: () => {
      return notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('settings.notifications.save.loading'),
        type: NOTIF_TYPES.LOADING,
      });
    },
    onError: (error, _variables, context) => {
      const isSavingError = error?.response?.status === STATUSES.DATA_ERROR;

      notificationService.show({
        type: NOTIF_TYPES.ERROR,
        title: t('notifications.errorTitle'),
        message: isSavingError
          ? t('notifications.invalidData')
          : error?.response?.data?.message || t('settings.notifications.save.error'),
        updateId: context,
      });
    },
    onSuccess: (theme, _, context) => {
      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('settings.notifications.save.success'),
        updateId: context,
      });
    },
  });
};
