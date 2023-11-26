import { INullable } from 'utils/types';

export interface IPaymentProviderCurrency {
  currency: string;
  useCurrencyConversion: boolean;
  exchangeRateAdjustment: string;
  exchangeConfirmation: boolean;
}

export interface IAmount {
  operation: INullable<string>;
  minValue: INullable<string>;
  maxValue: INullable<string>;
}
export interface IMetadata {
  exist: INullable<string>;
  matches: INullable<string>;
  notExist: INullable<string>;
}
export interface ITransaction {
  type: INullable<string>;
  txCcy: INullable<string[]>;
  amount: INullable<IAmount>;
  txAmount: INullable<IAmount>;
  metadata: IMetadata;
  excludedFromCascading: boolean;
}

interface ICountry {
  operation: INullable<string>;
  countryCode: INullable<string>;
}

interface ICountryCode {
  operation: INullable<string>;
  groupId: INullable<string>;
}

export interface IBin {
  range: INullable<string>;
  country: INullable<ICountry>;
  countryGroup: INullable<ICountryCode>;
  billingInfo: boolean;
  cardNetwork: string[];
}

export interface ICustomer {
  country: INullable<ICountry>;
  countryGroup: INullable<ICountryCode>;
  daysFromReg: INullable<string>;
  regBeforeDate: INullable<string>;
  daysFromFtd: INullable<string>;
  ip: INullable<{
    operation: INullable<string>;
    countryCodes: INullable<string[]>;
  }>;
}

export interface IWeekDaySchedule {
  from: INullable<string>;
  to: INullable<string>;
}

export interface ISchedule {
  enabled: boolean;
  periodsByDays: INullable<Record<string, INullable<IWeekDaySchedule>>>;
}

export interface IStats {
  dpCount: INullable<string>;
  dpAmount: INullable<string>;
  wdCount: INullable<string>;
  wdAmount: INullable<string>;
  ccDpCount: INullable<string>;
  ccDpAmount: INullable<string>;
  ccWdCount: INullable<string>;
  ccWdAmount: INullable<string>;
  uccDpCount: INullable<string>;
  uccDpAmount: INullable<string>;
  uccWdCount: INullable<string>;
  uccWdAmount: INullable<string>;
}

export interface ITimer {
  enabled: boolean;
  failedAttempts: {
    enabled: boolean;
    retryCount: INullable<string>;
    recoveryPeriod: INullable<number>;
  };
  processedAttempts: {
    enabled: boolean;
    retryCount: INullable<string>;
    recoveryPeriod: INullable<number>;
  };
  unlimitedProcessedAttempts: {
    enabled: boolean;
    validityPeriod: INullable<number>;
  };
}

export interface IRoutingRulesetForm {
  name: INullable<string>;
  enabled: boolean;

  merchantId: INullable<number>;
  merchantTerminalId: INullable<number>;
  routingSchemaId: INullable<number>;

  paymentMethod: INullable<string>;
  cashierPaymentMethodCode: INullable<string>;
  terminalLinkId: INullable<number>;
  priority: INullable<number>;
  ratio: INullable<number>;

  paymentProviderCurrency: INullable<IPaymentProviderCurrency>;
  transaction: ITransaction;
  bin: INullable<IBin>;
  customer: INullable<ICustomer>;
  schedule: ISchedule;
  stats: INullable<IStats>;
  timer: ITimer;
}
