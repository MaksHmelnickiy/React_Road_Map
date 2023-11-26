import React from 'react';
import { useTranslation } from 'react-i18next';

import FormikInput from 'components/Form/FormikInput';
import Section from 'components/Form/FormSection';
import { appReactMemo } from 'hocs';

import { NAVIGATION_OPTIONS } from '../../helpers';
import { DoubleColumn } from '../../styled';

const Merchant = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'manualTransaction.fields' });

  return (
    <Section
      sectionKey={NAVIGATION_OPTIONS.MERCHANT_IDS}
      keyPrefix='manualTransaction.sections'
    >
      <DoubleColumn>
        <FormikInput
          label={t('merchantTid')}
          placeholder={t('merchantTid')}
          name='merchantTransactionId'
          sizeVariant='sm'
          maxLength={128}
        />
        <FormikInput
          label={t('mt4Id')}
          placeholder={t('mt4Id')}
          name='mt4Id'
          sizeVariant='sm'
          maxLength={256}
        />
      </DoubleColumn>
    </Section>
  );
};

export default appReactMemo(Merchant);
