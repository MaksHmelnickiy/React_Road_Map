import React from 'react';
import { useTranslation } from 'react-i18next';

import FormikCountryPhoneInput from 'components/Form/FormikCountryPhoneInput';
import FormikDatePicker from 'components/Form/FormikDatePicker';
import FormikInput from 'components/Form/FormikInput';
import Section from 'components/Form/FormSection';
import { appReactMemo } from 'hocs';

import { NAVIGATION_OPTIONS } from '../../helpers';
import { DoubleColumn } from '../../styled';

const ClientInfo = () => {
  const { t } = useTranslation();

  const datePickerConfig = React.useMemo(
    () => ({
      settingsConfig: { hideTime: true },
    }),
    []
  );

  return (
    <Section
      sectionKey={NAVIGATION_OPTIONS.CLIENT_INFO}
      keyPrefix='manualTransaction.sections'
    >
      <DoubleColumn>
        <FormikInput
          label={t('manualTransaction.fields.firstName')}
          placeholder={t('manualTransaction.fields.firstName')}
          name='customer.firstName'
          sizeVariant='sm'
          maxLength={256}
        />
        <FormikInput
          label={t('manualTransaction.fields.lastName')}
          placeholder={t('manualTransaction.fields.lastName')}
          name='customer.lastName'
          sizeVariant='sm'
          maxLength={256}
        />
        <FormikDatePicker
          label={t('manualTransaction.fields.dateOfBirth')}
          placeholder={t('common.singleDate')}
          variant='datepicker'
          name='customer.dateOfBirth'
          sizeVariant='sm'
          inputMask='yyyy-MM-dd'
          valueMask='yyyy-MM-dd'
          settingsConfig={datePickerConfig.settingsConfig}
        />
        <FormikInput
          label={t('manualTransaction.fields.email')}
          name='customer.email'
          placeholder='example@email.com'
          sizeVariant='sm'
        />
        <FormikCountryPhoneInput
          label={t('manualTransaction.fields.phone')}
          phoneName='customer.phone'
          codeName='customer.phoneCountryCode'
          countryPlaceholder={t('manualTransaction.fields.phoneCode')}
          phonePlaceholder={t('manualTransaction.fields.phone')}
        />
        <FormikDatePicker
          label={t('manualTransaction.fields.registrationDate')}
          placeholder={t('common.singleDate')}
          variant='datepicker'
          name='customer.registrationDate'
          sizeVariant='sm'
          inputMask='yyyy-MM-dd'
          valueMask='yyyy-MM-dd'
          settingsConfig={datePickerConfig.settingsConfig}
        />
      </DoubleColumn>
    </Section>
  );
};

export default appReactMemo(ClientInfo);
