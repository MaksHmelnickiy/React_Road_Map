import React from 'react';
import { useTranslation } from 'react-i18next';

import { TSelectValue } from '@private/components';
import { useUpdateEffect } from '@private/hooks';
import { useFormikContext } from 'formik';

import { IManualTransactionForm } from 'api/manualTransaction/types';
import FormikSelect from 'components/Form/FormikSelect';
import Section from 'components/Form/FormSection';
import { appReactMemo } from 'hocs';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import {
  useGetAvailableRulesets,
  useGetPaymentMethods,
  useGetPspDescriptions,
} from 'queries/manualTransaction';
import { formErrorsExist, getFormErrors, getFormTouched } from 'utils/common';
import { QueryError } from 'utils/types';

import {
  CASHIER,
  NAVIGATION_OPTIONS,
  STRATEGY_CODES,
  STRATEGY_OPTIONS,
} from '../../helpers';
import { DoubleColumn } from '../../styled';

import Merchant from './Merchant';

const General = () => {
  const { t } = useTranslation();

  const getDictionaryNaming = useGetDictionaryNaming();

  const { values, setFieldValue, setErrors, setTouched, errors, isSubmitting } =
    useFormikContext<IManualTransactionForm>();

  const fieldsCache = React.useRef({
    rulesetId: values.rulesetId,
    terminalLinkId: values.terminalLinkId,
  });

  const { merchantTerminalId, paymentMethod, strategy, rulesetId } = values;

  const { data: paymentMethods, isLoading: isLoadingPaymentMethods } =
    useGetPaymentMethods({ id: merchantTerminalId, moto: true });

  const {
    data: pspDescriptions,
    isLoading: isLoadingDescriptions,
    fetchPspDescriptions,
  } = useGetPspDescriptions();

  const {
    mutate: getAvailableRulesets,
    data: availableRulesets,
    isLoading: isLoadingRulesets,
  } = useGetAvailableRulesets();

  const errorsExist = React.useMemo(
    () => formErrorsExist(errors, ['rulesetId', 'terminalLinkId']),
    [errors]
  );

  useUpdateEffect(() => {
    if (fieldsCache.current.rulesetId !== values.rulesetId) {
      fieldsCache.current.rulesetId = values.rulesetId;
      return;
    }
    if (
      strategy === STRATEGY_CODES.USE_SYSTEM_RULES &&
      !errorsExist &&
      !isLoadingRulesets &&
      !isSubmitting
    ) {
      getAvailableRulesets(values, {
        onError: (resp: QueryError) => {
          setErrors(
            getFormErrors({ getTranslation: t, errors: resp?.response?.data?.errors })
          );
          setTouched(getFormTouched(resp?.response?.data?.errors), false);
        },
      });
    }
  }, [errorsExist, values]);

  useUpdateEffect(() => {
    setFieldValue('terminalLinkId', null, false);
  }, [paymentMethod]);

  const onChooseStrategy = React.useCallback(
    (strategy: TSelectValue) => {
      if (!strategy) {
        return setErrors({});
      }
      if (strategy === STRATEGY_CODES.USE_SYSTEM_RULES) {
        getAvailableRulesets(values, {
          onError: (resp: QueryError) => {
            setErrors(
              getFormErrors({ getTranslation: t, errors: resp?.response?.data?.errors })
            );
            setTouched(getFormTouched(resp?.response?.data?.errors), false);
          },
        });
        setFieldValue('terminalLinkId', null, false);
      } else if (strategy === STRATEGY_CODES.USE_ROUTING) {
        setFieldValue('terminalLinkId', null, false);
        setFieldValue('rulesetId', null, false);
      } else if (strategy === STRATEGY_CODES.DIRECT) {
        if (values.merchantTerminalId && values.paymentMethod) {
          fetchPspDescriptions({
            merchantTerminalId: values.merchantTerminalId,
            paymentMethod: values.paymentMethod,
          });
        }
      }

      if (strategy !== STRATEGY_CODES.USE_SYSTEM_RULES) {
        setErrors({});
      }
    },
    [values]
  );

  const rulesetsOptions = React.useMemo(() => {
    if (rulesetId) {
      setFieldValue('rulesetId', null);
    }

    return (
      availableRulesets?.map(
        ({ terminalLinkDescription, rulesetEnabled, rulesetId }) => ({
          label: `${terminalLinkDescription}${
            rulesetEnabled ? '' : ` (${t('manualTransaction.fields.disabledOption')})`
          }`,
          value: rulesetId,
        })
      ) || []
    );
  }, [availableRulesets]);

  const optionalFiled = React.useMemo(() => {
    if (strategy === STRATEGY_CODES.USE_SYSTEM_RULES) {
      return {
        name: 'rulesetId',
        options: rulesetsOptions,
        loading: isLoadingRulesets,
        disabled: errorsExist || (rulesetsOptions && !rulesetsOptions.length),
      };
    }

    return {
      name: 'terminalLinkId',
      options: pspDescriptions || [],
      loading: isLoadingDescriptions,
      disabled: !paymentMethod || !pspDescriptions?.length,
    };
  }, [
    strategy,
    rulesetsOptions,
    pspDescriptions,
    isLoadingDescriptions,
    isLoadingRulesets,
    paymentMethod,
    pspDescriptions?.length,
    errorsExist,
  ]);

  const onMerchantChange = React.useCallback(() => {
    setFieldValue('paymentMethod', null, false);
    setFieldValue('terminalLinkId', null, false);
  }, []);

  const onPaymentMethodChange = React.useCallback(
    (paymentMethod: TSelectValue) => {
      setFieldValue('terminalLinkId', null, false);
      if (strategy && strategy !== STRATEGY_CODES.USE_SYSTEM_RULES) {
        if (merchantTerminalId && paymentMethod) {
          fetchPspDescriptions({
            merchantTerminalId,
            paymentMethod: paymentMethod as string,
          });
        }
      }
      if (paymentMethod === CASHIER) {
        setFieldValue('strategy', null, false);
      }
    },
    [strategy, merchantTerminalId]
  );

  const paymentMethodsOptions = React.useMemo(
    () =>
      paymentMethods?.map((paymentMethod) => ({
        label: getDictionaryNaming('paymentMethodMap', paymentMethod) || paymentMethod,
        value: paymentMethod,
      })) || [],
    [paymentMethods]
  );

  const onPspChange = React.useCallback(
    (selectedOption: TSelectValue) => {
      setFieldValue(optionalFiled.name, selectedOption || null, false);
    },
    [optionalFiled.name]
  );

  const renderOptionalSelect = () => {
    if (
      strategy &&
      strategy !== STRATEGY_CODES.USE_ROUTING &&
      paymentMethod !== CASHIER
    ) {
      return (
        <FormikSelect
          size='sm'
          label={t('manualTransaction.fields.psp')}
          name={optionalFiled.name}
          options={optionalFiled.options}
          disabled={optionalFiled.disabled}
          loading={optionalFiled.loading}
          onChange={onPspChange}
        />
      );
    }
  };

  return (
    <Section
      sectionKey={NAVIGATION_OPTIONS.GENERAL}
      keyPrefix='manualTransaction.sections'
    >
      <DoubleColumn>
        <Merchant onChange={onMerchantChange} />
        <FormikSelect
          label={t('manualTransaction.fields.paymentMethod')}
          name='paymentMethod'
          options={paymentMethodsOptions}
          size='sm'
          disabled={!merchantTerminalId}
          loading={isLoadingPaymentMethods}
          onChange={onPaymentMethodChange}
        />
        {paymentMethod !== CASHIER && (
          <FormikSelect
            label={t('manualTransaction.fields.strategy')}
            name='strategy'
            options={STRATEGY_OPTIONS}
            size='sm'
            onChange={onChooseStrategy}
            shouldValidate
          />
        )}
        {renderOptionalSelect()}
      </DoubleColumn>
    </Section>
  );
};

export default appReactMemo(General);
