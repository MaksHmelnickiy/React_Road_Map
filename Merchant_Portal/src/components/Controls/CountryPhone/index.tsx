import React, { ChangeEvent } from 'react';

import { TSelectValue } from '@private/components';
import { useUpdateEffect } from '@private/hooks';
import { AsYouType, getCountries, getCountryCallingCode } from 'libphonenumber-js';

import { appReactMemo } from 'hocs';
import { getFormattedCountry } from 'utils/common';

import { TSizes } from './CountryPhoneOption/styled';

import CountryPhoneOption from './CountryPhoneOption';
import {
  Container,
  ErrorMessage,
  Label,
  PhoneInput,
  StyledAutocompleteSelect,
  StyledInput,
} from './styled';

const MAX_PHONE_LENGTH = 18;

interface ICountryPhone {
  code?: string;
  phone?: string;
  label?: string;
  className?: string;
  error?: boolean;
  showError?: boolean;
  errorMessage?: string;
  onCodeChange?: (code: string | null) => void;
  onPhoneChange?: (phone: string | null) => void;
  onCodeBlur?: () => void;
  onPhoneBlur?: () => void;
  size?: TSizes;
  disabled?: boolean;
  countryPlaceholder: string;
  phonePlaceholder: string;
}

const CountryPhone = ({
  code: initialCode,
  phone = '',
  label,
  error,
  errorMessage,
  showError,
  className,
  onCodeChange,
  onPhoneChange,
  onCodeBlur,
  onPhoneBlur,
  size = 'sm',
  disabled,
  countryPlaceholder,
  phonePlaceholder,
}: ICountryPhone) => {
  const code = React.useMemo(() => {
    if (!initialCode) {
      return;
    }
    return initialCode?.startsWith('+') ? initialCode : `+${initialCode}`;
  }, [initialCode]);

  const getInitialPhone = () => {
    return new AsYouType().input(`${code}${phone}`);
  };

  const getInitialCountryCode = () => {
    if (!code) {
      return null;
    }

    const asYouType = new AsYouType();
    asYouType?.input(`${code}${phone}`);
    const countries = asYouType.getNumber()?.getPossibleCountries();

    if ((countries && countries.length > 1) || !countries) {
      return null;
    }
    if (countries && countries.length) {
      const [country] = countries;
      const realCode = asYouType.getCallingCode(); // because in code can be 38095 but we need only 380
      return `${country}-${realCode}`;
    }
    return null;
  };

  const [countryCode, setCountryCode] = React.useState<string | null>(
    getInitialCountryCode
  );

  const [phoneValue, setPhoneValue] = React.useState(getInitialPhone);
  const oldPhoneCode = React.useRef(countryCode);

  React.useEffect(() => {
    const asYouType = new AsYouType();
    asYouType?.input(`${code}${phone}`);
    const realCode = asYouType.getCallingCode(); // because in code can be 38095 but we need only 380
    if (code && code.replace(/\D/, '') !== realCode) {
      onCodeChange?.(`+${realCode}`);
    }
    const realNationalNumber = asYouType.getNationalNumber();
    if (phone !== realNationalNumber) {
      onPhoneChange?.(realNationalNumber); // override to real normalized number
    }
  }, []);

  useUpdateEffect(() => {
    if (!code) {
      setCountryCode(null);
    }
  }, [code]);

  useUpdateEffect(() => {
    if (phone === null) {
      setPhoneValue('');
    }
  }, [phone]);

  useUpdateEffect(() => {
    if (countryCode) {
      const [_country, phoneCode] = countryCode.split('-');
      const code = `+${phoneCode}`;
      if (!phoneValue.startsWith(code)) {
        setPhoneValue(code);
      }
      return onCodeChange?.(code);
    }
    if (!countryCode && oldPhoneCode.current) {
      const [_country, phoneCode] = oldPhoneCode.current.split('-');
      const code = `+${phoneCode}`;
      if (!phoneValue.startsWith(code)) {
        onCodeChange?.(null);
      }
    }
  }, [countryCode]);

  const countryOptions = React.useMemo(() => {
    const countriesPhoneOptions = getCountries().map((countryCode) => ({
      label: getFormattedCountry(countryCode),
      value: `${countryCode}-${getCountryCallingCode(countryCode)}`,
      component: <CountryPhoneOption countryCode={countryCode} size={size} />,
    }));

    return countriesPhoneOptions.sort((a, b) => {
      if (a.label < b.label) {
        return -1;
      }
      if (a.label > b.label) {
        return 1;
      }
      return 0;
    });
  }, []);

  const onCountryChange = React.useCallback((value: TSelectValue = null) => {
    setCountryCode(value as string);
    oldPhoneCode.current = value as string;
    onPhoneChange?.(null);
    if (value === null) {
      setPhoneValue('');
      onCodeChange?.(null);
    }
  }, []);

  const onPhoneValueChange = React.useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value: inputValue } = e.target;
      const value = inputValue.startsWith('+') ? inputValue : `+${inputValue}`;
      const normalized = value.replace(/[^0-9+]/g, '');
      const phoneNumber = value.replace(/\D/g, '');

      if (!phoneNumber) {
        onCodeChange?.(null);
        onPhoneChange?.(null);
      }

      if (!inputValue) {
        setCountryCode(null);
        return setPhoneValue('');
      }

      let resultCallingCode = oldPhoneCode.current?.split('-')[1] || '';

      const internationalPhone = new AsYouType();

      internationalPhone.input(normalized);
      const callingCode = internationalPhone.getCallingCode() || '';

      if (phoneNumber.length) {
        const countries = internationalPhone.getNumber()?.getPossibleCountries();

        if (!countries?.length && countryCode) {
          const [_, callingCode] = countryCode.split('-');
          if (!phoneNumber.startsWith(callingCode)) {
            oldPhoneCode.current = countryCode;
            setCountryCode(null);
          }
        } else if (countries?.length === 1) {
          const [newCountryCode] = countries;
          const codeValue = `${newCountryCode}-${callingCode}`;
          setCountryCode(codeValue);
          resultCallingCode = callingCode;
          oldPhoneCode.current = codeValue;
        }
      }

      const maxLength = callingCode.length + MAX_PHONE_LENGTH;
      const resultPhone = new AsYouType().input(`+${phoneNumber.slice(0, maxLength)}`);
      setPhoneValue(resultPhone);
      onPhoneChange?.(phoneNumber.replace(resultCallingCode, ''));
    },
    [countryCode, countryOptions, onPhoneChange]
  );

  return (
    <Container className={className} $size={size}>
      {label && (
        <Label $size={size} disabled={disabled} $error={error}>
          {label}
        </Label>
      )}
      <PhoneInput $size={size} $error={error} disabled={disabled}>
        <StyledAutocompleteSelect
          size={size}
          placeholder={countryPlaceholder}
          options={countryOptions}
          value={countryCode}
          onChange={onCountryChange}
          onBlur={onCodeBlur}
          enableRemoveButton={countryCode !== null}
        />
        <StyledInput
          sizeVariant={size}
          placeholder={phonePlaceholder}
          value={phoneValue}
          onChange={onPhoneValueChange}
          isAnimatedLabel={false}
          onBlur={onPhoneBlur}
        />
      </PhoneInput>
      {showError && <ErrorMessage $size={size}>{error && errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default appReactMemo(CountryPhone);
