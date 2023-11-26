import React from 'react';
import { useTranslation } from 'react-i18next';

import { getNestedProp } from '@private/payment';

import Checkbox from 'components/Controls/Checkbox';
import ColorItem from 'components/Pickers/ColorItem';
import VariableColorPickerPopover from 'components/Pickers/VariableColorPickerPopover';
import { appReactMemo } from 'hocs';
import { getHslParams, hslToHex } from 'utils/themeHelpers';

import { useEditorContext } from '../../../EditorContext';

import { ColorSetter } from './styled';

interface IColorProperty {
  value: string;
  onChange: (newColor: string) => void;
}

const FALLBACK_COLOR = '#000000';
const TRANSPARENT = 'transparent';
const LINEAR = 'linear';

const ColorProperty = ({ value, onChange }: IColorProperty) => {
  const { t } = useTranslation('translation', { keyPrefix: 'themeEditor' });

  const { composedPalette } = useEditorContext();

  const isTransparent = value.includes(TRANSPARENT);
  let currentColor = isTransparent ? FALLBACK_COLOR : value || FALLBACK_COLOR;

  if (currentColor.startsWith('palette') && !isTransparent) {
    const [propertyColor] = value.split(':');
    currentColor = getNestedProp(
      propertyColor.replace('palette.', ''),
      composedPalette
    ) as string;
  }

  const transparentSelectHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const isTransparent = e.target.checked;
      const newColor = isTransparent ? TRANSPARENT : FALLBACK_COLOR;
      onChange(newColor);
    },
    [onChange]
  );

  const isGradient = currentColor.startsWith(LINEAR);
  const isHsl = currentColor.startsWith('hsl');
  const colorVariant = isGradient ? t('gradient') : t('solid');

  return (
    <ColorSetter>
      <Checkbox
        checked={isTransparent}
        label={t('useTransparent')}
        onChange={transparentSelectHandler}
      />
      <VariableColorPickerPopover
        placement='left-start'
        color={isHsl ? hslToHex(getHslParams(currentColor)) : currentColor}
        onChange={onChange}
        singleVariant={isGradient ? undefined : 'solid'}
        positionGap={25}
        disabled={isTransparent}
      >
        {({ isOpen }) => (
          <ColorItem
            bg={currentColor}
            title={colorVariant}
            disabled={isTransparent}
            isActive={isOpen}
          />
        )}
      </VariableColorPickerPopover>
    </ColorSetter>
  );
};

export default appReactMemo(ColorProperty);
