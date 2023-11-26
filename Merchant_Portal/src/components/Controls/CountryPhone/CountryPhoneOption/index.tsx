import React from 'react';

import { CountryCode, getCountryCallingCode } from 'libphonenumber-js';

import { appReactMemo } from 'hocs';
import { getFormattedCountry } from 'utils/common';

import {
  Container,
  CountryIcon,
  CountryInfo,
  CountryName,
  CountryPrefix,
  TSizes,
} from './styled';

interface ICountryPhoneOption {
  countryCode: CountryCode;
  size: TSizes;
}

const CountryPhoneOption = ({ countryCode, size }: ICountryPhoneOption) => {
  return (
    <Container>
      <CountryInfo>
        <CountryIcon countryCode={countryCode} fullWidth />
        <CountryName size={size}>{getFormattedCountry(countryCode)}</CountryName>
      </CountryInfo>
      <CountryPrefix size={size}>
        {`+${getCountryCallingCode(countryCode)}`}
      </CountryPrefix>
    </Container>
  );
};

export default appReactMemo(CountryPhoneOption);
