import React from 'react';
import { useTranslation } from 'react-i18next';

import { useFormikContext } from 'formik';

import FormikInput from 'components/Form/FormikInput';
import FormikSelect from 'components/Form/FormikSelect';
import Section from 'components/Form/FormSection';
import { appReactMemo } from 'hocs';
import { useGetMerchantsScope } from 'queries/merchants';
import { usePspSearchAutocomplete } from 'queries/psp';
import { useGetAllTerminals } from 'queries/terminals';
import { getSelectList } from 'utils/common';

import { ITerminalLinkForm, NAVIGATION_OPTIONS } from '../helpers';
import { DoubleColumn, StyledFormikSwitch } from '../styled';

const INITIAL_FILTER = { size: 1000 };

const General = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'terminalLink.form.fields' });

  const { values, setFieldValue } = useFormikContext<ITerminalLinkForm>();
  const { merchantId, bankId } = values;

  const { data: merchantsScope, isLoading: isLoadingScope } = useGetMerchantsScope();

  const {
    searchPsp,
    query: { isLoading: isLoadingPsp, data: psp },
  } = usePspSearchAutocomplete();

  const bankTerminalsFilter = React.useMemo(
    () => ({
      ...INITIAL_FILTER,
      search: {
        bankId: { operation: ':', value: bankId },
      },
    }),
    [bankId]
  );

  const { data: banksTerminals, isLoading: banksTerminalsLoading } = useGetAllTerminals(
    bankTerminalsFilter,
    { enabled: !!bankId }
  );

  const { organizations = [], merchantsMap = {} } = merchantsScope || {};

  const pspOptions = React.useMemo(() => getSelectList(psp), [psp]);

  const banksTerminalsOptions = React.useMemo(
    () => getSelectList(banksTerminals?.data),
    [banksTerminals?.data]
  );

  const merchantTerminalsOptions = merchantId ? merchantsMap[merchantId] : [];

  const onOrganizationChange = React.useCallback(() => {
    setFieldValue('merchantTerminalId', null, false);
  }, []);

  const onBackChange = React.useCallback(() => {
    setFieldValue('bankTerminalId', null, false);
  }, []);

  return (
    <Section
      sectionKey={NAVIGATION_OPTIONS.GENERAL}
      keyPrefix='terminalLink.form.sections'
      customComponent={<StyledFormikSwitch label={t('enabled')} name='enabled' />}
    >
      <DoubleColumn>
        <FormikSelect
          label={t('merchantId')}
          name='merchantId'
          options={organizations || []}
          onChange={onOrganizationChange}
          size='sm'
          loading={isLoadingScope}
        />
        <FormikSelect
          label={t('merchantTerminalId')}
          name='merchantTerminalId'
          options={merchantTerminalsOptions}
          size='sm'
          disabled={!merchantId}
        />
        <FormikSelect
          name='bankId'
          label={t('bankId')}
          loading={!pspOptions?.length && isLoadingPsp}
          options={pspOptions || []}
          onInputValueChange={searchPsp}
          onChange={onBackChange}
          size='sm'
        />
        <FormikSelect
          label={t('bankTerminalId')}
          name='bankTerminalId'
          options={banksTerminalsOptions || []}
          loading={banksTerminalsLoading}
          size='sm'
          disabled={!bankId}
        />
      </DoubleColumn>
      <FormikInput
        label={t('description')}
        placeholder={t('description')}
        name='description'
        sizeVariant='sm'
        maxLength={512}
      />
    </Section>
  );
};

export default appReactMemo(General);
