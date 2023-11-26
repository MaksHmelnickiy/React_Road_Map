import React from 'react';
import { useTranslation } from 'react-i18next';

import ModalContainer from 'components/ModalContainer';
import { ICONS_MAP } from 'constants/icons';

import { appReactMemo } from '../../hocs';

import { Content, Message, Title } from './style';

export interface IConfirmModalConfig {
  title?: string;
  message?: React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

export interface IConfirmModalProps extends IConfirmModalConfig {
  closeModal: () => void;
}

const ConfirmModal = ({
  closeModal,
  message,
  onConfirm,
  onCancel,
  cancelText,
  confirmText,
}: IConfirmModalProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'groupEdit.confirmModal' });

  const onRightAction = React.useCallback(() => {
    closeModal();
    onConfirm();
  }, [onConfirm]);

  const onLeftAction = React.useCallback(() => {
    closeModal();
    onCancel?.();
  }, [onCancel]);

  return (
    <ModalContainer
      onDismiss={closeModal}
      onLeftAction={onLeftAction}
      onRightAction={onRightAction}
      leftBtnText={cancelText}
      rightBtnText={confirmText}
    >
      <Content>
        <ICONS_MAP.Confirm />
        <Title as='h3'>{t('title')}</Title>
        <Message variant='bold' size='xl'>
          {message}
        </Message>
      </Content>
    </ModalContainer>
  );
};

export default appReactMemo(ConfirmModal);
