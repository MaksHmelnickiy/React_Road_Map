import React from 'react';
import { useTranslation } from 'react-i18next';

import { useTerminalsLinksGroupEdit } from 'queries/terminalsLinks';
import { useGroupEditConfirmModal } from 'routes/pages/AuthorizedStack/PspManagement/TerminalsLinks/GroupEdit/hooks/useGroupEditConfirmModal';
import { IAllPageFilters } from 'utils/types';

import { Cancel } from './styled';

interface IUseGroupEdit {
  filters: IAllPageFilters;
  propertiesList: Record<string, string>[];
}

export const useGroupEdit = ({ filters, propertiesList }: IUseGroupEdit) => {
  const { t } = useTranslation();

  const [isBarOpen, setIsBarOpen] = React.useState(false);
  const [groupState, setGroupState] = React.useState<Record<string, boolean | undefined>>(
    {}
  );
  const isAllEnabled = React.useRef(false);

  const [showConfirmModal] = useGroupEditConfirmModal();

  const { mutate: saveGroupSettings, isLoading: isSaving } = useTerminalsLinksGroupEdit();

  const openBar = React.useCallback(() => {
    setIsBarOpen(true);
  }, []);

  const closeBar = React.useCallback(() => {
    setIsBarOpen(false);
  }, []);

  const activateItemHandler = React.useCallback((itemKey: string) => {
    setGroupState((state) => {
      const itemValue = state[itemKey];

      if (itemValue !== undefined) {
        const { [itemKey]: _removed, ...newState } = state;
        return newState;
      }

      return {
        ...state,
        [itemKey]: true,
      };
    });
    isAllEnabled.current = false;
  }, []);

  const changeItemState = React.useCallback((itemKey: string, value: boolean) => {
    setGroupState((state) => ({
      ...state,
      [itemKey]: value,
    }));
  }, []);

  const enableAllHandler = React.useCallback(() => {
    if (isAllEnabled.current) {
      setGroupState({});
      isAllEnabled.current = false;
      return;
    }

    const newState = propertiesList.reduce<Record<string, boolean>>((prev, { name }) => {
      prev[name] = true;
      return prev;
    }, {});

    setGroupState(newState);
    isAllEnabled.current = true;
  }, [propertiesList]);

  const clearStates = () => {
    closeBar();
    isAllEnabled.current = false;
    setTimeout(() => setGroupState({}), 300);
  };

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
  }, [groupState, filters, clearStates]);

  const cancelChanges = React.useCallback(() => {
    closeBar();
    isAllEnabled.current = false;
    setTimeout(() => setGroupState({}), 300);
  }, []);

  const onCancel = React.useCallback(() => {
    if (!Object.keys(groupState).length) {
      return cancelChanges();
    }
    const [before, cancel, after] = t('terminalsLinks.groupEdit.confirmModal.cancel', {
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
      onConfirm: cancelChanges,
    });
  }, [groupState]);

  const onSave = React.useCallback(() => {
    if (!Object.keys(groupState).length) {
      return clearStates();
    }
    const [before, after] = t('terminalsLinks.groupEdit.confirmModal.save', {
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
      return closeBar();
    }
    showConfirmModal({
      cancelText: t('common.cancel'),
      confirmText: t('common.save'),
      message: t('terminalsLinks.groupEdit.confirmModal.chooseAction'),
      onCancel: cancelChanges,
      onConfirm: saveChanges,
    });
  }, [groupState]);

  return {
    isAllEnabled: isAllEnabled.current,
    isBarOpen,
    openBar,
    onCloseBar,
    groupState,
    activateItemHandler,
    changeItemState,
    enableAllHandler,
    onCancel,
    onSave,
    isSaving,
  };
};
