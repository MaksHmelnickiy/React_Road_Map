import React from 'react';
import { useTranslation } from 'react-i18next';
import { UseMutateFunction } from 'react-query';

import { AxiosResponse } from 'axios';

import { IRulesetsGroupEdit } from 'api/routingRuleset/types';
import { useConfirmModal } from 'components/ConfirmModal/hooks/useConfirmModal';
import { IAllPageFilters, QueryError } from 'utils/types';

import { Cancel } from './styled';

interface IGroupEdit {
  filters: IAllPageFilters;
  saveGroupSettings: UseMutateFunction<AxiosResponse, QueryError, IRulesetsGroupEdit>;
  groupState: Record<string, unknown>;
  clearStates: () => void;
}

export const useGroupEditActions = ({
  filters,
  saveGroupSettings,
  groupState,
  clearStates,
}: IGroupEdit) => {
  const { t } = useTranslation();

  const [showConfirmModal] = useConfirmModal();

  const saveChanges = React.useCallback(() => {
    saveGroupSettings(
      {
        filters,
        settings: groupState,
      },
      {
        onSuccess: clearStates,
      }
    );
  }, [groupState, filters]);

  const onCancel = React.useCallback(() => {
    if (!Object.keys(groupState).length) {
      return clearStates();
    }
    const [before, cancel, after] = t('groupEdit.confirmModal.cancel', {
      returnObjects: true,
    });
    showConfirmModal({
      cancelText: t('common.no'),
      confirmText: t('common.yes'),
      message: (
        <>
          {before}
          <br />
          <Cancel>{cancel}</Cancel>
          {after}
        </>
      ),
      onConfirm: clearStates,
    });
  }, [groupState]);

  const onSave = React.useCallback(() => {
    if (!Object.keys(groupState).length) {
      return clearStates();
    }
    const [before, after] = t('groupEdit.confirmModal.save', {
      returnObjects: true,
    });
    showConfirmModal({
      cancelText: t('common.no'),
      confirmText: t('common.yes'),
      message: (
        <>
          {before}
          <br />
          {after}
        </>
      ),
      onConfirm: saveChanges,
    });
  }, [saveChanges, groupState]);

  const onCloseBar = React.useCallback(() => {
    if (!Object.keys(groupState).length) {
      return clearStates();
    }
    showConfirmModal({
      cancelText: t('common.cancel'),
      confirmText: t('common.save'),
      message: t('groupEdit.confirmModal.chooseAction'),
      onCancel: clearStates,
      onConfirm: saveChanges,
    });
  }, [groupState]);

  return {
    onCloseBar,
    onCancel,
    onSave,
  };
};
