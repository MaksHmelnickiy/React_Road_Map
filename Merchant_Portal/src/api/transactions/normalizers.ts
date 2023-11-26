import {
  OPERATION_STATE,
  TRANSACTIONS_STATE,
  TRANSACTIONS_TYPE,
} from 'api/transactions/contants';
import {
  IOperationHistory,
  ITransaction,
  ITransactionCard,
  ITransactionCustomer,
  ITransactionDetails,
  ITransactionDetailsResponse,
  ITransactionOperationHistory,
  ITransactionOperationHistoryData,
  ITransactionWebhooks,
  ITransactionWebhooksData,
  IWebhook,
} from 'api/transactions/types';
import { TObject } from 'utils/types';

export const normalizeTransaction = (data: TObject): ITransaction => {
  return {
    id: (data?.id as string) || '',
    amount: (data?.amount as number) || 0,
    created: (data?.created as string) || '',
    currency: (data?.currency as string) || '',
    customerAccessToken: (data?.customerAccessToken as string) || '',
    merchantCustomerId: (data?.merchantCustomerId as string) || '',
    merchantTerminalId: (data?.merchantTerminalId as number) || 0,
    merchantTerminalName: (data?.merchantTerminalName as string) || '',
    paymentMethod: (data?.paymentMethod as string) || '',
    paymentIdentifier: (data?.paymentIdentifier as string) || '',
    state: (data?.state as string) || '',
    tokenPresence: !!data?.tokenPresence,
    type: (data?.type as TRANSACTIONS_TYPE) || '',
    merchantId: data?.merchantId as number,
    merchantName: (data?.merchantName as string) || '',
    legalEntity: (data?.legalEntity as string) || '',
    clientAccountId: (data?.clientAccountId as string) || '',
    baseCurrencyAmount: data?.baseCurrencyAmount as number,
    bankName: (data?.bankName as string) || '',
    bankResultCode: (data?.bankResultCode as string) || '',
    bankTerminal: (data?.bankTerminal as string) || '',
    bankTID: (data?.bankTID as string) || '',
    baseCurrency: (data?.baseCurrency as string) || '',
    binCountry: (data?.binCountry as string) || '',
    binCountryCode: (data?.binCountryCode as string) || '',
    cardBrand: (data?.cardBrand as string) || '',
    cascadingSchemaName: (data?.cascadingSchemaName as string) || '',
    cryptoAmount: data?.cryptoAmount as number,
    cryptoCurrency: (data?.cryptoCurrency as string) || '',
    currencyRate: data?.currencyRate as number,
    customerCountry: (data?.customerCountry as string) || '',
    customerIp: (data?.customerIp as string) || '',
    customerPersonalId: (data?.customerPersonalId as string) || '',
    depositType: (data?.depositType as string) || '',
    merchantTransactionId: (data?.merchantTransactionId as string) || '',
    moto: !!data?.moto,
    mt4Id: (data?.mt4Id as string) || '',
    original: !!data?.original,
    providerAmount: data?.providerAmount as number,
    providerCurrency: (data?.providerCurrency as string) || '',
    refTransactionId: (data?.refTransactionId as string) || '',
    refundedAmount: data?.refundedAmount as number,
    resultCode: (data?.resultCode as string) || '',
    routingRulesetId: data?.routingRulesetId as number,
    routingRulesetName: (data?.routingRulesetName as string) || '',
    routingSchemaName: (data?.routingSchemaName as string) || '',
    transactionCountry: (data?.transactionCountry as string) || '',
    updated: (data?.updated as string) || '',
    userIp: (data?.userIp as string) || '',
    userName: (data?.userName as string) || '',
  };
};

export const normalizeTransactionCard = (data: TObject): ITransactionCard => {
  return {
    id: (data?.id as string) || '',
    cardBin: (data?.cardBin as string) || '',
    cardLast4: (data?.cardLast4 as string) || '',
    cardholder: (data?.cardholder as string) || '',
    binCountryName: (data?.binCountryName as string) || '',
    expireMonth: (data?.expireMonth as number) || 0,
    expireYear: (data?.expireYear as number) || 0,
    binCountryCode: (data?.binCountryCode as string) || '',
    cardBrand: (data?.cardBrand as string) || '',
  };
};

export const normalizeTransactionCustomer = (data: TObject): ITransactionCustomer => {
  return {
    id: (data?.id as string) || '',
    firstName: (data?.firstName as string) || '',
    lastName: (data?.lastName as string) || '',
    dateOfBirth: (data?.dateOfBirth as string) || '',
    email: (data?.email as string) || '',
    phone: (data?.phone as string) || '',
    phoneCountryCode: (data?.phoneCountryCode as string) || '',
    country: (data?.country as string) || '',
    countryCode: (data?.countryCode as string) || '',
    state: (data?.state as string) || '',
    city: (data?.city as string) || '',
    addressLine1: (data?.addressLine1 as string) || '',
    addressLine2: (data?.addressLine2 as string) || '',
    postalCode: (data?.postalCode as string) || '',
    accountExternalSystemId: (data?.accountExternalSystemId as string) || '',
    registrationDate: (data?.registrationDate as string) || '',
    ipAddress: (data?.ipAddress as string) || '',
    userAgent: (data?.userAgent as string) || '',
    locale: (data?.locale as string) || '',
    customerAccessToken: (data?.customerAccessToken as string) || '',
    merchantCustomerId: (data?.merchantCustomerId as string) || '',
    customerId: (data?.customerId as string) || '',
  };
};

export const normalizeTransactionDetails = (
  data: ITransactionDetailsResponse
): ITransactionDetails => {
  return {
    basic: {
      id: (data?.basicBlock?.id as string) || '',
      referenceId: (data?.basicBlock?.referenceId as string) || '',
      merchantTerminalId: (data?.basicBlock?.merchantTerminalId as number) || 0,
      merchantTerminalName: (data?.basicBlock?.merchantTerminalName as string) || '',
      currency: (data?.basicBlock?.currency as string) || '',
      status: (data?.basicBlock?.status as string) || '',
      resolution: (data?.basicBlock?.resolution as string) || '',
      description: (data?.basicBlock?.description as string) || '',
      source: !!data?.basicBlock?.source,
      resultCode: (data?.basicBlock?.resultCode as string) || '',
      executionId: (data?.basicBlock?.executionId as string) || '',
      merchantTransactionId: (data?.basicBlock.merchantTransactionId as string) || '',
    },
    amount: {
      initialAmount: data?.amountDetailsBlock?.initialAmount as number,
      initialCurrency: (data?.amountDetailsBlock?.initialCurrency as string) || '',
      processedAmount: data?.amountDetailsBlock?.processedAmount as number,
      processedCurrency: (data?.amountDetailsBlock?.processedCurrency as string) || '',
      fee: data?.amountDetailsBlock?.fee as number,
    },
    timeline: {
      createdAt: (data?.timelineBlock?.created as string) || '',
      updatedAt: (data?.timelineBlock?.updated as string) || '',
    },
    rdp: {
      cascadingSchemeId: (data?.rdpBlock?.cascadingSchemeId as number) || 0,
      cascadingSchemeName: (data?.rdpBlock?.cascadingSchemeName as string) || '',
      pspTerminalLinkId: (data?.rdpBlock?.pspTerminalLinkId as number) || 0,
      terminalLinkDescription: (data?.rdpBlock?.terminalLinkDescription as string) || '',
      routingRulesetId: (data?.rdpBlock?.routingRulesetId as number) || 0,
      routingRulesetName: (data?.rdpBlock?.routingRulesetName as string) || '',
      routingSchemeId: (data?.rdpBlock?.routingSchemeId as number) || 0,
      routingSchemeName: (data?.rdpBlock?.routingSchemeName as string) || '',
    },
  };
};

const normalizeOperationHistory = (data: TObject): IOperationHistory => {
  return {
    id: (data?.id as number) || 0,
    created: (data?.created as string) || '',
    operationType: (data?.operationType as string) || '',
    operationState: (data?.operationState as OPERATION_STATE) || '',
    transactionState: (data?.transactionState as TRANSACTIONS_STATE) || '',
    description: (data?.description as string) || '',
    resultCode: (data?.resultCode as string) || '',
    bankMessage: (data?.bankMessage as string) || '',
    executionTime: (data?.executionTime as string) || '',
  };
};

export const normalizeTransactionOperationHistory = (
  data: ITransactionOperationHistoryData
): ITransactionOperationHistory => {
  return {
    transactionId: (data?.transactionId as string) || '',
    operationHistory: data?.operationsList?.map(normalizeOperationHistory) || [],
  };
};

const normalizerWebhooks = (data: TObject): IWebhook => {
  return {
    id: (data?.id as number) || 0,
    url: (data?.url as string) || '',
    startDate: (data?.startDate as string) || '',
    runCount: (data?.runCount as number) || 0,
    lastStartDate: (data?.lastStartDate as string) || '',
    nextRunDate: (data?.nextRunDate as string) || '',
    lastResponseCode: (data?.lastResponseCode as number) || 0,
    lastResponseBody: (data?.lastResponseBody as string) || '',
  };
};

export const normalizeTransactionWebhooks = (
  data: ITransactionWebhooksData
): ITransactionWebhooks => {
  return {
    transactionId: (data?.transactionId as string) || '',
    listWebhooks: data?.listWebhooks?.map(normalizerWebhooks) || [],
  };
};

export const normalizeEditData = <T, R>(data: R): Partial<T> => {
  const payload: TObject = {};
  Object.entries(data as TObject).forEach(([key, value]) => {
    if (value || typeof value === 'boolean') payload[key] = value;
  });
  return payload as T;
};
