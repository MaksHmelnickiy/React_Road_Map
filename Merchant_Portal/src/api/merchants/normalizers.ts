import { ISelectOption } from '@private/components';

import { IParentOption, ITreeItem } from 'components/Transfers/TransferTree/types';
import { TObject } from 'utils/types';

import {
  IMerchant,
  IMerchantDetails,
  IMerchantsScope,
  IMerchantsScopeData,
  TMerchantDetailsData,
  TMerchantNames,
} from './types';

export const normalizeMerchant = (data: TObject): IMerchant => {
  return {
    id: (data?.id as number) || 0,
    name: (data?.name as string) || '',
    merchantId: (data?.merchantId as number) || 0,
    merchantName: (data?.merchantName as string) || '',
    legalEntityId: data?.legalEntityId as number,
    legalEntityName: (data?.legalEntityName as string) || '',
    platform: (data?.platform as string) || '',
    apiAccessMode: (data?.apiAccessMode as string) || '',
    shopUrl: (data?.shopUrl as string) || '',
    created: (data?.created as string) || '',
    email: (data?.email as string) || '',
    enableCashier: !!data?.enableCashier,
    enableCascading: !!data?.enableCascading,
    useRoutingPriority: !!data?.useRoutingPriority,
    useCardToken: !!data?.useCardToken,
    preMemorisedRouting: !!data?.preMemorisedRouting,
  };
};

export const normalizeMerchantDetails = (
  data: TMerchantDetailsData
): IMerchantDetails => {
  return {
    merchantTerminalInfo: {
      id: (data?.merchantTerminalInfo?.id as number) || 0,
      name: (data?.merchantTerminalInfo?.name as string) || '',
      description: (data?.merchantTerminalInfo?.description as string) || '',
      apiAccessMode: (data?.merchantTerminalInfo?.apiAccessMode as string) || '',
      shopUrl: (data?.merchantTerminalInfo?.shopUrl as string) || '',
      webhookUrl: (data?.merchantTerminalInfo?.webhookUrl as string) || '',
      shopTitle: (data?.merchantTerminalInfo?.shopTitle as string) || '',
      merchantName: (data?.merchantTerminalInfo?.merchantName as string) || '',
      legalEntityName: (data?.merchantTerminalInfo?.legalEntityName as string) || '',
    },
    merchantTerminalStatusPageUrlConfig: {
      returnSuccessUrl:
        (data?.merchantTerminalStatusPageUrlConfig?.returnSuccessUrl as string) || '',
      returnFailureUrl:
        (data?.merchantTerminalStatusPageUrlConfig?.returnFailureUrl as string) || '',
      returnCancelUrl:
        (data?.merchantTerminalStatusPageUrlConfig?.returnCancelUrl as string) || '',
      returnHoldUrl:
        (data?.merchantTerminalStatusPageUrlConfig?.returnHoldUrl as string) || '',
      returnPayoutFailureUrl:
        (data?.merchantTerminalStatusPageUrlConfig?.returnPayoutFailureUrl as string) ||
        '',
      returnFromCashierUrl:
        (data?.merchantTerminalStatusPageUrlConfig?.returnFromCashierUrl as string) || '',
      returnInProgressUrl:
        (data?.merchantTerminalStatusPageUrlConfig?.returnInProgressUrl as string) || '',
    },
    merchantsFeatures: {
      enableCashier: !!data?.merchantsFeatures?.enableCashier,
      enableFailover: !!data?.merchantsFeatures?.enableFailover,
      preMemorisedRouting: !!data?.merchantsFeatures?.preMemorisedRouting,
      repeatWebhooks: !!data?.merchantsFeatures?.repeatWebhooks,
      useCardToken: !!data?.merchantsFeatures?.useCardToken,
      useRoutingPriority: !!data?.merchantsFeatures?.useRoutingPriority,
      useStatsForRouting: !!data?.merchantsFeatures?.useStatsForRouting,
    },
    paymentRequestRequiredFieldsView: {
      billingAddress: !!data?.paymentRequestRequiredFieldsView?.billingAddress,
      clientAddressLine1: !!data?.paymentRequestRequiredFieldsView?.clientAddressLine1,
      clientAddressLine2: !!data?.paymentRequestRequiredFieldsView?.clientAddressLine2,
      clientCity: !!data?.paymentRequestRequiredFieldsView?.clientCity,
      clientCountry: !!data?.paymentRequestRequiredFieldsView?.clientCountry,
      clientDateOfBirth: !!data?.paymentRequestRequiredFieldsView?.clientDateOfBirth,
      clientEmail: !!data?.paymentRequestRequiredFieldsView?.clientEmail,
      clientFirstName: !!data?.paymentRequestRequiredFieldsView?.clientFirstName,
      clientId: !!data?.paymentRequestRequiredFieldsView?.clientId,
      clientLastName: !!data?.paymentRequestRequiredFieldsView?.clientLastName,
      clientPhone: !!data?.paymentRequestRequiredFieldsView?.clientPhone,
      clientPostCode: !!data?.paymentRequestRequiredFieldsView?.clientPostCode,
    },
    sendWebhooksEventsView: {
      paymentCreated: !!data?.sendWebhooksEventsView?.paymentCreated,
      paymentProcessingCompleted:
        !!data?.sendWebhooksEventsView?.paymentProcessingCompleted,
      paymentRefunded: !!data?.sendWebhooksEventsView?.paymentRefunded,
      payoutProcessingCompleted:
        !!data?.sendWebhooksEventsView?.payoutProcessingCompleted,
      refundProcessingCompleted:
        !!data?.sendWebhooksEventsView?.refundProcessingCompleted,
      inProgressTimeout: data?.sendWebhooksEventsView?.inProgressTimeout as number,
    },
  };
};

export const normalizeNames = (data: TObject) => {
  return {
    label: (data?.name as string) || '',
    value: (data?.id as number) || 0,
  };
};

export const normalizeMerchantsNames = (data: TMerchantNames) => {
  return data?.listMerchantTerminalNames?.map(normalizeNames) || [];
};

const normalizeBaseTreeScopeEntity = (data: TObject): IParentOption => {
  return {
    id: (data?.id as number) || 0,
    name: (data?.name as string) || '',
  };
};

export const normalizeMerchantsTreeScope = (
  dataItem: IMerchantsScopeData
): ITreeItem<'merchantTerminals'> => {
  const baseData = normalizeBaseTreeScopeEntity(dataItem);

  return {
    ...baseData,
    merchantTerminals:
      dataItem?.merchantTerminals?.map(normalizeBaseTreeScopeEntity) || [],
  };
};

const normalizeBaseSelectScopeEntity = (data: TObject): ISelectOption => {
  return {
    label: (data?.name as string) || '',
    value: (data?.id as number) || 0,
  };
};

export const normalizeMerchantsSelectScope = (
  data?: IMerchantsScopeData[]
): IMerchantsScope => {
  const merchantsMap: IMerchantsScope['merchantsMap'] = {};

  if (!data) {
    return {
      organizations: [],
      merchantsMap,
    };
  }

  const organizations = data?.map((dataItem) => {
    const value = (dataItem?.id as number) || 0;

    if (merchantsMap[value]) {
      // eslint-disable-next-line no-console
      console.warn(
        'WARNING!!! There are several organizations with the same id in the list. It can cause unexpected bugs.'
      );
    }

    merchantsMap[value] =
      dataItem?.merchantTerminals?.map(normalizeBaseSelectScopeEntity) || [];

    return {
      label: (dataItem?.name as string) || '',
      value,
    };
  });

  return {
    organizations,
    merchantsMap,
  };
};
