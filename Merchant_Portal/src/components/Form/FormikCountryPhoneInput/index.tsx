import React from 'react';
import { useTranslation } from 'react-i18next';

import { useField } from 'formik';

import CountryPhone from 'components/Controls/CountryPhone';
import { appReactMemo } from 'hocs';

interface IFormikCountryPhoneInput {
  codeName: string;
  phoneName: string;
  label?: string;
  className?: string;
  countryPlaceholder: string;
  phonePlaceholder: string;
}

const FormikCountryPhoneInput = ({
  codeName,
  phoneName,
  label,
  className,
  countryPlaceholder,
  phonePlaceholder,
}: IFormikCountryPhoneInput) => {
  const { t } = useTranslation();

  const [codeField, codeMeta, codeHelpers] = useField(codeName);
  const [phoneField, phoneMeta, phoneHelpers] = useField(phoneName);

  const onCodeChange = React.useCallback((code: string | null) => {
    codeHelpers.setValue(code || null, false);
    codeHelpers.setError(undefined);
  }, []);

  const onPhoneChange = React.useCallback((phone: string | null) => {
    phoneHelpers.setValue(phone, false);
    phoneHelpers.setError(undefined);
  }, []);

  const onCodeBlur = React.useCallback(() => {
    codeHelpers.setTouched(true, false);
  }, []);

  const onPhoneBlur = React.useCallback(() => {
    phoneHelpers.setTouched(true, false);
  }, []);

  return (
    <CountryPhone
      label={label}
      className={className}
      code={codeField.value}
      phone={phoneField.value}
      onCodeChange={onCodeChange}
      onPhoneChange={onPhoneChange}
      onCodeBlur={onCodeBlur}
      onPhoneBlur={onPhoneBlur}
      showError
      error={
        !!(codeMeta.error && codeMeta.touched) || !!(phoneMeta.error && phoneMeta.touched)
      }
      errorMessage={t(codeMeta.error as never) || t(phoneMeta.error as never)}
      countryPlaceholder={countryPlaceholder}
      phonePlaceholder={phonePlaceholder}
    />
  );
};

export default appReactMemo(FormikCountryPhoneInput);
