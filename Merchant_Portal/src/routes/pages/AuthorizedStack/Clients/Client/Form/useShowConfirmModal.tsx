import React from 'react';
import { useTranslation } from 'react-i18next';

import { FormikHelpers } from 'formik';

import { IClientForm } from 'api/clients/types';
import { useConfirmModal } from 'modals';

import { Message } from './styled';

interface IProps {
  condition: boolean;
  helpers: FormikHelpers<IClientForm>;
  callback: () => void;
}

export const useShowConfirmModal = () => {
  const { t } = useTranslation();

  const [showConfirmModal, closeModal] = useConfirmModal();

  return React.useCallback(({ condition, helpers, callback }: IProps) => {
    if (condition) {
      showConfirmModal({
        title: t('client.form.notifications.confirmation.title'),
        confirmText: t('common.ok'),
        confirmBtnType: 'primary',
        message: <Message>{t('client.form.notifications.confirmation.message')}</Message>,
        onConfirm: callback,
        onDismiss: () => {
          helpers.setSubmitting(false);
          closeModal();
        },
        onLeftAction: () => {
          helpers.setSubmitting(false);
          closeModal();
        },
      });
    } else {
      callback();
    }
  }, []);
};
