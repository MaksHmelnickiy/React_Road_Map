import { TRANSACTIONS_TYPE } from 'api/transactions/contants';
import { IAllPageFilters, TObject } from 'utils/types';

import { ROUTING_RULESET_OPERATIONS } from './constants';

export interface IRoutingRulesetAmount {
  currencyMerchantTerminal: string;
  operation: ROUTING_RULESET_OPERATIONS;
  minValue?: number;
  maxValue?: number;
}

export interface IRoutingRulesetTxAmount {
  currencyMerchantTerminal: string;
  operation: ROUTING_RULESET_OPERATIONS;
  minValue?: number;
  maxValue?: number;
}

export interface IRoutingRulesetCustomerCountry {
  countryCode: string;
  operation: ROUTING_RULESET_OPERATIONS;
}

export interface IRoutingRulesetCustomerCountryGroup {
  countryGroupName: string;
  countryGroupId: number;
  operation: ROUTING_RULESET_OPERATIONS;
}

export interface IRoutingRulesetBinCountry {
  countryCode: string;
  operation: ROUTING_RULESET_OPERATIONS;
}

export interface IRoutingRulesetMetadata {
  exist?: string;
  matches?: string;
  notExist?: string;
}

export interface IRoutingRulesetCustomerIp {
  countryCodes: string[];
  operation: ROUTING_RULESET_OPERATIONS;
}

export interface IRoutingRulesetBinCountryGroup {
  countryGroupName: string;
  countryGroupId: number;
  operation: ROUTING_RULESET_OPERATIONS;
}

export interface IRoutingRuleset {
  id: number;
  name: string;
  merchantId: number;
  merchantName: string;
  merchantTerminalId: number;
  merchantTerminalName: string;
  cashierPaymentMethodName: string;
  paymentMethod: string;
  terminalLinkId: number;
  terminalLinkDescription: string;
  priority: number;
  ratio: number;
  enabled: boolean;
  transactionType: TRANSACTIONS_TYPE;
  amount: IRoutingRulesetAmount;
  txAmount: IRoutingRulesetTxAmount;
  paymentProviderCurrency: string;
  useCurrencyConversion: boolean;
  schedule: boolean;
  customerDpCount?: number;
  txCcy: string[];
  customerCountry: IRoutingRulesetCustomerCountry;
  customerCountryGroup: IRoutingRulesetCustomerCountryGroup;
  binRange: string;
  binCountry: IRoutingRulesetBinCountry;
  cardNetwork: Record<string, boolean>;
  metadata: IRoutingRulesetMetadata;
  routingSchemaName: string;
  activeRoutingSchema: boolean;
  excludedFromCascading: boolean;
  customerIp: IRoutingRulesetCustomerIp;
  binCountryGroup: IRoutingRulesetBinCountryGroup;
  billingInfo: boolean;
  failRecoveryPeriod?: number;
  processedRetryCount?: number;
  processedRecoveryPeriod?: number;
  customerCcDpAmount?: number;
  customerCcDpCount?: number;
  customerCcWdAmount?: number;
  customerCcWdCount?: number;
  customerUccDpAmount?: number;
  customerUccDpCount?: number;
  customerUccWdAmount?: number;
  customerUccWdCount?: number;
  customerDpAmount?: number;
  customerWdCount?: number;
  customerWdAmount?: number;
  cashierPaymentMethodCode: string;
  exchangeRateAdjustment?: number;
  customerDaysFromReg?: number;
  customerRegBeforeDate: string;
  customerDaysFromFtd?: number;
  timerEnabled: boolean;
  failRetryCount?: number;
}

export type IRoutingRulesetData = TObject & {
  amount: TObject;
  txAmount: TObject;
  customerCountry: TObject;
  customerCountryGroup: TObject;
  binCountry: TObject;
  metadata: IRoutingRulesetMetadata;
  customerIp: IRoutingRulesetCustomerIp;
  binCountryGroup: IRoutingRulesetBinCountryGroup;
};

export interface IRulesetsGroupEdit {
  filters: IAllPageFilters;
  settings: Record<string, unknown>;
}
