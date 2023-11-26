import { useTranslation } from 'react-i18next';
import { useMutation, UseMutationResult } from 'react-query';

import { NOTIF_TYPES } from '@private/notifications';
import { AxiosResponse } from 'axios';

import api from 'api';
import { IPasswordRecoveryData, ISetPasswordData } from 'api/auth/types';
import { STATUSES } from 'constants/common';
import { notificationService } from 'utils/notificationService';
import { QueryError } from 'utils/types';

export const RECOVER_PASSWORD = 'recoverPassword';
export const PASSWORD_RESET = 'PASSWORD_RESET';

export const useRecoverPassword = (): UseMutationResult<
  AxiosResponse,
  QueryError,
  IPasswordRecoveryData
> => {
  const { t } = useTranslation();

  return useMutation(api.auth.passwordRecovery, {
    retry: 1,
    useErrorBoundary: false,
    onError: (error: QueryError) => {
      const isSavingError = error?.response?.status === STATUSES.INVALID_DATA;

      notificationService.show({
        type: NOTIF_TYPES.ERROR,
        title: t('notifications.errorTitle'),
        message:
          error?.response?.data?.message ||
          (isSavingError
            ? t('notifications.invalidData')
            : t('notifications.errorMessage')),
        toastId: RECOVER_PASSWORD,
      });
    },
    onSuccess: () => {
      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('authentication.forgotPassword.emailStep.checkEmail'),
        message: t('authentication.forgotPassword.emailStep.resetInstructions'),
        toastId: RECOVER_PASSWORD,
        dismissIn: false,
      });
    },
  });
};

export const useSetUserPassword = (): UseMutationResult<
  AxiosResponse,
  QueryError,
  ISetPasswordData
> => {
  const { t } = useTranslation();

  return useMutation(api.auth.setUserPassword, {
    retry: 1,
    useErrorBoundary: false,
    onError: (error: QueryError) => {
      const isSavingError = error?.response?.status === STATUSES.INVALID_DATA;

      notificationService.show({
        type: NOTIF_TYPES.ERROR,
        title: t('notifications.errorTitle'),
        message:
          error?.response?.data?.message ||
          (isSavingError
            ? t('notifications.invalidData')
            : t('notifications.errorMessage')),
      });
    },
    onSuccess: (response, { operationType }) => {
      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t(
          `authentication.forgotPassword.setPassword.${
            operationType === PASSWORD_RESET ? 'passwordChanged' : 'passwordSet'
          }`
        ),
      });
    },
  });
};
