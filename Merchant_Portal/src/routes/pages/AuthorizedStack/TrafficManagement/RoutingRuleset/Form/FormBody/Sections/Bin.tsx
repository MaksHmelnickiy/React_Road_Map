import React from 'react';
import { useTranslation } from 'react-i18next';
import { useIMask } from 'react-imask';

import { useFormikContext } from 'formik';

// import Input from 'components/Controls/Input';
import FormikInput from 'components/Form/FormikInput';
import FormikSelect from 'components/Form/FormikSelect';
import { appReactMemo } from 'hocs';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { useGetDictionaries } from 'queries/data';
import { CARD_NETWORKS } from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/utils/constants';

import { StyledSection, StyledSwitch, TwoThirdsColumnSplit } from '../../styled';
import { IRoutingRulesetForm } from '../../utils/types';

import CountryRow from './CountryRow';

const Bin = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'routingRuleset.form' });

  const { data: appData } = useGetDictionaries();
  const getDictionaryNaming = useGetDictionaryNaming();

  const {
    values: { bin },
    setFieldValue,
  } = useFormikContext<IRoutingRulesetForm>();

  const { billingInfo } = bin || {};

  const cardNetworkOptions = React.useMemo(
    () =>
      Object.entries<string>(CARD_NETWORKS)?.map(([_key, value]) => ({
        label: getDictionaryNaming('cardNetworks', value),
        value,
      })) || [],
    [appData?.countryCode]
  );

  const onBillingInfoChange = React.useCallback(
    (_e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      const value = checked ? [] : null;
      setFieldValue('billingInfo', value, false);
    },
    []
  );

  const { ref } = useIMask(
    {
      mask: '000000:000000',
      autofix: true,
      overwrite: true,
      placeholderChar: '0',
    },
    {
      onAccept: (maskedValue: string) => {
        setFieldValue('bin.range', maskedValue, false);
      },
    }
  );

  return (
    <StyledSection keyPrefix='routingRuleset.form.sections' sectionKey='bin'>
      <TwoThirdsColumnSplit>
        <FormikInput
          inputRef={ref}
          name='bin.range'
          label={t(`fields.range`)}
          placeholder='000000:000000'
          sizeVariant='sm'
        />
      </TwoThirdsColumnSplit>
      <CountryRow sectionName='bin' name='country' label={t(`fields.filterByCountry`)} />
      <CountryRow
        sectionName='bin'
        name='countryGroup'
        label={t(`fields.filterByCountryGroup`)}
      />
      <TwoThirdsColumnSplit>
        <StyledSwitch
          name='bin.billingInfo'
          label={t(`fields.billingInfo`)}
          onChange={onBillingInfoChange}
        />
        {billingInfo && (
          <FormikSelect
            name='bin.cardNetwork'
            options={cardNetworkOptions}
            label={t(`fields.billingInfo`)}
            multiselect
            disableCloseOnSelect
            maxVisibleMultiselectItems={4}
            disableUnselect={false}
            enableRemoveButton={false}
          />
        )}
      </TwoThirdsColumnSplit>
    </StyledSection>
  );
};

export default appReactMemo(Bin);
