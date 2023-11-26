import React from 'react';
import { useTranslation } from 'react-i18next';

import { useUpdateEffect } from '@private/hooks';
import { useField, useFormikContext } from 'formik';

import { IClientForm } from 'api/clients/types';
import FormikInput from 'components/Form/FormikInput';
import FormikSelect from 'components/Form/FormikSelect';
import Section from 'components/Form/FormSection';
import { appReactMemo } from 'hocs';
import { useGetMerchantsNames } from 'queries/merchants';

import { NAVIGATION_OPTIONS } from '../helpers';

interface IGeneral {
  isNew?: boolean;
}

const General = ({ isNew }: IGeneral) => {
  const { t } = useTranslation('translation', { keyPrefix: 'client.form.fields' });

  const { values, setFieldValue } = useFormikContext<IClientForm>();

  const { merchantTerminalId } = values;

  const { data: merchantsNames, isLoading: isLoadingNames } = useGetMerchantsNames();

  const [_field, _meta, helpers] = useField('merchantTerminalId');

  React.useEffect(() => {
    if (merchantsNames?.length === 1) {
      helpers.setValue(merchantsNames[0].value, false);
    }
  }, [merchantsNames]);

  useUpdateEffect(() => {
    setFieldValue('terminalLinkId', null, false);
  }, [merchantTerminalId]);

  return (
    <Section sectionKey={NAVIGATION_OPTIONS.GENERAL} keyPrefix='client.form.sections'>
      <FormikSelect
        label={t('merchantTerminalId')}
        name='merchantTerminalId'
        options={merchantsNames || []}
        size='sm'
        loading={isLoadingNames}
        disabled={!isNew}
      />
      <FormikInput
        label={t('merchantCustomerId')}
        placeholder={t('merchantCustomerId')}
        name='merchantCustomerId'
        sizeVariant='sm'
        disabled={!isNew}
      />
    </Section>
  );
};

export default appReactMemo(General);
