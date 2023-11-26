export enum ROUTING_RULESET_KEYS {
  ALL = 'all-routing-ruleset',
}

export enum ROUTING_RULESET_OPERATIONS {
  EQUALS = 'eq',
  NOT_EQUALS = 'ne',
  IN = 'in',
  NOT_IN = 'ni',
  LESS_THAN = 'lt',
  LESS_THAN_OR_EQUALS_TO = 'le',
  GREATER_THAN = 'gt',
  GREATER_THAN_OR_EQUAL_TO = 'ge',
  BETWEEN = 'bw',
  NOT_BETWEEN = 'nb',
}

export const ROUTING_RULESET_OPERATION_KEYS: Record<string, string> = {
  [ROUTING_RULESET_OPERATIONS.LESS_THAN]: '<',
  [ROUTING_RULESET_OPERATIONS.LESS_THAN_OR_EQUALS_TO]: '<=',
  [ROUTING_RULESET_OPERATIONS.GREATER_THAN]: '>',
  [ROUTING_RULESET_OPERATIONS.GREATER_THAN_OR_EQUAL_TO]: '>=',
};

export const UNLIMITED = 31556952000;

export const INITIAL_ON_COLUMNS_RULESETS = [
  'merchantName',
  'name',
  'merchantTerminalName',
  'cashierPaymentMethodName',
  'terminalLinkDescription',
  'priority',
  'ratio',
  'enabled',
  'transactionType',
  'amount',
  'dPCount',
  'txCcy',
  'txAmount',
  'customerCountry',
  'customerCountryGroup',
  'binCountry',
  'binRange',
  'cardNetwork',
  'paymentProviderCurrency',
  'useCurrencyConversion',
  'schedule',
  'paymentMethod',
];

export const BETWEEN_LIST_RULESETS = new Set([
  'customerCcDpAmount',
  'customerCcDpCount',
  'customerCcWdAmount',
  'customerCcWdCount',
  'customerUccDpAmount',
  'customerUccDpCount',
  'customerUccWdAmount',
  'customerUccWdCount',
  'customerDpAmount',
  'customerWdCount',
  'customerWdAmount',
  'exchangeRateAdjustment',
]);

export const HOURS_LIST_RULESETS = new Set([
  'failRecoveryPeriod',
  'processedRecoveryPeriod',
]);
