import React from 'react';
import { useTranslation } from 'react-i18next';

import { useFormikContext } from 'formik';

import { ILimitForm } from 'api/cashierLimits/types';
import FormikSelect from 'components/Form/FormikSelect';
import Section from 'components/Form/FormSection';
import { appReactMemo } from 'hocs';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { useGetPaymentMethods } from 'queries/manualTransaction';

import { NAVIGATION_OPTIONS } from '../../helpers';
import { DoubleColumn } from '../../styled';

const Payment = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'cashierLimits.form.fields',
  });

  const getDictionaryNaming = useGetDictionaryNaming();

  const { values } = useFormikContext<ILimitForm>();

  const { merchantTerminalId } = values;

  const { data: paymentMethods, isLoading: isLoadingPaymentMethods } =
    useGetPaymentMethods({ id: merchantTerminalId });
  // getDictionaryNaming('operationType', operationType);
  const paymentMethodsOptions = React.useMemo(
    () =>
      paymentMethods?.map((paymentMethod) => ({
        label: getDictionaryNaming('paymentMethodMap', paymentMethod) || paymentMethod,
        value: paymentMethod,
      })) || [],
    [paymentMethods]
  );

  return (
    <Section
      sectionKey={NAVIGATION_OPTIONS.PAYMENT}
      keyPrefix='cashierLimits.form.sections'
    >
      <DoubleColumn>
        <FormikSelect
          label={t('paymentMethod')}
          placeholder={t('paymentMethod')}
          name='paymentMethod'
          loading={isLoadingPaymentMethods}
          options={paymentMethodsOptions}
          size='sm'
        />
        <FormikSelect
          label={t('operation')}
          placeholder={t('operation')}
          name='operation'
          options={[]}
          size='sm'
        />
      </DoubleColumn>
    </Section>
  );
};

export default appReactMemo(Payment);
