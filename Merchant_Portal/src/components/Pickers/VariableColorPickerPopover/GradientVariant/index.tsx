import React from 'react';
import { useTranslation } from 'react-i18next';

import { useUpdateEffect } from '@private/hooks';

import ColorPickerInput from 'components/Pickers/ColorPickerInput';
import HuePicker from 'components/Pickers/HuePicker';
import GradientBox from 'components/Pickers/VariableColorPickerPopover/GradientBox';
import { appReactMemo } from 'hocs';
import { useInputRevertValue } from 'hooks/useInputRevertValue';
import {
  composeGradient,
  hexToHsl,
  IHsl,
  isValidHex,
  normalizeHsl,
  parseGradient,
} from 'utils/themeHelpers';
import { IGradientColor } from 'utils/types';

import { VariantContainer } from '../VariableColorPicker/styled';

import GradientSlider, { TRangeVariants } from './GradientSlider';

interface IRangeGradient {
  color: string;
  onChange: (color: string, endColorHsl?: IHsl) => void;
  endColorMemo?: IHsl;
}

const GradientVariant = ({ color, onChange, endColorMemo }: IRangeGradient) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'themeEditor.components.pickers',
  });
  const parsedColor = React.useMemo(() => parseGradient(color), [color]);
  const [gradient, setGradient] = React.useState<IGradientColor>({
    ...parsedColor,
    endColorHsl: endColorMemo || parsedColor.endColorHsl,
  });
  const [activeRange, setActiveRange] = React.useState<TRangeVariants>('start');

  useUpdateEffect(() => {
    const { startColor, endColor, startColorPercent, endColorPercent, endColorHsl } =
      gradient;
    if (!isValidHex(startColor) || !isValidHex(endColor)) {
      return;
    }
    if (startColorPercent > endColorPercent) {
      return onChange(
        composeGradient({
          ...gradient,
          startColor: endColor,
          endColor: startColor,
          startColorPercent: endColorPercent,
          endColorPercent: startColorPercent,
        }),
        endColorHsl
      );
    }
    onChange(composeGradient(gradient), endColorHsl);
  }, [gradient]);

  const onColorChange = React.useCallback(
    ({ hex, hsl }: { hex: string; hsl: IHsl }) => {
      setGradient((state) => ({
        ...state,
        [`${activeRange}Color`]: hex,
        [`${activeRange}ColorHsl`]: normalizeHsl(hsl),
      }));
    },
    [activeRange]
  );

  const onInputChange =
    (variant: TRangeVariants) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      const validValue = value.length > 6 ? value.slice(0, 6) : value;
      const newHex = `#${validValue}`;
      const isValid = isValidHex(newHex);
      setGradient((state) => ({
        ...state,
        [`${variant}Color`]: newHex,
        [`${variant}ColorHsl`]: isValid ? hexToHsl(newHex) : state[`${variant}ColorHsl`],
      }));
    };

  const startInputChange = React.useCallback(onInputChange('start'), []);
  const endInputChange = React.useCallback(onInputChange('end'), []);

  const revertCallback = React.useCallback(
    (variant: TRangeVariants) => (prevValue: string, hsl?: IHsl) => {
      if (!isValidHex(gradient[`${variant}Color`])) {
        setGradient({
          ...gradient,
          [`${variant}Color`]: `#${prevValue}`,
          [`${variant}ColorHsl`]: hsl,
        });
      }
    },
    [gradient]
  );

  const startInputBlur = React.useCallback(revertCallback('start'), [revertCallback]);
  const endInputBlur = React.useCallback(revertCallback('end'), [revertCallback]);

  const { onFocus: onStartFocus, onBlur: onStartBlur } = useInputRevertValue({
    conditionCallback: startInputBlur,
    hsl: gradient.startColorHsl,
  });
  const { onFocus: onEndFocus, onBlur: onEndBlur } = useInputRevertValue({
    conditionCallback: endInputBlur,
    hsl: gradient.endColorHsl,
  });

  const onSelectColor = React.useCallback((colorVariant: TRangeVariants) => {
    setActiveRange(colorVariant);
  }, []);

  const onSliderChange = React.useCallback(
    ({ variant, degree }: { variant: TRangeVariants; degree: number }) => {
      setGradient((state) => ({ ...state, [`${variant}ColorPercent`]: degree }));
      setActiveRange(variant);
    },
    []
  );

  return (
    <VariantContainer>
      <GradientSlider
        color={color}
        gradient={gradient}
        onSelectColor={onSelectColor}
        onChange={onSliderChange}
        activeRange={activeRange}
      />
      <GradientBox color={gradient[`${activeRange}ColorHsl`]} onChange={onColorChange} />
      <HuePicker
        hsl={gradient[`${activeRange}ColorHsl`]}
        onChange={onColorChange}
        withPickerField={false}
      />
      <ColorPickerInput
        name='startColor'
        label={`1 ${t('colorLabel')}`}
        value={gradient.startColor.replace('#', '')}
        onChange={startInputChange}
        onFocus={onStartFocus}
        onBlur={onStartBlur}
      />
      <ColorPickerInput
        name='endColor'
        label={`2 ${t('colorLabel')}`}
        value={gradient.endColor.replace('#', '')}
        onChange={endInputChange}
        onFocus={onEndFocus}
        onBlur={onEndBlur}
      />
    </VariantContainer>
  );
};

export default appReactMemo(GradientVariant);
