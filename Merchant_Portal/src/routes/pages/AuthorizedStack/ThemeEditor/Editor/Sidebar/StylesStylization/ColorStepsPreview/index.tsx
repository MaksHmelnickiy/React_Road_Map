import React from 'react';

import { generatePalette } from '@private/payment';

import { IColor, ILightnessItem } from 'api/merchantTerminalThemes/types';
import { appReactMemo } from 'hocs';

import { Color, Palette } from './styled';

export interface IColorStepsPreview {
  color: IColor;
  lightnessConfig: ILightnessItem[];
}

const ColorStepsPreview = ({ color, lightnessConfig }: IColorStepsPreview) => {
  const colorPalette = React.useMemo(() => {
    const palette = generatePalette({
      ...color,
      lightnessConfig,
    });

    return Object.values<string>(palette).reverse();
  }, [color, lightnessConfig]);

  return (
    <Palette>
      {colorPalette.map((color) => (
        <Color key={color} color={color} />
      ))}
    </Palette>
  );
};

export default appReactMemo(ColorStepsPreview);
