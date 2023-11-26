import React from 'react';
import { useTranslation } from 'react-i18next';

import { useFormikContext } from 'formik';

import FieldWrapper from 'components/Form/FieldWrapper';
import FormikSelect from 'components/Form/FormikSelect';
import { appReactMemo } from 'hocs';
import { useGetMerchantsScope } from 'queries/merchants';

import { IPaymentMethodForm } from '../helpers';

const MerchantSection = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'paymentMethods.form' });

  const { data: merchantsScope, isLoading } = useGetMerchantsScope();

  const { organizations = [], merchantsMap = {} } = merchantsScope || {};

  const {
    values: { organization, merchant },
    setFieldValue,
  } = useFormikContext<IPaymentMethodForm>();

  const onChangeOrganization = React.useCallback(() => {
    if (merchant) {
      setFieldValue('merchant', null, false);
    }
  }, [merchant]);

  return (
    <>
      <FieldWrapper title={t('organization')}>
        <FormikSelect
          name='organization'
          options={organizations}
          onChange={onChangeOrganization}
          size='sm'
          loading={isLoading}
        />
      </FieldWrapper>
      <FieldWrapper title={t('merchant')}>
        <FormikSelect
          name='merchant'
          options={(organization && merchantsMap?.[organization]) || []}
          size='sm'
          disabled={!organization}
          loading={isLoading}
        />
      </FieldWrapper>
    </>
  );
};

export default appReactMemo(MerchantSection);
