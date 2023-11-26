import React from 'react';
import { useTranslation } from 'react-i18next';

import FormikInput from 'components/Form/FormikInput';
import Section from 'components/Form/FormSection';
import { appReactMemo } from 'hocs';

import { NAVIGATION_OPTIONS } from '../../helpers';

const Crm = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'manualTransaction.fields' });

  return (
    <Section
      sectionKey={NAVIGATION_OPTIONS.CRM_ID}
      keyPrefix='manualTransaction.sections'
    >
      <FormikInput
        label={t('crmId')}
        placeholder={t('crmId')}
        name='customer.merchantCustomerId'
        sizeVariant='sm'
        maxLength={256}
      />
    </Section>
  );
};

export default appReactMemo(Crm);
