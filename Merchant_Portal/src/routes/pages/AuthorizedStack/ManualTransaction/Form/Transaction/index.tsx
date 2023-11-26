import React from 'react';
import { useTranslation } from 'react-i18next';

import FormikInput from 'components/Form/FormikInput';
import FormikSelect from 'components/Form/FormikSelect';
import Section from 'components/Form/FormSection';
import { appReactMemo } from 'hocs';
import { useGetDictionaries } from 'queries/data';

import { NAVIGATION_OPTIONS } from '../../helpers';
import { DoubleColumn } from '../../styled';

const Transaction = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'manualTransaction.fields' });
  const { data: appData } = useGetDictionaries();

  const currencyOptions = React.useMemo(
    () =>
      appData?.currency?.map((currency) => ({
        label: currency,
        value: currency,
      })) || [],
    [appData?.currency]
  );

  return (
    <Section
      sectionKey={NAVIGATION_OPTIONS.TRANSACTION}
      keyPrefix='manualTransaction.sections'
    >
      <DoubleColumn>
        <FormikInput
          label={t('amount')}
          placeholder={t('amount')}
          name='amount'
          sizeVariant='sm'
          regExp={/^\d+\.?\d*$/}
        />
        <FormikSelect
          label={t('currency')}
          name='currency'
          options={currencyOptions}
          size='sm'
        />
      </DoubleColumn>
      <FormikInput
        label={t('description')}
        placeholder={t('description')}
        name='description'
        sizeVariant='sm'
        maxLength={256}
      />
    </Section>
  );
};

export default appReactMemo(Transaction);
