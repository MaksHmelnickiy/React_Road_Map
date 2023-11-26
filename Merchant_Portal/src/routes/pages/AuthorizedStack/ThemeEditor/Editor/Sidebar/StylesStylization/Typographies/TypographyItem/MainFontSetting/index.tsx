import React from 'react';
import { useTranslation } from 'react-i18next';

import { TSelectValues } from '@private/components';

import { mainFontOptions } from 'constants/componentValues';
import { appReactMemo } from 'hocs';

import { StyledAutocompleteSelect } from '../styled';

import { Preview } from './styled';

interface ITypographySettings {
  fontFamily: string;
  onChange?: (fontFamily: string) => void;
}

const MainFontSetting = ({ fontFamily, onChange }: ITypographySettings) => {
  const { t } = useTranslation('translation', { keyPrefix: 'themeEditor' });

  const onSelectValue = React.useCallback(
    (value: TSelectValues | TSelectValues[]) => {
      onChange?.(value as string);
    },
    [onChange]
  );

  return (
    <div>
      <Preview fontFamily={fontFamily}>Aa</Preview>
      <StyledAutocompleteSelect
        label={t('fontFamily')}
        size='sm'
        value={fontFamily}
        options={mainFontOptions}
        enablePortal
        onChange={onSelectValue}
        enableRemoveButton={false}
      />
    </div>
  );
};

export default appReactMemo(MainFontSetting);
