import React from 'react';
import { useTranslation } from 'react-i18next';

import FormikInput from 'components/Form/FormikInput';
import FormikSelect from 'components/Form/FormikSelect';
import Section from 'components/Form/FormSection';
import { DECIMAL_REG_EXP } from 'constants/common';
import { appReactMemo } from 'hocs';
import { useGetDictionaries } from 'queries/data';

import { NAVIGATION_OPTIONS } from '../../helpers';
import { DoubleColumn } from '../../styled';

const Transaction = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'cashierLimits.form.fields',
  });

  const { data } = useGetDictionaries();

  const currencyOptions = React.useMemo(
    () =>
      data?.currency?.map((currency) => ({
        label: currency,
        value: currency,
      })) || [],
    [data?.currency]
  );
  return (
    <Section
      sectionKey={NAVIGATION_OPTIONS.TRANSACTION}
      keyPrefix='cashierLimits.form.sections'
    >
      <DoubleColumn>
        <FormikSelect
          label={t('currency')}
          placeholder={t('currency')}
          name='currency'
          options={currencyOptions}
          size='sm'
        />
      </DoubleColumn>
      <DoubleColumn>
        <FormikInput
          label={t('minAmount')}
          placeholder={t('minAmount')}
          name='minAmount'
          sizeVariant='sm'
          regExp={DECIMAL_REG_EXP}
        />
        <FormikInput
          label={t('maxAmount')}
          placeholder={t('maxAmount')}
          name='maxAmount'
          sizeVariant='sm'
          regExp={DECIMAL_REG_EXP}
        />
      </DoubleColumn>
    </Section>
  );
};

export default appReactMemo(Transaction);
