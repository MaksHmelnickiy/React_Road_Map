import React from 'react';
import { useTranslation } from 'react-i18next';

import { ISelectOption, TSelectValue } from '@private/components';
import { useFormikContext } from 'formik';

import Accordion, { IAccordionHeaderProps } from 'components/Accordion';
import FormikInput from 'components/Form/FormikInput';
import FormikSelect from 'components/Form/FormikSelect';
import { CREDIT_CARD, INTEGER_REG_EXP } from 'constants/common';
import { appReactMemo } from 'hocs';
import { useGetDictionaries } from 'queries/data';
import { useGetPaymentMethods } from 'queries/manualTransaction';
import { useGetMerchantCashierPaymentMethods } from 'queries/merchants';
import { useGetTerminalLinksList } from 'queries/terminalsLinks';
import {
  StyledSection,
  StyledSwitch,
  TripleColumn,
} from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/styled';
import { adjustmentValidator } from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/utils/helpers';

import { IRoutingRulesetForm } from '../../utils/types';

interface IPaymentProviderRow extends IAccordionHeaderProps {
  currencyOptions: ISelectOption[];
}

const PaymentProviderRow = ({ currencyOptions, openHandler }: IPaymentProviderRow) => {
  const { t } = useTranslation('translation', { keyPrefix: 'routingRuleset.form' });

  const { values, setFieldValue } = useFormikContext<IRoutingRulesetForm>();

  const { merchantTerminalId, paymentMethod } = values;

  const { data: pspOptions, isLoading: isLoadingPsp } = useGetTerminalLinksList({
    merchantTerminalId,
    paymentMethod,
  });

  const onChangeCurrency = React.useCallback((option: TSelectValue) => {
    openHandler(!!option);
    if (!option) {
      setFieldValue('paymentProviderCurrency', null, false);
    } else {
      setFieldValue('paymentProviderCurrency.useCurrencyConversion', true, false);
      setFieldValue('paymentProviderCurrency.exchangeRateAdjustment', null, false);
      setFieldValue('paymentProviderCurrency.exchangeConfirmation', true, false);
    }
  }, []);

  return (
    <TripleColumn>
      <FormikSelect
        name='terminalLinkId'
        options={pspOptions || []}
        label={t(`fields.paymentProvider`)}
        loading={isLoadingPsp}
        disabled={!merchantTerminalId || !paymentMethod}
      />
      <FormikSelect
        name='paymentProviderCurrency.currency'
        options={currencyOptions}
        label={t(`fields.paymentProviderCcy`)}
        onChange={onChangeCurrency}
      />
      <FormikInput
        name='ratio'
        label={t(`fields.ratio`)}
        regExp={INTEGER_REG_EXP}
        placeholder='10'
      />
    </TripleColumn>
  );
};

interface IMainOptions {
  currencyOptions: ISelectOption[];
}

const MainOptions = ({ currencyOptions }: IMainOptions) => {
  const { t } = useTranslation('translation', { keyPrefix: 'routingRuleset.form' });

  const { values, setFieldValue } = useFormikContext<IRoutingRulesetForm>();
  const { merchantTerminalId, paymentMethod, paymentProviderCurrency } = values;

  const { useCurrencyConversion } = paymentProviderCurrency || {};

  const { data: appData } = useGetDictionaries();

  const { data: paymentMethods, isLoading: isLoadingPaymentMethods } =
    useGetPaymentMethods({ id: merchantTerminalId });

  const { data: cashierPaymentMethods, isLoading: isLoadingCashierPaymentMethods } =
    useGetMerchantCashierPaymentMethods(merchantTerminalId);

  const paymentMethodOptions = React.useMemo(() => {
    // TODO remove
    const methods =
      paymentMethods || appData?.paymentMethod?.map((item) => item.name) || []; // TODO remove this after BE
    return (
      methods?.map((paymentMethod) => ({
        label: appData?.paymentMethodMap[paymentMethod] || paymentMethod,
        value: paymentMethod,
      })) || []
    );
  }, [paymentMethods]);

  const cashierMethodsOptions = React.useMemo(
    () =>
      cashierPaymentMethods?.map((paymentMethod) => ({
        label: paymentMethod,
        value: paymentMethod,
      })) || [],
    [cashierPaymentMethods]
  );

  const onCurrencyConversionChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      if (checked) {
        setFieldValue('paymentProviderCurrency.exchangeConfirmation', true, false);
      } else {
        setFieldValue('paymentProviderCurrency.exchangeRateAdjustment', 0, false);
        setFieldValue('paymentProviderCurrency.exchangeConfirmation', null, false);
      }
    },
    []
  );

  const onPaymentMethodChange = React.useCallback(() => {
    const creditCardSelected = paymentMethod === CREDIT_CARD;
    const value = creditCardSelected
      ? {
          range: null,
          country: null,
          countryGroup: null,
          billingInfo: false,
          cardNetwork: null,
        }
      : null;
    setFieldValue('bin', value, false);
  }, []);

  return (
    <StyledSection keyPrefix='routingRuleset.form.sections' sectionKey='mainOperations'>
      <TripleColumn>
        <FormikSelect
          name='paymentMethod'
          options={paymentMethodOptions}
          loading={isLoadingPaymentMethods}
          label={t(`fields.paymentMethod`)}
          disabled={!merchantTerminalId}
          onChange={onPaymentMethodChange}
        />
        <FormikSelect
          name='cashierPaymentMethodCode'
          options={cashierMethodsOptions}
          label={t(`fields.cashierPM`)}
          loading={isLoadingCashierPaymentMethods}
          disabled={!merchantTerminalId}
        />
        <FormikInput
          name='priority'
          label={t(`fields.priority`)}
          regExp={INTEGER_REG_EXP}
          placeholder='0'
        />
      </TripleColumn>
      <Accordion
        header={(props) => (
          <PaymentProviderRow currencyOptions={currencyOptions} {...props} />
        )}
      >
        <TripleColumn>
          <StyledSwitch
            name='paymentProviderCurrency.useCurrencyConversion'
            label={t(`fields.useCcyConvertation`)}
            onChange={onCurrencyConversionChange}
          />
          {useCurrencyConversion && (
            <>
              <FormikInput
                name='paymentProviderCurrency.exchangeRateAdjustment'
                label={t(`fields.xrAdjustment`)}
                valueValidator={adjustmentValidator}
                placeholder='0'
              />
              <StyledSwitch
                name='paymentProviderCurrency.exchangeConfirmation'
                label={t(`fields.exchangeConfirmation`)}
              />
            </>
          )}
        </TripleColumn>
      </Accordion>
    </StyledSection>
  );
};

export default appReactMemo(MainOptions);
