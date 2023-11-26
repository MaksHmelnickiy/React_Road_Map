import React from 'react';

import { useDebouncedValue, useUpdateEffect } from '@private/hooks';

import { appReactMemo } from 'hocs';
import { hslToHex, IHsl, parseGradient } from 'utils/themeHelpers';

import ColorVariant from '../ColorVariant';
import GradientVariant from '../GradientVariant';
import SolidVariant from '../SolidVariant';

import { Container, GradientTypes } from './styled';

export type GradientVariants = 'solid' | 'gradient';

export interface IVariableColorPicker {
  color: string;
  onChange: (color: string) => void;
  singleVariant?: 'solid' | 'gradient';
}

const getInitialVariant = (color: string) =>
  color.startsWith('linear') ? 'gradient' : 'solid';

const getDegree = (color: string) => {
  if (color.startsWith('linear')) {
    const { degree } = parseGradient(color);
    return degree;
  }
  return 45;
};

const VariableColorPicker = ({
  color,
  onChange,
  singleVariant,
}: IVariableColorPicker): React.ReactElement => {
  const initialDegree = React.useRef(getDegree(color));
  const [gradientType, setGradientType] = React.useState<GradientVariants>(
    singleVariant || getInitialVariant(color)
  );
  const [pickerColor, setPickerColor] = React.useState(color);
  const [debouncedValue, setDebouncedValue] = useDebouncedValue<string>(300);
  const endColorMemo = React.useRef<IHsl>();

  useUpdateEffect(() => {
    if (debouncedValue) {
      onChange(debouncedValue);
    }
  }, [debouncedValue]);

  const onColorChange = React.useCallback((color: string, endColorHsl?: IHsl) => {
    if (endColorHsl) {
      endColorMemo.current = endColorHsl;
    }
    setPickerColor(color);
    setDebouncedValue(color);
  }, []);

  const solidColor = React.useMemo(() => {
    if (pickerColor.startsWith('linear-gradient')) {
      const { startColor, endColorHsl } = parseGradient(pickerColor);
      if (!endColorMemo.current) {
        endColorMemo.current = endColorHsl;
      }
      return startColor;
    }
    return pickerColor;
  }, [pickerColor]);

  const gradientColor = pickerColor.startsWith('#')
    ? `linear-gradient(${initialDegree.current}deg, ${pickerColor} 0%, ${
        endColorMemo.current ? hslToHex(endColorMemo.current) : '#ffffff'
      } 100%)`
    : pickerColor;

  const onGradientSelect = React.useCallback(() => {
    setGradientType('gradient');
    onColorChange(gradientColor);
  }, [gradientColor]);

  const onSolidSelect = React.useCallback(() => {
    setGradientType('solid');
    onColorChange(solidColor);
  }, [solidColor]);

  return (
    <Container isSingleVariant={!!singleVariant}>
      {!singleVariant && (
        <GradientTypes>
          <ColorVariant
            name='Solid'
            color={solidColor}
            isActive={gradientType === 'solid'}
            getSelectedType={onSolidSelect}
          />
          <ColorVariant
            name='Gradient'
            color={gradientColor}
            isActive={gradientType === 'gradient'}
            getSelectedType={onGradientSelect}
          />
        </GradientTypes>
      )}

      {gradientType === 'solid' ? (
        <SolidVariant color={solidColor} onChange={onColorChange} />
      ) : (
        <GradientVariant
          color={gradientColor}
          onChange={onColorChange}
          endColorMemo={endColorMemo.current}
        />
      )}
    </Container>
  );
};

export default appReactMemo(VariableColorPicker);
