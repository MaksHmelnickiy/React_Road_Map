import React from 'react';

import { useModal } from '@private/modals';

import ModalContainer from 'components/ModalContainer';
import { ICONS_MAP } from 'constants/icons';

import { Content, Message, Title } from './styled';

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
  const onRightAction = React.useCallback(() => {
    closeModal();
    onConfirm();
  }, [onConfirm]);

  const onLeftAction = React.useCallback(() => {
    closeModal();
    onCancel?.();
  }, [onConfirm]);

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
        <Title as='h3'>Are you sure?</Title>
        <Message variant='bold' size='xl'>
          {message}
        </Message>
      </Content>
    </ModalContainer>
  );
};

type TUseConfirmModalResult = [(config: IConfirmModalConfig) => void, () => void];

export const useGroupEditConfirmModal = (): TUseConfirmModalResult => {
  const { closeModal, showModal } = useModal();

  const showConfirmModal = React.useCallback((config: IConfirmModalConfig) => {
    showModal(<ConfirmModal {...config} closeModal={closeModal} />);
  }, []);

  return [showConfirmModal, closeModal];
};
