import React from 'react';
import { HSLColor } from 'react-color';
import { useTranslation } from 'react-i18next';

import { ILightnessItem } from 'api/merchantTerminalThemes/types';
import ColorStepsPreview from 'components/Pickers/ColorStepsPreview';
import { appReactMemo } from 'hocs';

import { Container, Label } from './styled';

interface IPickerLightness {
  hsl: HSLColor;
  lightnessConfig: ILightnessItem[];
}

const LightnessSteps = ({ hsl, lightnessConfig }: IPickerLightness) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'themeEditor.components.pickers',
  });

  return (
    <Container>
      <Label variant='regular' size='sm'>
        {t('lightnessLabel')}
      </Label>
      <ColorStepsPreview
        color={{ hue: hsl.h, saturation: hsl.s }}
        lightnessConfig={lightnessConfig}
      />
    </Container>
  );
};

export default appReactMemo(LightnessSteps);
