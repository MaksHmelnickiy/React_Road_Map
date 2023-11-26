import React from 'react';
import { useTranslation } from 'react-i18next';

import { ISelectOption } from '@private/components';
import { useFormikContext } from 'formik';

import FormikSelect from 'components/Form/FormikSelect';
import { appReactMemo } from 'hocs';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { useGetDictionaries } from 'queries/data';
import AmountRow from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/FormBody/Sections/Transaction/AmountRow';
import {
  StyledSection,
  StyledSwitch,
  TwoThirdsColumnSplit,
} from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/styled';
import { IRoutingRulesetForm } from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/utils/types';

import Metadata from './Metadata';

interface ITransaction {
  currencyOptions: ISelectOption[];
}

const Transaction = ({ currencyOptions }: ITransaction) => {
  const { t } = useTranslation('translation', { keyPrefix: 'routingRuleset.form' });

  const { data: appData } = useGetDictionaries();
  const getDictionaryNaming = useGetDictionaryNaming();

  const { setFieldValue } = useFormikContext<IRoutingRulesetForm>();

  const transactionTypeOptions = React.useMemo(
    () =>
      appData?.transactionTypes?.map((type) => ({
        label: getDictionaryNaming('transactionTypes', type),
        value: type,
      })) || [],
    [appData]
  );

  const onAmountChange = (name: 'amount' | 'txAmount') =>
    React.useCallback((e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      const value = checked ? { operation: null, minValue: null, maxValue: null } : null;
      setFieldValue(`transaction.${name}`, value, false);
    }, []);

  const onAmountInEurChange = onAmountChange('amount');
  const onTxAmountChange = onAmountChange('txAmount');

  return (
    <StyledSection keyPrefix='routingRuleset.form.sections' sectionKey='transaction'>
      <TwoThirdsColumnSplit>
        <FormikSelect
          name='transaction.type'
          options={transactionTypeOptions}
          label={t(`fields.transactionType`)}
        />
        <FormikSelect
          name='transaction.txCcy'
          options={currencyOptions}
          label={t(`fields.processingCcy`)}
          multiselect
          disableCloseOnSelect
          maxVisibleMultiselectItems={5}
          disableUnselect={false}
          enableRemoveButton={false}
          inputReadOnly={false}
        />
      </TwoThirdsColumnSplit>
      <AmountRow
        name='amount'
        onToggle={onAmountInEurChange}
        label={t(`fields.amountInEur`)}
      />
      <AmountRow
        name='txAmount'
        onToggle={onTxAmountChange}
        label={t(`fields.pspAmount`)}
      />
      <Metadata />
      <TwoThirdsColumnSplit>
        <StyledSwitch
          name='excludedFromCascading'
          label={t(`fields.excludedFromCascading`)}
        />
      </TwoThirdsColumnSplit>
    </StyledSection>
  );
};

export default appReactMemo(Transaction);
