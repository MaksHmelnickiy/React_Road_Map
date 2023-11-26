import { ISelectOption } from '@private/components';

import { TObject } from 'utils/types';

export interface IMerchant {
  id: number;
  name: string;
  merchantId: number;
  merchantName: string;
  legalEntityId?: number;
  legalEntityName: string;
  platform: string;
  apiAccessMode: string;
  shopUrl: string;
  created: string;
  email: string;
  enableCashier: boolean;
  enableCascading: boolean;
  useRoutingPriority: boolean;
  useCardToken: boolean;
  preMemorisedRouting: boolean;
}

export interface IMerchantDetails {
  merchantTerminalInfo: IMerchantInfo;
  merchantTerminalStatusPageUrlConfig: IMerchantStatusPageUrl;
  merchantsFeatures: IMerchantFeatures;
  paymentRequestRequiredFieldsView: IMerchantRequiredFields;
  sendWebhooksEventsView: IMerchantWebhooksEvents;
}

export interface IMerchantInfo {
  id: number;
  name: string;
  description: string;
  apiAccessMode: string;
  shopUrl: string;
  webhookUrl: string;
  shopTitle: string;
  merchantName: string;
  legalEntityName: string;
}

export interface IMerchantStatusPageUrl {
  returnSuccessUrl: string;
  returnFailureUrl: string;
  returnCancelUrl: string;
  returnHoldUrl: string;
  returnPayoutFailureUrl: string;
  returnFromCashierUrl: string;
  returnInProgressUrl: string;
}

export interface IMerchantFeatures {
  enableCashier: boolean;
  enableFailover: boolean;
  preMemorisedRouting: boolean;
  repeatWebhooks: boolean;
  useCardToken: boolean;
  useRoutingPriority: boolean;
  useStatsForRouting: boolean;
}

export interface IMerchantRequiredFields {
  billingAddress: boolean;
  clientAddressLine1: boolean;
  clientAddressLine2: boolean;
  clientCity: boolean;
  clientCountry: boolean;
  clientDateOfBirth: boolean;
  clientEmail: boolean;
  clientFirstName: boolean;
  clientId: boolean;
  clientLastName: boolean;
  clientPhone: boolean;
  clientPostCode: boolean;
}

export interface IMerchantWebhooksEvents {
  paymentCreated: boolean;
  paymentProcessingCompleted: boolean;
  paymentRefunded: boolean;
  payoutProcessingCompleted: boolean;
  refundProcessingCompleted: boolean;
  inProgressTimeout?: number;
}

export type TMerchantDetailsData = TObject & {
  merchantTerminalInfo: TObject;
  merchantTerminalStatusPageUrlConfig: TObject;
  merchantsFeatures: TObject;
  paymentRequestRequiredFieldsView: TObject;
  sendWebhooksEventsView: TObject;
};

export type TMerchantNames = {
  listMerchantTerminalNames: TObject[];
} & TObject;

export type IMerchantsScopeData = TObject & {
  merchantTerminals: TObject[];
};

export interface IMerchantsScope {
  organizations: ISelectOption[];
  merchantsMap: Record<string, ISelectOption[]>;
}
