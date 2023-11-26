import { useTranslation } from 'react-i18next';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query';

import { NOTIF_TYPES } from '@private/notifications';
import { AxiosResponse } from 'axios';

import api from 'api';
import { MERCHANT_TERMINAL_KEYS } from 'api/merchantTerminalThemes/constants';
import { getSortedThemes } from 'api/merchantTerminalThemes/normalizers';
import {
  IActivateThemePayload,
  IActiveTheme,
  ICreateThemePayload,
  IDeleteThemePayload,
  IMerchant,
  ITheme,
  IUpdateThemePayload,
} from 'api/merchantTerminalThemes/types';
import { STATUSES } from 'constants/common';
import { notificationService } from 'utils/notificationService';
import { QueryError } from 'utils/types';

export const useGetMerchantThemes = (
  merchantTerminalId?: string
): UseQueryResult<IMerchant> => {
  const getThemes = () => {
    return merchantTerminalId
      ? api.merchantTerminalThemes.getThemes(merchantTerminalId)
      : null;
  };

  return useQuery(
    [MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES, merchantTerminalId],
    getThemes
  );
};

export const useCreateMerchantTerminalTheme = (): UseMutationResult<
  ITheme,
  QueryError,
  ICreateThemePayload,
  { ntfID: string }
> => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation(api.merchantTerminalThemes.createTheme, {
    retry: 1,
    useErrorBoundary: false,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('stylization.notifications.create.loading'),
        type: NOTIF_TYPES.LOADING,
      });
      return { ntfID };
    },
    onError: (error, _variables, context) => {
      const isSavingError = error?.response?.status === STATUSES.DATA_ERROR;

      notificationService.show({
        type: NOTIF_TYPES.ERROR,
        title: t('notifications.errorTitle'),
        message:
          error?.response?.data?.message ||
          (isSavingError
            ? t('notifications.invalidData')
            : t('stylization.notifications.activate.error')),
        updateId: context?.ntfID,
        dismissIn: 8000,
      });
    },
    onSuccess: (theme, { id }, context) => {
      const merchant = queryClient.getQueryData<IMerchant>([
        MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES,
        id,
      ]);

      if (merchant) {
        queryClient.setQueryData([MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES, id], {
          ...merchant,
          themes: [...merchant.themes, theme],
        });
      }

      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('stylization.notifications.create.success'),
        updateId: context?.ntfID,
      });
    },
  });
};

export const useUpdateMerchantTerminalTheme = (): UseMutationResult<
  ITheme,
  QueryError,
  IUpdateThemePayload,
  { ntfID: string; dataBeforeUpdate?: IMerchant }
> => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation(api.merchantTerminalThemes.updateTheme, {
    retry: 1,
    useErrorBoundary: false,
    onMutate: ({ theme, id }) => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('stylization.notifications.edit.loading'),
        type: NOTIF_TYPES.LOADING,
      });

      const dataBeforeUpdate = queryClient.getQueryData<IMerchant>([
        MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES,
        id,
      ]);

      if (dataBeforeUpdate) {
        queryClient.setQueryData([MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES, id], {
          ...dataBeforeUpdate,
          themes: dataBeforeUpdate.themes.map((item) =>
            item.id === theme.id ? { ...item, ...theme } : item
          ),
        });
      }

      return { ntfID, dataBeforeUpdate };
    },
    onError: (error, { id }, context) => {
      queryClient.setQueryData(
        [MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES, id],
        context?.dataBeforeUpdate
      );

      const isSavingError = error?.response?.status === STATUSES.DATA_ERROR;

      notificationService.show({
        type: NOTIF_TYPES.ERROR,
        title: t('notifications.errorTitle'),
        message:
          error?.response?.data?.message ||
          (isSavingError
            ? t('notifications.invalidData')
            : t('stylization.notifications.edit.error')),
        updateId: context?.ntfID,
        dismissIn: 8000,
      });
    },
    onSuccess: (theme, { id }, context) => {
      const merchant = queryClient.getQueryData<IMerchant>([
        MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES,
        id,
      ]);

      if (merchant) {
        queryClient.setQueryData([MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES, id], {
          ...merchant,
          themes: merchant.themes.map((merchantTheme) =>
            merchantTheme.name === theme.name ? theme : merchantTheme
          ),
        });
      }
      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('stylization.notifications.edit.success'),
        updateId: context?.ntfID,
      });
    },
  });
};

export const useSetMerchantTerminalActiveTheme = (
  data: IActivateThemePayload
): UseMutationResult<AxiosResponse, QueryError, void, { ntfID: string }> => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const { id, themeId } = data;

  const setThemeFn = () => api.merchantTerminalThemes.setActiveTheme(data);

  return useMutation(setThemeFn, {
    retry: 1,
    useErrorBoundary: false,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('stylization.notifications.activate.loading'),
        type: NOTIF_TYPES.LOADING,
      });

      return { ntfID };
    },
    onError: (error, _variables, context) => {
      const isSavingError = error?.response?.status === STATUSES.DATA_ERROR;

      notificationService.show({
        type: NOTIF_TYPES.ERROR,
        title: t('notifications.errorTitle'),
        message:
          error?.response?.data?.message ||
          (isSavingError
            ? t('notifications.invalidData')
            : t('stylization.notifications.activate.error')),
        updateId: context?.ntfID,
      });
    },
    onSuccess: (_resp, _, context) => {
      const merchantBeforeUpdate = queryClient.getQueryData<IMerchant>([
        MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES,
        id,
      ]);

      if (merchantBeforeUpdate && themeId) {
        queryClient.setQueryData([MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES, id], {
          ...merchantBeforeUpdate,
          activeTheme: data.themeId,
          themes: getSortedThemes(merchantBeforeUpdate.themes, themeId),
        });
      }

      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('stylization.notifications.activate.success'),
        updateId: context?.ntfID,
      });
    },
  });
};

export const useDeleteMerchantTerminalTheme = (
  data: IDeleteThemePayload
): UseMutationResult<
  IActiveTheme,
  QueryError,
  void,
  { ntfID: string; pageBeforeUpdate?: IMerchant }
> => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const { id, themeId } = data;

  const deleteFn = () => api.merchantTerminalThemes.deleteTheme(data);

  return useMutation(deleteFn, {
    retry: 1,
    useErrorBoundary: false,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('stylization.notifications.delete.loading'),
        type: NOTIF_TYPES.LOADING,
      });

      const pageBeforeUpdate = queryClient.getQueryData<IMerchant>([
        MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES,
        id,
      ]);

      if (pageBeforeUpdate) {
        queryClient.setQueryData([MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES, id], {
          ...pageBeforeUpdate,
          themes: pageBeforeUpdate.themes.filter((item) => item.id !== themeId),
        });
      }

      return { ntfID, pageBeforeUpdate };
    },
    onError: (error, _variables, context) => {
      queryClient.setQueryData(
        [MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES, id],
        context?.pageBeforeUpdate
      );

      const isSavingError = error?.response?.status === STATUSES.DATA_ERROR;

      notificationService.show({
        type: NOTIF_TYPES.ERROR,
        title: t('notifications.errorTitle'),
        message:
          error?.response?.data?.message ||
          (isSavingError
            ? t('notifications.invalidData')
            : t('stylization.notifications.delete.error')),
        updateId: context?.ntfID,
      });
    },
    onSuccess: ({ activeTheme }, _, context) => {
      const merchant = queryClient.getQueryData<IMerchant>([
        MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES,
        id,
      ]);

      if (merchant && merchant.activeTheme !== activeTheme) {
        queryClient.setQueryData([MERCHANT_TERMINAL_KEYS.MERCHANT_TERMINAL_THEMES, id], {
          ...merchant,
          activeTheme,
          themes: merchant.themes.reduce<ITheme[]>((prev, item) => {
            if (item.name === activeTheme) {
              prev.unshift(item);
            } else {
              prev.push(item);
            }
            return prev;
          }, []),
        });
      }
      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('stylization.notifications.delete.success'),
        updateId: context?.ntfID,
      });
    },
  });
};
