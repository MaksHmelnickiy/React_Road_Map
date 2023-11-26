import React from 'react';
import { useTranslation } from 'react-i18next';

import { ISelectOption, TSelectValue } from '@private/components';
import { useModal } from '@private/modals';

import Button from 'components/Button';
import AutocompleteSelect from 'components/Controls/AutocompleteSelect';
import { ICONS_MAP } from 'constants/icons';

import {
  Body,
  ListItem,
  Name,
  SelectContainer,
  StyledModalContainer,
  StyledNoItemsFound,
} from './styled';

interface IUseRolesModal {
  options: ISelectOption[];
  selectedList: string[];
  onFinish: (selectedItems: string[]) => void;
}

interface IRolesModal extends IUseRolesModal {
  onClose: () => void;
}

const RolesModal = ({ options, selectedList, onFinish, onClose }: IRolesModal) => {
  const { t } = useTranslation();

  const [selected, setSelected] = React.useState(selectedList);
  const [isSelectMode, setIsSelectMode] = React.useState(false);

  const activateSelectMode = () => {
    setIsSelectMode(true);
  };

  const onSelectValue = (value: TSelectValue) => {
    setSelected((state) => [...state, value as string]);
    setIsSelectMode(false);
  };

  const availableOptions = React.useMemo(
    () => options.filter((option) => !selected.includes(option.value as string)),
    [options, selected]
  );

  const renderComponent = () => {
    if (selected.length === options?.length) {
      return null;
    }

    let component = (
      <Button
        variant='outlined'
        iconSize={16}
        startIcon={<ICONS_MAP.Plus />}
        onClick={activateSelectMode}
      >
        {t('users.form.rolesModal.addRole')}
      </Button>
    );

    if (isSelectMode) {
      component = (
        <AutocompleteSelect
          options={availableOptions}
          isInitialOpen
          onChange={onSelectValue}
          placeholder={t('users.form.rolesModal.selectRole')}
        />
      );
    }

    return <SelectContainer>{component}</SelectContainer>;
  };

  const onDeleteItem = React.useCallback(
    (deletedItem: string) => () => {
      setSelected((state) => state.filter((item) => item !== deletedItem));
    },
    []
  );

  const renderBody = () => {
    if (!selected.length) {
      return <StyledNoItemsFound />;
    }

    return selected.map((item, index) => (
      <ListItem key={`${item}-${index}`}>
        <Name variant='regular' size='md'>
          {item}
        </Name>
        <Button
          variant='icon'
          size='sm'
          iconSize={18}
          startIcon={<ICONS_MAP.Delete />}
          onClick={onDeleteItem(item)}
        />
      </ListItem>
    ));
  };

  const onSave = React.useCallback(() => {
    onFinish(selected);
    onClose();
  }, [selected, onFinish, onClose]);

  return (
    <StyledModalContainer
      title={t('users.form.rolesModal.roles')}
      leftBtnText={t('modals.cancel')}
      rightBtnText={t('modals.save')}
      onDismiss={onClose}
      onLeftAction={onClose}
      onRightAction={onSave}
    >
      {renderComponent()}
      <Body>{renderBody()}</Body>
    </StyledModalContainer>
  );
};

export const useRolesModal = () => {
  const { closeModal, showModal } = useModal();

  const showConfirmModal = React.useCallback((config: IUseRolesModal) => {
    showModal(<RolesModal {...config} onClose={closeModal} />);
  }, []);

  return [showConfirmModal, closeModal];
};
