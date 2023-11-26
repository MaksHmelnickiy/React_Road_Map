import React from 'react';

import { TSelectSizes } from '@private/components';

import { appReactMemo } from 'hocs';
import { getFormattedCountry } from 'utils/common';

import { Flag, Name, ValueContainer } from './styled';

interface ICountryOption {
  countryCode: string;
  size?: TSelectSizes;
}

const CountryOption = ({ countryCode, size = 'lg' }: ICountryOption) => {
  return (
    <ValueContainer>
      <Flag countryCode={countryCode} fullWidth />
      <Name size={size}>{getFormattedCountry(countryCode)}</Name>
    </ValueContainer>
  );
};

export default appReactMemo(CountryOption);
