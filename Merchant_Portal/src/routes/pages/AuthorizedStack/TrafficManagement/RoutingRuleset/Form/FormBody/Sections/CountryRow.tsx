import React from 'react';
import { useTranslation } from 'react-i18next';

import { TSelectValue } from '@private/components';
import { useFormikContext } from 'formik';

import FormikSelect from 'components/Form/FormikSelect';
import { appReactMemo } from 'hocs';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { useGetDictionaries } from 'queries/data';
import { useGetMerchantCountryGroups } from 'queries/merchants';
import { getFormattedCountry } from 'utils/common';

import { StyledSwitch, TripleColumn } from '../../styled';
import { COUNTRY_VARIANTS_OPERATORS, RELATED_COUNTRY_FIELD } from '../../utils/constants';
import { IRoutingRulesetForm } from '../../utils/types';

interface ICountryRow {
  sectionName: 'customer' | 'bin';
  name: 'country' | 'countryGroup' | 'ip';
  label: string;
}

const CountryRow = ({ sectionName, name, label }: ICountryRow) => {
  const { t } = useTranslation('translation', { keyPrefix: 'routingRuleset.form' });

  const { values, setFieldValue } = useFormikContext<IRoutingRulesetForm>();

  const { data: appData } = useGetDictionaries();
  const getDictionaryNaming = useGetDictionaryNaming();

  const { data: countryGroups, isLoading: isLoadingCountryGroups } =
    useGetMerchantCountryGroups(values.merchantTerminalId);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const valueExist = values[sectionName]?.[name];

  const isSingleCountryGroup = name === 'countryGroup';
  const isMultiCountryGroup = name === 'ip';
  const isCountryGroup = isSingleCountryGroup || isMultiCountryGroup;
  const relatedFieldName = RELATED_COUNTRY_FIELD[name];
  const intlRelatedName = isCountryGroup ? 'countryGroup' : 'country';

  const operatorsOptions = React.useMemo(() => {
    const optionsList = COUNTRY_VARIANTS_OPERATORS[name];
    return (
      optionsList.map((operator) => ({
        label: getDictionaryNaming('operations', operator),
        value: operator,
      })) || []
    );
  }, [name]);

  const countryOptions = React.useMemo(() => {
    if (isCountryGroup) {
      return (
        countryGroups || [
          { label: 'Group 1', value: 1 },
          { label: 'Group 2', value: 2 },
          { label: 'Group 3', value: 3 },
        ]
      );
    }

    return (
      appData?.countryCode?.map((countryCode) => ({
        label: getFormattedCountry(countryCode),
        value: countryCode,
      })) || []
    );
  }, [appData?.countryCode]);

  const onSwitchToggle = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      const value = checked ? { operation: null, [relatedFieldName]: null } : null;
      setFieldValue(`${sectionName}.${name}`, value, false);
    },
    []
  );

  const onChangeOperator = React.useCallback((option: TSelectValue) => {
    if (!option) {
      setFieldValue(`${sectionName}.${name}.${relatedFieldName}`, null, false);
    }
  }, []);

  const multiSelectProps = React.useMemo(
    () =>
      isMultiCountryGroup
        ? {
            multiselect: true,
            disableCloseOnSelect: true,
            maxVisibleMultiselectItems: 2,
            disableUnselect: false,
            enableRemoveButton: false,
            inputReadOnly: false,
          }
        : {},
    []
  );

  return (
    <TripleColumn>
      <StyledSwitch
        name={`${sectionName}.${name}`}
        label={label}
        onFieldChange={onSwitchToggle}
      />
      {valueExist && (
        <>
          <FormikSelect
            name={`${sectionName}.${name}.operation`}
            options={operatorsOptions}
            label={t(`fields.value`)}
            onChange={onChangeOperator}
          />
          <FormikSelect
            {...multiSelectProps}
            name={`${sectionName}.${name}.${relatedFieldName}`}
            options={countryOptions}
            label={t(`fields.${intlRelatedName}`)}
            disabled={!valueExist.operation}
            loading={name !== 'country' && isLoadingCountryGroups}
          />
        </>
      )}
    </TripleColumn>
  );
};

export default appReactMemo(CountryRow);
