import React from 'react';
import { useTranslation } from 'react-i18next';

import { useFormikContext } from 'formik';

import FormikInput from 'components/Form/FormikInput';
import FormikSelect from 'components/Form/FormikSelect';
import { DECIMAL_REG_EXP } from 'constants/common';
import { appReactMemo } from 'hocs';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';

import { StyledSwitch, TripleColumn, TwoThirdsColumnSplit } from '../../../styled';
import { AMOUNT_OPERATORS, RANGE_OPERATORS } from '../../../utils/constants';
import { IRoutingRulesetForm } from '../../../utils/types';

interface IAmountRow {
  name: 'amount' | 'txAmount';
  onToggle: (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  label: string;
}

const AmountRow = ({ name, onToggle, label }: IAmountRow) => {
  const { t } = useTranslation('translation', { keyPrefix: 'routingRuleset.form' });

  const getDictionaryNaming = useGetDictionaryNaming();

  const {
    values: { transaction },
    setFieldValue,
  } = useFormikContext<IRoutingRulesetForm>();

  const fieldValue = transaction[name];

  const amountOptions = React.useMemo(
    () =>
      AMOUNT_OPERATORS.map((operator) => ({
        label: getDictionaryNaming('operations', operator),
        value: operator,
      })),
    []
  );

  const onOperationChange = React.useCallback(() => {
    setFieldValue(`transaction.${name}.minValue`, null, false);
    setFieldValue(`transaction.${name}.maxValue`, null, false);
  }, []);

  const transactionAmount = transaction?.[name];
  const isRange =
    transactionAmount?.operation &&
    RANGE_OPERATORS.includes(transactionAmount?.operation);
  const Container = isRange ? TripleColumn : TwoThirdsColumnSplit;

  return (
    <TwoThirdsColumnSplit>
      <StyledSwitch name={`transaction.${name}`} label={label} onFieldChange={onToggle} />
      {fieldValue && (
        <Container>
          <FormikSelect
            name={`transaction.${name}.operation`}
            options={amountOptions}
            label={t(`fields.value`)}
            onChange={onOperationChange}
          />
          <FormikInput
            name={`transaction.${name}.minValue`}
            label={t(`fields.${isRange ? 'amountFromEur' : 'amount'}`)}
            regExp={DECIMAL_REG_EXP}
            placeholder='0'
          />
          {isRange && (
            <FormikInput
              name={`transaction.${name}.maxValue`}
              label={t(`fields.amountToEur`)}
              regExp={DECIMAL_REG_EXP}
              placeholder='0'
            />
          )}
        </Container>
      )}
    </TwoThirdsColumnSplit>
  );
};

export default appReactMemo(AmountRow);
