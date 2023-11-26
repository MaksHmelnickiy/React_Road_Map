import React from 'react';

import { useModal } from '@private/modals';

import ConfirmModal from '..';

export interface IConfirmModalConfig {
  title?: string;
  message?: React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

type TUseConfirmModalResult = [(config: IConfirmModalConfig) => void, () => void];

export const useConfirmModal = (): TUseConfirmModalResult => {
  const { closeModal, showModal } = useModal();

  const showConfirmModal = React.useCallback((config: IConfirmModalConfig) => {
    showModal(<ConfirmModal {...config} closeModal={closeModal} />);
  }, []);

  return [showConfirmModal, closeModal];
};
