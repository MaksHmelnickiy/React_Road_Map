import React from 'react';
import { useTranslation } from 'react-i18next';

import { ISelectOption, TSelectValues } from '@private/components';

import { baseThemeValues } from 'constants/common';
import {
  FONT_WEIGHTS,
  fontOptions,
  FONTS_VARIANTS,
  fontSizeVariants,
} from 'constants/componentValues';
import { appReactMemo } from 'hocs';
import { useFontWeights } from 'hooks/useFontWeights';

import { ITypographyBase } from '../../types';
import { StyledAutocompleteSelect } from '../styled';

import { FontSettings, Preview } from './styled';

interface ITypographySettings {
  typography: ITypographyBase;
  mainFontFamily: string;
  onChange?: (key: string, typography: ITypographyBase) => void;
  keyPath: string;
}

const TypographySettings = ({
  typography,
  mainFontFamily,
  onChange,
  keyPath,
}: ITypographySettings) => {
  const { t } = useTranslation();

  const weightOptions = useFontWeights({
    fontFamily: typography.fontFamily,
    mainFontFamily,
  });

  const onSelectValue = React.useCallback(
    (fieldKey: string) => (value: TSelectValues | TSelectValues[]) => {
      let updatedTypography = {
        ...typography,
        [fieldKey]: value,
      };
      if (fieldKey === 'fontFamily') {
        const fontValue = value === baseThemeValues.inherit ? mainFontFamily : value;
        const fontWeights = FONT_WEIGHTS[fontValue as FONTS_VARIANTS];
        const weightExist = fontWeights?.includes(typography.fontWeight);
        if (!weightExist) {
          updatedTypography = {
            ...updatedTypography,
            fontWeight: fontWeights[0],
          };
        }
      }
      onChange?.(keyPath, updatedTypography);
    },
    [keyPath, typography, onChange]
  );

  return (
    <div>
      <Preview typography={typography} mainFontFamily={mainFontFamily}>
        Aa
      </Preview>
      <FontSettings>
        <StyledAutocompleteSelect
          label={t('themeEditor.fontFamily')}
          size='sm'
          value={typography.fontFamily}
          options={fontOptions as ISelectOption[]}
          enablePortal
          onChange={onSelectValue('fontFamily')}
          enableRemoveButton={false}
        />
        <StyledAutocompleteSelect
          label={t('themeEditor.weight')}
          size='sm'
          value={typography.fontWeight}
          options={weightOptions}
          enablePortal
          onChange={onSelectValue('fontWeight')}
          enableRemoveButton={false}
        />
        <StyledAutocompleteSelect
          label={t('themeEditor.size')}
          size='sm'
          value={typography.fontSize}
          options={fontSizeVariants}
          enablePortal
          onChange={onSelectValue('fontSize')}
          enableRemoveButton={false}
        />
      </FontSettings>
    </div>
  );
};

export default appReactMemo(TypographySettings);
