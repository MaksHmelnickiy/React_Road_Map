import {
  IClient,
  IClientGeneralInfo,
  IClientPaymentMethod,
  IClientStats,
  IClientTopErrors,
  IClientTopErrorsData,
  IPaymentMethod,
} from 'api/clients/types';
import { TObject } from 'utils/types';

export const normalizeClient = (data: TObject): IClient => {
  return {
    id: (data.id as number) || 0,
    merchantTerminalId: (data.merchantTerminalId as number) || 0,
    merchantTerminalName: (data.merchantTerminalName as string) || '',
    merchantCustomerId: (data.merchantCustomerId as string) || '',
    firstName: (data.firstName as string) || '',
    lastName: (data.lastName as string) || '',
    email: (data.email as string) || '',
    registrationDate: (data.registrationDate as string) || '',
    firstTimeDepositDate: (data.firstTimeDepositDate as string) || '',
    registrationCountryCode: (data.registrationCountryCode as string) || '',
    countryCode: (data.countryCode as string) || '',
    city: (data.city as string) || '',
  };
};

export const normalizeClientGeneralInfo = (data: TObject): IClientGeneralInfo => {
  return {
    id: (data?.id as number) || 0,
    firstName: (data?.firstName as string) || '',
    lastName: (data?.lastName as string) || '',
    merchantTerminalId: (data?.merchantTerminalId as number) || 0,
    merchantTerminalName: (data?.merchantTerminalName as string) || '',
    merchantCustomerId: (data?.merchantCustomerId as string) || '',
    dateOfBirth: (data?.dateOfBirth as string) || '',
    email: (data?.email as string) || '',
    phone: (data?.phone as string) || '',
    phoneCountryCode: (data?.phoneCountryCode as string) || '',
    countryCode: (data?.countryCode as string) || '',
    city: (data?.city as string) || '',
    addressLine1: (data?.addressLine1 as string) || '',
    addressLine2: (data?.addressLine2 as string) || '',
    postalCode: (data?.postalCode as string) || '',
    terminalLinkId: (data?.terminalLinkId as number) || 0,
    terminalLinkDescription: (data?.terminalLinkDescription as string) || '',
    registrationDate: (data?.registrationDate as string) || '',
    state: (data?.state as string) || '',
  };
};

export const normalizeClientStats = (data: TObject): IClientStats => {
  return {
    id: (data?.id as number) || 0,
    depositAmount: data?.depositAmount as number,
    depositCount: data?.depositCount as number,
    depositAverageAmount: data?.depositAverageAmount as number,
    successDepositPercentage: data?.successDepositPercentage as number,
    withdrawAmount: data?.withdrawAmount as number,
    withdrawCount: data?.withdrawCount as number,
    withdrawAverageAmount: data?.withdrawAverageAmount as number,
    firstTimeDeposit: (data?.firstTimeDeposit as string) || '',
    baseCurrency: (data?.baseCurrency as string) || '',
    firstDepositTry: (data?.firstDepositTry as string) || '',
    firstTimeDepositId: (data?.firstTimeDepositId as string) || '',
  };
};

export const normalizeClientErrorsData = (data: TObject): IClientTopErrorsData => {
  return {
    errorCode: (data?.errorCode as string) || '',
    errorMessage: (data?.errorMessage as string) || '',
    count: data?.count as number,
  };
};

type IClientErrorsData = TObject & {
  listCustomerMethodErrorStats: TObject[];
};

export const normalizeClientErrors = (data: IClientErrorsData): IClientTopErrors => {
  return {
    id: (data?.id as number) || 0,
    listCustomerMethodErrorStats:
      data.listCustomerMethodErrorStats?.map(normalizeClientErrorsData) || [],
  };
};

export const normalizePaymentMethodData = (data: TObject): IPaymentMethod => {
  return {
    methodName: (data?.methodName as string) || '',
    bankName: (data?.bankName as string) || '',
    depositAmount: data?.depositAmount as number,
    depositCount: data?.depositCount as number,
    authRate: data?.authRate as number,
  };
};

type IPaymentMethodData = TObject & {
  listCustomerMethodStats: TObject[];
};

export const normalizePaymentMethod = (
  data: IPaymentMethodData
): IClientPaymentMethod => {
  return {
    id: (data?.id as number) || 0,
    baseCurrency: (data?.baseCurrency as string) || '',
    listCustomerMethodStats:
      data.listCustomerMethodStats?.map(normalizePaymentMethodData) || [],
  };
};
