import React from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { Actions, CancelButton, Container, SaveButton, StyledInput } from './styled';

interface INameForm {
  name: string;
  onApply: (name: string) => void;
  onCancel: () => void;
}

const NameForm = ({ name, onApply, onCancel }: INameForm) => {
  const { t } = useTranslation('translation', { keyPrefix: 'themeEditor' });
  const [value, setValue] = React.useState(name);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > 150) {
      return;
    }
    setValue(value);
  };

  const onSave = () => {
    onApply(value);
  };

  const onDiscard = () => {
    onCancel();
  };

  return (
    <Container>
      <StyledInput
        label={t('themeName')}
        value={value}
        onChange={onChange}
        autoFocus
        isAnimatedLabel
      />
      <Actions>
        <SaveButton
          variant='icon'
          startIcon={<ICONS_MAP.Check />}
          onClick={onSave}
          disabled={!value}
          iconSize={16}
        />
        <CancelButton
          variant='icon'
          startIcon={<ICONS_MAP.Close />}
          onClick={onDiscard}
          iconSize={13}
        />
      </Actions>
    </Container>
  );
};

export default appReactMemo(NameForm);
