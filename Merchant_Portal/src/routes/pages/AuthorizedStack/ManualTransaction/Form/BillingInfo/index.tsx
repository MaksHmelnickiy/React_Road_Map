import React from 'react';
import { useTranslation } from 'react-i18next';

import FormikCountrySelect from 'components/Form/FormikCountrySelect';
import FormikInput from 'components/Form/FormikInput';
import Section from 'components/Form/FormSection';
import { appReactMemo } from 'hocs';

import { NAVIGATION_OPTIONS } from '../../helpers';
import { DoubleColumn } from '../../styled';

const BillingInfo = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'manualTransaction.fields' });

  return (
    <Section
      sectionKey={NAVIGATION_OPTIONS.BILLING_ADDRESS}
      keyPrefix='manualTransaction.sections'
    >
      <DoubleColumn>
        <FormikCountrySelect label={t('country')} name='customer.countryCode' size='sm' />
      </DoubleColumn>
      <DoubleColumn>
        <FormikInput
          label={t('city')}
          placeholder={t('city')}
          name='customer.city'
          sizeVariant='sm'
        />
        <FormikInput
          label={t('state')}
          placeholder={t('state')}
          name='customer.state'
          sizeVariant='sm'
        />
      </DoubleColumn>
      <FormikInput
        label={t('addressLine1')}
        placeholder={t('addressLine1')}
        name='customer.addressLine1'
        sizeVariant='sm'
      />
      <FormikInput
        label={t('addressLine2')}
        placeholder={t('addressLine2')}
        name='customer.addressLine2'
        sizeVariant='sm'
      />
      <DoubleColumn>
        <FormikInput
          label={t('zip')}
          placeholder={t('zip')}
          name='customer.postalCode'
          sizeVariant='sm'
        />
      </DoubleColumn>
    </Section>
  );
};

export default appReactMemo(BillingInfo);
