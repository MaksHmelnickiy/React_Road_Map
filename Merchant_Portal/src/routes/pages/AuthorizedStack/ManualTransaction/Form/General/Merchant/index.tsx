import React from 'react';
import { useTranslation } from 'react-i18next';

import { TSelectValue } from '@private/components';
import { useField } from 'formik';

import FormikSelect from 'components/Form/FormikSelect';
import PreselectedField from 'components/Form/PreselectedField';
import { appReactMemo } from 'hocs';
import { useGetMerchantsNames } from 'queries/merchants';
/* eslint-disable */
interface IMerchant {
  onChange: (value: TSelectValue) => void;
}

const Merchant = ({ onChange }: IMerchant) => {
  const { t } = useTranslation('translation', { keyPrefix: 'manualTransaction.fields' });

  const { data: merchantsNames, isLoading: isLoadingNames } = useGetMerchantsNames();
  const [_field, _meta, helpers] = useField('merchantTerminalId');

  React.useEffect(() => {
    // if (merchantsNames?.length === 1) {
    //   helpers.setValue(merchantsNames[0].value, false);
    // }
  }, [merchantsNames]);

  if (merchantsNames?.length === 1) {
    return <PreselectedField label={t('merchant')} value={merchantsNames[0].label} />;
  }

  return (
    <FormikSelect
      label={t('merchant')}
      name='merchantTerminalId'
      options={merchantsNames || []}
      size='sm'
      loading={isLoadingNames}
      onChange={onChange}
    />
  );
};

export default appReactMemo(Merchant);
