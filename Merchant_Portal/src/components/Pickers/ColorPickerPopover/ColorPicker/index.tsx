import React from 'react';

import { useDebouncedValue, useUpdateEffect } from '@private/hooks';

import { IColorPickerPopover } from 'components/Pickers/ColorPickerPopover';
import {
  ColorSquare,
  Container,
} from 'components/Pickers/ColorPickerPopover/ColorPicker/styled';
import { appReactMemo } from 'hocs';
import { IHsl } from 'utils/themeHelpers';

import HuePicker from '../../HuePicker';
import SaturationPicker from '../../SaturationPicker';
import LightnessSteps from '../LightnessSteps';

type TColorPickerContent = Omit<IColorPickerPopover, 'children'>;

const ColorPicker = ({
  hue,
  saturation,
  lightness = 55,
  lightnessConfig,
  onChange,
  className,
}: TColorPickerContent) => {
  const [color, setColor] = React.useState<IHsl>({ h: hue, s: saturation, l: lightness });
  const [debouncedValue, setDebouncedValue] = useDebouncedValue<IHsl>(300);

  useUpdateEffect(() => {
    setDebouncedValue(color);
  }, [color]);

  useUpdateEffect(() => {
    if (debouncedValue) {
      onChange({ hue: debouncedValue.h, saturation: debouncedValue.s });
    }
  }, [debouncedValue]);

  const onHueChange = React.useCallback(({ hsl }: { hsl: IHsl }) => {
    setColor((state) => ({ ...state, h: hsl.h }));
  }, []);

  const onSaturationChange = React.useCallback((saturation: number) => {
    setColor((state) => ({ ...state, s: saturation }));
  }, []);

  return (
    <Container className={className}>
      <ColorSquare hsl={color} />
      <HuePicker hsl={color} onChange={onHueChange} withPickerField />
      <SaturationPicker hsl={color} onChange={onSaturationChange} withPickerField />
      <LightnessSteps hsl={color} lightnessConfig={lightnessConfig} />
    </Container>
  );
};

export default appReactMemo(ColorPicker);
