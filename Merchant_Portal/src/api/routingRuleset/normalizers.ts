import { TRANSACTIONS_TYPE } from 'api/transactions/contants';

import { ROUTING_RULESET_OPERATIONS } from './constants';
import { IRoutingRuleset, IRoutingRulesetData } from './types';

export const normalizeRoutingRuleset = (data: IRoutingRulesetData): IRoutingRuleset => {
  return {
    id: (data?.id as number) || 0,
    name: (data?.name as string) || '',
    merchantId: (data?.merchantId as number) || 0,
    merchantName: (data?.merchantName as string) || '',
    merchantTerminalId: (data?.merchantTerminalId as number) || 0,
    merchantTerminalName: (data?.merchantTerminalName as string) || '',
    cashierPaymentMethodName: (data?.cashierPaymentMethodName as string) || '',
    paymentMethod: (data?.paymentMethod as string) || '',
    terminalLinkId: (data?.terminalLinkId as number) || 0,
    terminalLinkDescription: (data?.terminalLinkDescription as string) || '',
    priority: data?.priority as number,
    ratio: data?.ratio as number,
    enabled: !!data?.enabled,
    transactionType: (data?.transactionType as TRANSACTIONS_TYPE) || '',
    amount: {
      currencyMerchantTerminal: (data?.amount?.currencyMerchantTerminal as string) || '',
      operation: (data?.amount?.operation as ROUTING_RULESET_OPERATIONS) || '',
      minValue: data?.amount?.minValue as number,
      maxValue: data?.amount?.maxValue as number,
    },
    txAmount: {
      operation: (data?.txAmount?.operation as ROUTING_RULESET_OPERATIONS) || '',
      minValue: data?.txAmount?.minValue as number,
      maxValue: data?.txAmount?.maxValue as number,
      currencyMerchantTerminal:
        (data?.txAmount?.currencyMerchantTerminal as string) || '',
    },
    customerCountry: {
      countryCode: (data?.customerCountry?.countryCode as string) || '',
      operation: (data?.customerCountry?.operation as ROUTING_RULESET_OPERATIONS) || '',
    },
    customerCountryGroup: {
      countryGroupName: (data?.customerCountryGroup?.countryGroupName as string) || '',
      countryGroupId: (data?.customerCountryGroup?.countryGroupId as number) || 0,
      operation:
        (data?.customerCountryGroup?.operation as ROUTING_RULESET_OPERATIONS) || '',
    },
    txCcy: (data?.txCcy as string[]) || [],
    paymentProviderCurrency: (data?.paymentProviderCurrency as string) || '',
    useCurrencyConversion: !!data?.useCurrencyConversion,
    schedule: !!data?.schedule,
    customerDpCount: data?.customerDpCount as number,
    binRange: (data?.binRange as string) || '',
    binCountry: {
      countryCode: (data?.binCountry?.countryCode as string) || '',
      operation: (data?.binCountry?.operation as ROUTING_RULESET_OPERATIONS) || '',
    },
    cardNetwork: (data?.cardNetwork as Record<string, boolean>) || {},
    metadata: {
      exist: data?.metadata?.exist as string,
      matches: data?.metadata?.matches as string,
      notExist: data?.metadata?.notExist as string,
    },
    routingSchemaName: (data?.routingSchemaName as string) || '',
    activeRoutingSchema: !!data?.activeRoutingSchema,
    excludedFromCascading: !!data?.excludedFromCascading,
    customerIp: {
      countryCodes: (data?.customerIp?.countryCodes as string[]) || [],
      operation: (data?.customerIp?.operation as ROUTING_RULESET_OPERATIONS) || '',
    },
    binCountryGroup: {
      countryGroupName: (data?.binCountryGroup?.countryGroupName as string) || '',
      countryGroupId: (data?.binCountryGroup?.countryGroupId as number) || 0,
      operation: (data?.binCountryGroup?.operation as ROUTING_RULESET_OPERATIONS) || '',
    },
    billingInfo: !!data?.billingInfo,
    failRecoveryPeriod: data?.failRecoveryPeriod as number,
    processedRetryCount: data?.processedRetryCount as number,
    processedRecoveryPeriod: data?.processedRecoveryPeriod as number,
    customerCcDpAmount: data?.customerCcDpAmount as number,
    customerCcDpCount: data?.customerCcDpCount as number,
    customerCcWdAmount: data?.customerCcWdAmount as number,
    customerCcWdCount: data?.customerCcWdCount as number,
    customerUccDpAmount: data?.customerUccDpAmount as number,
    customerUccDpCount: data?.customerUccDpCount as number,
    customerUccWdAmount: data?.customerUccWdAmount as number,
    customerUccWdCount: data?.customerUccWdCount as number,
    customerDpAmount: data?.customerDpAmount as number,
    customerWdCount: data?.customerWdCount as number,
    customerWdAmount: data?.customerWdAmount as number,
    cashierPaymentMethodCode: (data?.cashierPaymentMethodCode as string) || '',
    exchangeRateAdjustment: data?.exchangeRateAdjustment as number,
    customerDaysFromReg: data?.customerDaysFromReg as number,
    customerRegBeforeDate: (data?.customerRegBeforeDate as string) || '',
    customerDaysFromFtd: data?.customerDaysFromFtd as number,
    timerEnabled: !!data?.timerEnabled,
    failRetryCount: data?.failRetryCount as number,
  };
};
