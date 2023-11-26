import React from 'react';
import { useTranslation } from 'react-i18next';

import ColorItem from 'components/Pickers/ColorItem';
import VariableColorPickerPopover from 'components/Pickers/VariableColorPickerPopover';
import { appReactMemo } from 'hocs';

import { BlockTitle, Section } from '../../styled';

interface IPickerSection {
  title: string;
  color: string;
  onChange: (color: string) => void;
}

const PermanentSection = ({ title, color, onChange }: IPickerSection) => {
  const { t } = useTranslation('translation', { keyPrefix: 'themeEditor' });

  const variant = color.startsWith('linear') ? t('gradient') : t('solid');

  return (
    <Section>
      <BlockTitle size='sm' variant='bold'>
        {t(title as never)}
      </BlockTitle>
      <VariableColorPickerPopover color={color} onChange={onChange}>
        {({ isOpen }) => <ColorItem bg={color} title={variant} isActive={isOpen} />}
      </VariableColorPickerPopover>
    </Section>
  );
};

export default appReactMemo(PermanentSection);
