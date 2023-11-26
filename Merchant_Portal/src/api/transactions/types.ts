import {
  OPERATION_STATE,
  TRANSACTIONS_STATE,
  TRANSACTIONS_TYPE,
} from 'api/transactions/contants';
import { TObject } from 'utils/types';

export interface ITransaction {
  amount: number;
  created: string;
  currency: string;
  customerAccessToken: string;
  merchantCustomerId: string;
  merchantTerminalId: number;
  merchantTerminalName: string;
  paymentMethod: string;
  paymentIdentifier: string;
  state: string;
  tokenPresence: boolean;
  id: string;
  type: TRANSACTIONS_TYPE;
  merchantId: number;
  merchantName: string;
  legalEntity: string;
  clientAccountId: string;
  baseCurrencyAmount: number;
  bankName: string;
  bankResultCode: string;
  bankTerminal: string;
  bankTID: string;
  baseCurrency: string;
  binCountry: string;
  binCountryCode: string;
  cardBrand: string;
  cascadingSchemaName: string;
  cryptoAmount: number;
  cryptoCurrency: string;
  currencyRate: number;
  customerCountry: string;
  customerIp: string;
  customerPersonalId: string;
  depositType: string;
  merchantTransactionId: string;
  moto: boolean;
  mt4Id: string;
  original: boolean;
  providerAmount: number;
  providerCurrency: string;
  refTransactionId: string;
  refundedAmount: number;
  resultCode: string;
  routingRulesetId: number;
  routingRulesetName: string;
  routingSchemaName: string;
  transactionCountry: string;
  updated: string;
  userIp: string;
  userName: string;
}

export type ITransactionDetailsResponse = {
  basicBlock: TObject;
  amountDetailsBlock: TObject;
  timelineBlock: TObject;
  rdpBlock: TObject;
} & TObject;

export interface ITransactionDetails {
  basic: {
    id: string;
    referenceId: string;
    merchantTerminalId: number;
    merchantTerminalName: string;
    currency: string;
    status: string;
    resolution: string;
    description: string;
    source: boolean;
    resultCode: string;
    executionId: string;
    merchantTransactionId: string;
  };
  amount: {
    initialAmount?: number;
    initialCurrency: string;
    processedAmount?: number;
    processedCurrency: string;
    fee?: number;
  };
  timeline: {
    createdAt: string;
    updatedAt: string;
  };
  rdp: {
    cascadingSchemeId: number;
    cascadingSchemeName: string;
    pspTerminalLinkId: number;
    terminalLinkDescription: string;
    routingRulesetId: number;
    routingRulesetName: string;
    routingSchemeId: number;
    routingSchemeName: string;
  };
}

export interface ITransactionCard {
  id: string;
  cardBin: string;
  cardLast4: string;
  cardholder: string;
  binCountryName: string;
  expireMonth: number;
  expireYear: number;
  binCountryCode: string;
  cardBrand: string;
}

export interface ITransactionCustomer {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  country: string;
  countryCode: string;
  state: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  accountExternalSystemId: string;
  registrationDate: string;
  ipAddress: string;
  userAgent: string;
  locale: string;
  customerAccessToken: string;
  merchantCustomerId: string;
  customerId: string;
}

export type ITransactionOperationHistoryData = {
  operationsList: TObject[];
} & TObject;

export interface ITransactionEditData {
  state: string;
  resultCode: string | null;
  description: string;
  merchantTransactionId: string;
  bankTid: string;
  customerId: string;
  sendWebhook: boolean;
}

export interface ITransactionOperationHistory {
  transactionId: string;
  operationHistory: IOperationHistory[];
}

export interface IOperationHistory {
  id: number;
  created: string;
  operationType: string;
  operationState: OPERATION_STATE;
  transactionState: TRANSACTIONS_STATE;
  description: string;
  resultCode: string;
  bankMessage: string;
  executionTime: string;
}

export type ITransactionWebhooksData = {
  listWebhooks: TObject[];
} & TObject;

export interface ITransactionWebhooks {
  transactionId: string;
  listWebhooks: IWebhook[];
}

export interface IWebhook {
  id: number;
  url: string;
  startDate: string;
  runCount: number;
  lastStartDate: string;
  nextRunDate: string;
  lastResponseCode: number;
  lastResponseBody: string;
}
