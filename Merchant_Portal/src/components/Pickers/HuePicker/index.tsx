import React from 'react';
import { ColorState, HuePicker as HuePickerColor } from 'react-color';
import { useTranslation } from 'react-i18next';

import { useUpdateEffect } from '@private/hooks';

import ColorPickerInput from 'components/Pickers/ColorPickerInput';
import ColorPickerPointer from 'components/Pickers/ColorPickerPopover/ColorPickerPointer';
import { Container } from 'components/Pickers/HuePicker/styled';
import { appReactMemo } from 'hocs';
import { useInputRevertValue } from 'hooks/useInputRevertValue';
import { hslToHex, IHsl } from 'utils/themeHelpers';

interface IHuePicker {
  hsl: IHsl;
  withPickerField?: boolean;
  onChange: (props: { hsl: IHsl; hex: string }) => void;
}

const HuePicker = ({ hsl, withPickerField, onChange }: IHuePicker) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'themeEditor.components.pickers',
  });

  const [hue, setHue] = React.useState<string | number>(hsl.h);

  const revertCallback = React.useCallback(
    (prevValue: string) => {
      if (!hue) {
        setHue(prevValue);
      }
    },
    [hue]
  );

  const { onFocus, onBlur } = useInputRevertValue({
    conditionCallback: revertCallback,
  });

  useUpdateEffect(() => {
    if (hue !== hsl.h) {
      setHue(hsl.h);
    }
  }, [hsl.h]);

  const onColorChange = React.useCallback(
    (color: ColorState) => {
      const roundedHue = Math.round(color.hsl.h);
      const newColor = { ...hsl, h: roundedHue };
      onChange({ hsl: newColor, hex: hslToHex(newColor) });
    },
    [onChange, hsl]
  );

  const onInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value.replace(/[^0-9]/g, '');
      if (!value.length) {
        return setHue(value);
      }
      const number = Number(value);
      const isGreater = number > 359 ? 359 : number;
      const result = isGreater < 0 ? 0 : isGreater;
      setHue(result);

      const newColor = { ...hsl, h: result };
      onChange({ hsl: newColor, hex: hslToHex(newColor) });
    },
    [hsl, onChange]
  );

  return (
    <Container>
      {withPickerField && (
        <ColorPickerInput
          label={t('hueLabel')}
          value={hue}
          onFocus={onFocus}
          onChange={onInputChange}
          onBlur={onBlur}
        />
      )}
      <HuePickerColor
        width='100%'
        height='8px'
        color={hsl}
        onChange={onColorChange}
        pointer={ColorPickerPointer}
      />
    </Container>
  );
};

export default appReactMemo(HuePicker);
