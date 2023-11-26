import React from 'react';

import Button from 'components/Button';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { Container, Name, StyledCancel, StyledInput, StyledSave } from './styled';

interface INameField {
  isEditMode: boolean;
  roleName: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  activateEditMode: () => void;
  discardChanges: () => void;
  saveChanges: () => void;
  onClear: () => void;
  newNameText: string;
  namePlaceholder: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const NameField = ({
  isEditMode,
  activateEditMode,
  discardChanges,
  saveChanges,
  onClear,
  roleName,
  onNameChange,
  error,
  newNameText,
  namePlaceholder,
  onBlur,
}: INameField) => {
  if (!isEditMode) {
    return (
      <Container $center>
        <Name variant='bold' size='xl'>
          {roleName || newNameText}
        </Name>
        <Button
          variant='icon'
          onClick={activateEditMode}
          startIcon={<ICONS_MAP.Edit />}
          iconSize={20}
        />
      </Container>
    );
  }

  return (
    <Container>
      <StyledInput
        sizeVariant='sm'
        value={roleName || ''}
        onChange={onNameChange}
        onBlur={onBlur}
        placeholder={namePlaceholder}
        endIcon={roleName ? <ICONS_MAP.Clear /> : undefined}
        onEndIconClick={onClear}
        iconSize={28}
        iconMargin={10}
        error={!!error}
        errorMessage={error}
        showError
        maxLength={128}
      />
      <StyledSave
        variant='icon'
        size='xs'
        onClick={saveChanges}
        startIcon={<ICONS_MAP.Check />}
        iconSize={15}
      />
      <StyledCancel
        variant='icon'
        size='xs'
        onClick={discardChanges}
        startIcon={<ICONS_MAP.Close />}
        iconSize={12}
      />
    </Container>
  );
};

export default appReactMemo(NameField);
