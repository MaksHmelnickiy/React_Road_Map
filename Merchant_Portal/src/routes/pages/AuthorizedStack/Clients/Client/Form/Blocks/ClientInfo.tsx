import React from 'react';
import { useTranslation } from 'react-i18next';

import FormikCountryPhoneInput from 'components/Form/FormikCountryPhoneInput';
import FormikCountrySelect from 'components/Form/FormikCountrySelect';
import FormikDatePicker from 'components/Form/FormikDatePicker';
import FormikInput from 'components/Form/FormikInput';
import Section from 'components/Form/FormSection';
import { appReactMemo } from 'hocs';

import { NAVIGATION_OPTIONS } from '../helpers';
import { DoubleColumn } from '../styled';

const ClientInfo = () => {
  const { t } = useTranslation();

  const datePickerConfig = React.useMemo(
    () => ({
      settingsConfig: { hideTime: true },
    }),
    []
  );

  return (
    <Section sectionKey={NAVIGATION_OPTIONS.CLIENT_INFO} keyPrefix='client.form.sections'>
      <DoubleColumn>
        <FormikInput
          label={t('client.form.fields.firstName')}
          placeholder={t('client.form.fields.firstName')}
          name='firstName'
          sizeVariant='sm'
        />
        <FormikInput
          label={t('client.form.fields.lastName')}
          placeholder={t('client.form.fields.lastName')}
          name='lastName'
          sizeVariant='sm'
        />
        <FormikInput
          label={t('client.form.fields.email')}
          placeholder='example@email.com'
          name='email'
          sizeVariant='sm'
        />
        <FormikDatePicker
          label={t('client.form.fields.dateOfBirth')}
          placeholder={t('common.singleDate')}
          variant='datepicker'
          name='dateOfBirth'
          sizeVariant='sm'
          inputMask='yyyy-MM-dd'
          valueMask='yyyy-MM-dd'
          settingsConfig={datePickerConfig.settingsConfig}
        />
        <FormikCountrySelect
          label={t('client.form.fields.countryCode')}
          name='countryCode'
          size='sm'
        />
      </DoubleColumn>
      <DoubleColumn>
        <FormikInput
          label={t('client.form.fields.city')}
          placeholder={t('client.form.fields.city')}
          name='city'
          sizeVariant='sm'
        />
        <FormikInput
          label={t('client.form.fields.state')}
          placeholder={t('client.form.fields.state')}
          name='state'
          sizeVariant='sm'
        />
        <FormikInput
          label={t('client.form.fields.addressLine1')}
          placeholder={t('client.form.fields.addressLine1')}
          name='addressLine1'
          sizeVariant='sm'
        />
        <FormikInput
          label={t('client.form.fields.addressLine2')}
          placeholder={t('client.form.fields.addressLine2')}
          name='addressLine2'
          sizeVariant='sm'
        />
        <FormikCountryPhoneInput
          label={t('client.form.fields.phone')}
          phoneName='phone'
          codeName='phoneCountryCode'
          countryPlaceholder={t('client.form.fields.phoneCode')}
          phonePlaceholder={t('client.form.fields.phone')}
        />
        <FormikInput
          label={t('client.form.fields.postCode')}
          placeholder={t('client.form.fields.postCode')}
          name='postalCode'
          sizeVariant='sm'
        />
      </DoubleColumn>
    </Section>
  );
};

export default appReactMemo(ClientInfo);
