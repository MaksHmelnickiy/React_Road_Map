import React from 'react';
import { HSLColor } from 'react-color';
import { useTranslation } from 'react-i18next';

import { useUpdateEffect } from '@private/hooks';

import ColorPickerInput from 'components/Pickers/ColorPickerInput';
import {
  Container,
  RangeInput,
  SaturationLine,
  SaturationLineContainer,
} from 'components/Pickers/SaturationPicker/styled';
import { appReactMemo } from 'hocs';
import { useInputRevertValue } from 'hooks/useInputRevertValue';

interface ISaturationPicker {
  hsl: HSLColor;
  withPickerField?: boolean;
  onChange: (val: number) => void;
}

const SaturationPicker = ({ hsl, withPickerField, onChange }: ISaturationPicker) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'themeEditor.components.pickers',
  });

  const [saturation, setSaturation] = React.useState<number | string>(hsl.s);

  const revertCallback = React.useCallback(
    (prevValue: string) => {
      if (!saturation) {
        setSaturation(prevValue);
      }
    },
    [saturation]
  );

  const { onFocus, onBlur } = useInputRevertValue({
    conditionCallback: revertCallback,
  });

  useUpdateEffect(() => {
    if (saturation !== hsl.s) {
      setSaturation(hsl.s);
    }
  }, [hsl.s]);

  const onChangeSaturation = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value.replace(/[^0-9]/g, '');
      if (!value.length) {
        return setSaturation(value);
      }
      const number = Number(value);
      const isGreater = number > 100 ? 100 : number;
      const result = isGreater < 0 ? 0 : isGreater;

      setSaturation(result);

      if (Number.isFinite(result)) {
        onChange(result as number);
      }
    },
    [onChange]
  );

  return (
    <Container>
      {withPickerField && (
        <ColorPickerInput
          label={t('saturationLabel')}
          value={saturation}
          onFocus={onFocus}
          onChange={onChangeSaturation}
          onBlur={onBlur}
        />
      )}
      <SaturationLineContainer>
        <RangeInput
          type='range'
          min={0}
          max={100}
          value={hsl.s}
          onChange={onChangeSaturation}
        />
        <SaturationLine hsl={{ ...hsl, s: 100 }} />
      </SaturationLineContainer>
    </Container>
  );
};

export default appReactMemo(SaturationPicker);
