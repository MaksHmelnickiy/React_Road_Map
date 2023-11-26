import React from 'react';
import { useTranslation } from 'react-i18next';

import { FONT_WEIGHTS, FONTS_VARIANTS } from 'constants/componentValues';

interface IUseFontWeights {
  fontFamily?: string;
  mainFontFamily: string;
}

export const useFontWeights = ({ fontFamily, mainFontFamily }: IUseFontWeights) => {
  const { t } = useTranslation();

  const weightOptions = React.useMemo(() => {
    let fontWeights = FONT_WEIGHTS[fontFamily as FONTS_VARIANTS] || [];

    if (fontFamily === 'inherit') {
      fontWeights = FONT_WEIGHTS[mainFontFamily as FONTS_VARIANTS] || [];
    }

    return fontWeights.map((fontWeight) => ({
      label: t(`common.fontWeights.${fontWeight}` as never),
      value: fontWeight.toString(),
    }));
  }, [fontFamily, mainFontFamily]);

  return weightOptions;
};
