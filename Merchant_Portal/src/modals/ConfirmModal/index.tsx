import React from 'react';

import { TButtonTypes } from '@private/components';
import { useModal } from '@private/modals';

import ModalContainer, { IModalContainerProps } from 'components/ModalContainer';

type IModalContainer = Omit<
  IModalContainerProps,
  'leftBtnText' & 'leftBtnVariant' & 'rightBtnText' & 'rightBtnVariant' & 'onDismiss'
>;

export interface IConfirmModalConfig extends IModalContainer {
  cancelText?: string;
  cancelVariant?: TButtonTypes;
  confirmText?: string;
  confirmBtnType?: TButtonTypes;
  onConfirm: () => void;
  onClose?: () => void;
  message?: React.ReactNode;
}

export interface IConfirmModalProps extends IConfirmModalConfig {
  onClose: () => void;
}

const ConfirmModal = ({
  cancelText,
  cancelVariant,
  confirmText,
  confirmBtnType = 'primary',
  onClose,
  onConfirm,
  message,
  ...rest
}: IConfirmModalProps) => {
  return (
    <ModalContainer
      leftBtnText={cancelText || 'Cancel'}
      leftBtnVariant={cancelVariant}
      onLeftAction={onClose}
      rightBtnText={confirmText || 'Confirm'}
      rightBtnVariant={confirmBtnType}
      onRightAction={onConfirm}
      onDismiss={onClose}
      {...rest}
    >
      {message}
    </ModalContainer>
  );
};

type TUseConfirmModalResult = [(config: IConfirmModalConfig) => void, () => void];

export const useConfirmModal = (): TUseConfirmModalResult => {
  const { closeModal, showModal } = useModal();

  const showConfirmModal = React.useCallback((config: IConfirmModalConfig) => {
    showModal(
      <ConfirmModal
        {...config}
        onConfirm={() => {
          config.onConfirm();
          closeModal();
        }}
        onClose={closeModal}
      />
    );
  }, []);

  return [showConfirmModal, closeModal];
};
