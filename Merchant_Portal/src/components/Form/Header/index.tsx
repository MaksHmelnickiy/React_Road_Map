import React from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import NameField from './NameField';
import { Actions, Container, SaveButton, StyledBack } from './styled';

export interface IHeader {
  onBack: () => void;
  backText: string;
  isNew?: boolean;
  isSaving: boolean;
  onSave?: () => void;
  error?: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  activateEditMode: () => void;
  discardChanges: () => void;
  saveName: () => void;
  onClearName: () => void;
  isEditMode: boolean;
  newNameText: string;
  namePlaceholder: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Header = ({
  onBack,
  backText,
  isNew,
  isSaving,
  onSave,
  error,
  onNameChange,
  name,
  activateEditMode,
  discardChanges,
  saveName,
  onClearName,
  isEditMode,
  newNameText,
  namePlaceholder,
  onBlur,
}: IHeader) => {
  const { t } = useTranslation();

  return (
    <Container>
      <div>
        <StyledBack
          type='button'
          variant='icon'
          startIcon={<ICONS_MAP.MinimalLeftArrow />}
          iconSize={14}
          onClick={onBack}
        >
          {backText}
        </StyledBack>
      </div>
      <NameField
        isEditMode={isEditMode}
        activateEditMode={activateEditMode}
        discardChanges={discardChanges}
        saveChanges={saveName}
        onClear={onClearName}
        roleName={name}
        onNameChange={onNameChange}
        error={error}
        newNameText={newNameText}
        namePlaceholder={namePlaceholder}
        onBlur={onBlur}
      />
      <Actions>
        <SaveButton
          type='submit'
          variant='primary'
          onClick={onSave}
          disabled={isSaving}
          isLoading={isSaving}
        >
          {isNew ? t('common.create') : t('common.save')}
        </SaveButton>
      </Actions>
    </Container>
  );
};

export default appReactMemo(Header);
