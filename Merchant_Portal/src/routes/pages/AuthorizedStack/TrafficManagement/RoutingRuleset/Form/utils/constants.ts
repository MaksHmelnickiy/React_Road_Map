import { DECIMAL_REG_EXP, INTEGER_REG_EXP } from 'constants/common';

import { IRoutingRulesetForm } from './types';

export const initialValues: IRoutingRulesetForm = {
  name: null,
  enabled: true,

  merchantId: null,
  merchantTerminalId: null,
  routingSchemaId: null,

  paymentMethod: null,
  cashierPaymentMethodCode: null,
  terminalLinkId: null,
  priority: 0,
  ratio: 10,

  paymentProviderCurrency: null,
  transaction: {
    type: null,
    txCcy: null,
    amount: null,
    txAmount: null,
    metadata: {
      exist: null,
      matches: null,
      notExist: null,
    },
    excludedFromCascading: false,
  },
  bin: null,
  customer: null,
  schedule: {
    enabled: false,
    periodsByDays: null,
  },
  stats: null,
  timer: {
    enabled: false,
    failedAttempts: {
      enabled: false,
      retryCount: null,
      recoveryPeriod: null,
    },
    processedAttempts: {
      enabled: false,
      retryCount: null,
      recoveryPeriod: null,
    },
    unlimitedProcessedAttempts: {
      enabled: false,
      validityPeriod: null,
    },
  },
};

export const NAVIGATION_LIST = [
  'newRoutingRuleset',
  'mainOperations',
  'transaction',
  'clients',
  'bin',
  'schedule',
  'customerStats',
  'timer',
];

export const HOURS_TIME_CONFIG = {
  mask: '`hh:`mm',
  hours: {
    from: 1,
    to: 23,
    maxLength: 2,
  },
  minutes: {
    from: 0,
    to: 59,
    maxLength: 2,
  },
};

export const RANGE_OPERATORS = ['bw', 'nb'];
export const AMOUNT_OPERATORS = ['lt', 'le', 'gt', 'ge', 'bw', 'nb'];

export type META_KEY_VALUES = 'exist' | 'matches' | 'notExist';
export const METADATA_KEY_OPTIONS = [
  {
    label: 'routingRuleset.metadataKeys.exist',
    value: 'exist',
  },
  {
    label: 'routingRuleset.metadataKeys.matches',
    value: 'matches',
  },
  {
    label: 'routingRuleset.metadataKeys.notExist',
    value: 'notExist',
  },
];

export const COUNTRY_OPERATORS = ['eq', 'ne'];
export const COUNTRY_GROUP_OPERATORS = ['in', 'ni'];
export const IP_GROUP_OPERATORS = ['eq', 'ne', 'in', 'ni'];

export const COUNTRY_VARIANTS_OPERATORS = {
  ip: IP_GROUP_OPERATORS,
  countryGroup: COUNTRY_GROUP_OPERATORS,
  country: COUNTRY_OPERATORS,
};

export const RELATED_COUNTRY_FIELD = {
  countryGroup: 'groupId',
  country: 'countryCode',
  ip: 'countryCodes',
};

export const CARD_NETWORKS = [
  'VISA',
  'MASTERCARD',
  'MAESTRO',
  'MIR',
  'AMEX',
  'CUP',
  'JCB',
  'DINERS',
  'DISCOVER',
  'RUPAY',
];

export const STATS_FIELDS = [
  {
    name: 'dpCount',
    regExp: INTEGER_REG_EXP,
  },
  {
    name: 'dpAmount',
    regExp: DECIMAL_REG_EXP,
  },
  {
    name: 'wdCount',
    regExp: INTEGER_REG_EXP,
  },
  {
    name: 'wdAmount',
    regExp: DECIMAL_REG_EXP,
  },
  {
    name: 'ccDpCount',
    regExp: INTEGER_REG_EXP,
  },
  {
    name: 'ccDpAmount',
    regExp: DECIMAL_REG_EXP,
  },
  {
    name: 'ccWdCount',
    regExp: INTEGER_REG_EXP,
  },
  {
    name: 'ccWdAmount',
    regExp: DECIMAL_REG_EXP,
  },
  {
    name: 'uccDpCount',
    regExp: INTEGER_REG_EXP,
  },
  {
    name: 'uccDpAmount',
    regExp: DECIMAL_REG_EXP,
  },
  {
    name: 'uccWdCount',
    regExp: INTEGER_REG_EXP,
  },
  {
    name: 'uccWdAmount',
    regExp: DECIMAL_REG_EXP,
  },
];
