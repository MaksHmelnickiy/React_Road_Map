import React from 'react';
import { HSLColor } from 'react-color';
import { useTranslation } from 'react-i18next';

import ColorPickerInput from 'components/Pickers/ColorPickerInput';
import HuePicker from 'components/Pickers/HuePicker';
import GradientBox from 'components/Pickers/VariableColorPickerPopover/GradientBox';
import { useInputRevertValue } from 'hooks/useInputRevertValue';
import { hexToHsl, IHsl, isValidHex } from 'utils/themeHelpers';

import { VariantContainer } from '../VariableColorPicker/styled';

interface ISingleGradient {
  color: string;
  onChange: (hex: string) => void;
}

const SolidVariant = ({ color, onChange }: ISingleGradient) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'themeEditor.components.pickers',
  });

  const [hexColor, setHexColor] = React.useState<string>(color);
  const [hslColor, setHslColor] = React.useState<HSLColor>(hexToHsl(color));

  const revertCallback = React.useCallback(
    (prevValue: string) => {
      const prev = `#${prevValue}`;
      if (!isValidHex(hexColor)) {
        setHexColor(prev);
        setHslColor(hexToHsl(prev));
        onChange(prev);
      }
    },
    [hexColor]
  );

  const { onFocus, onBlur } = useInputRevertValue({
    conditionCallback: revertCallback,
  });

  const onColorChange = React.useCallback(({ hsl, hex }: { hex: string; hsl: IHsl }) => {
    setHslColor(hsl);
    setHexColor(hex);
    onChange(hex);
  }, []);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const validValue = value.slice(0, 6);
    const newHex = `#${validValue}`;
    setHexColor(newHex);
    if (isValidHex(newHex)) {
      onChange(newHex);
      setHslColor(hexToHsl(newHex));
    }
  };

  return (
    <VariantContainer>
      <GradientBox color={hslColor} onChange={onColorChange} />
      <HuePicker hsl={hslColor} onChange={onColorChange} />
      <ColorPickerInput
        label={t('colorLabel')}
        value={hexColor.replace('#', '')}
        onChange={onChangeInput}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </VariantContainer>
  );
};

export default SolidVariant;
