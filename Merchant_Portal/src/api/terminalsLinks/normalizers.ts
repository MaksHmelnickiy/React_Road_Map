import { TObject } from 'utils/types';

import { TResult } from '../manualTransaction/types';
import { TRANSACTION_STATUS } from '../transactions/contants';

import {
  ITerminalGroup,
  ITerminalGroupData,
  ITerminalGroupLimits,
  ITerminalLink,
  ITerminalLinkLimit,
  ITerminalLinkParameter,
  ITerminalLinksGroups,
  ITerminalLinksLimits,
  ITerminalLinksParameters,
  ITerminalsLinks,
} from './types';

export const normalizeTerminalsLinks = (data: ITerminalsLinks): ITerminalsLinks => {
  return {
    id: (data?.id as number) || 0,
    merchantTerminal: {
      id: (data?.merchantTerminal?.id as number) || 0,
      name: (data?.merchantTerminal?.name as string) || '',
      merchant: {
        id: (data?.merchantTerminal?.merchant?.id as number) || 0,
        name: (data?.merchantTerminal?.merchant?.name as string) || '',
      },
    },
    bankTerminal: {
      id: (data?.bankTerminal?.id as number) || 0,
      name: (data?.bankTerminal?.name as string) || '',
      bank: {
        id: (data?.bankTerminal?.bank?.id as number) || 0,
        name: (data?.bankTerminal?.bank?.name as string) || '',
        paymentMethod: (data?.bankTerminal?.bank?.paymentMethod as string) || '',
      },
    },
    description: (data?.description as string) || '',
    enabled: !!data?.enabled,
    recurringEnabled: !!data?.recurringEnabled,
    webhooksEnabled: !!data?.webhooksEnabled,
    motoEnabled: !!data?.motoEnabled,
    exitIFrame: !!data?.exitIFrame,
    trusted: !!data?.trusted,
    limitsEnabled: !!data?.limitsEnabled,
  };
};

const normalizeParameters = (data: ITerminalLinkParameter): ITerminalLinkParameter => {
  return {
    id: (data?.id as number) || 0,
    name: (data?.name as string) || '',
    dataType: (data?.dataType as string) || '',
    value: (data?.value as string) || '',
  };
};

export const normalizeTerminalLink = (data: ITerminalLink): ITerminalLink => {
  return {
    id: data?.id as number,
    merchantTerminal: {
      id: (data?.merchantTerminal?.id as number) || 0,
      name: (data?.merchantTerminal?.name as string) || '',
      merchant: {
        id: (data?.merchantTerminal?.merchant?.id as number) || 0,
        name: (data?.merchantTerminal?.merchant?.name as string) || '',
      },
    },
    bankTerminal: {
      id: (data?.bankTerminal?.id as number) || 0,
      name: (data?.bankTerminal?.name as string) || '',
      bank: {
        id: (data?.bankTerminal?.bank?.id as number) || 0,
        name: (data?.bankTerminal?.bank?.name as string) || '',
        paymentMethod: (data?.bankTerminal?.bank?.paymentMethod as string) || '',
      },
    },
    paymentMethod: (data?.paymentMethod as string) || '',
    description: (data?.description as string) || '',
    enabled: !!data?.enabled,
    recurringEnabled: !!data?.recurringEnabled,
    webhooksEnabled: !!data?.webhooksEnabled,
    motoEnabled: !!data?.motoEnabled,
    exitIFrame: !!data?.exitIFrame,
    trusted: !!data?.trusted,
    limitsEnabled: !!data?.limitsEnabled,
    parameters: data?.parameters?.map(normalizeParameters) || [],
  };
};

export const normalizeTerminalLinkLimits = (data: TObject): ITerminalLinkLimit => {
  return {
    id: (data?.id as number) || 0,
    enabled: !!data?.enabled,
    limitType: (data?.limitType as string) || '',
    transactionStatus: (data?.transactionStatus as TRANSACTION_STATUS) || '',
    periodType: (data?.periodType as string) || '',
    amount: data?.amount as number,
    count: data?.count as number,
    currency: (data?.currency as string) || '',
    lastUpdated: (data?.lastUpdated as string) || '',
    uniqueInstrument: !!data?.uniqueInstrument,
    terminalLinkGroupId: (data?.terminalLinkGroupId as number) || 0,
    terminalLinkGroupName: (data?.terminalLinkGroupName as string) || '',
  };
};

const normalizeLink = (data: TObject) => {
  return {
    label: (data?.description as string) || '',
    value: (data?.id as string) || '',
  };
};

export const normalizeLinks = (data: TResult) => {
  return data?.result?.map(normalizeLink) || [];
};

export const normalizeTerminalLinksLimits = (data: TObject): ITerminalLinksLimits => {
  return {
    id: data?.id as number,
    enabled: !!data?.enabled,
    uniqueInstrument: !!data?.uniqueInstrument,
    limitType: (data?.limitType as string) || '',
    cardBrand: (data?.cardBrand as string) || '',
    amount: data?.amount as number,
    count: data?.count as number,
    currency: (data?.currency as string) || '',
    transactionStatus: (data?.transactionStatus as TRANSACTION_STATUS) || '',
    periodType: (data?.periodType as string) || '',
    lastUpdated: (data?.lastUpdated as string) || '',
    merchantName: (data?.merchantName as string) || '',
    merchantId: data?.merchantId as number,
    merchantTerminalName: (data?.merchantTerminalName as string) || '',
    merchantTerminalId: data?.merchantTerminalId as number,
    description: (data?.description as string) || '',
    terminalLinkId: data?.terminalLinkId as number,
    bankName: (data?.bankName as string) || '',
    bankId: data?.bankId as number,
    paymentMethod: (data?.paymentMethod as string) || '',
  };
};

export const normalizeTerminalLinksParameters = (
  data: TObject
): ITerminalLinksParameters => {
  return {
    paramId: data?.paramId as number,
    name: (data?.name as string) || '',
    value: (data?.value as string) || '',
    editable: !!data?.editable,
    level: (data?.level as string) || '',
    terminalLinkId: data?.terminalLinkId as number,
    terminalLinkDescription: (data?.terminalLinkDescription as string) || '',
    merchantId: data?.merchantId as number,
    merchantName: (data?.merchantName as string) || '',
    merchantTerminalId: data?.merchantTerminalId as number,
    merchantTerminalName: (data?.merchantTerminalName as string) || '',
    bankId: data?.bankId as number,
    bankName: (data?.bankName as string) || '',
    paymentMethod: (data?.paymentMethod as string) || '',
  };
};

export const normalizeTerminalLinksGroups = (
  data: ITerminalLinksGroups
): ITerminalLinksGroups => {
  return {
    merchant: {
      id: data?.merchant?.id as number,
      name: (data?.merchant?.name as string) || '',
    },
    id: (data?.id as string) || '',
    name: (data?.name as string) || '',
    limitsCount: data?.limitsCount as number,
    terminalLinksCount: data?.terminalLinksCount as number,
    enabled: !!data?.enabled,
  };
};

export const normalizeTLGroup = (data: ITerminalGroupData): ITerminalGroup => {
  return {
    id: (data?.id as number) || 0,
    name: (data?.name as string) || '',
    limitsCount: data?.limitsCount as number,
    terminalLinksCount: data?.terminalLinksCount as number,
    enabled: !!data?.enabled,
  };
};

export const normalizeTLGroupLimits = (data: TObject): ITerminalGroupLimits => {
  return {
    id: (data?.id as number) || 0,
    uniqueInstrument: !!data?.uniqueInstrument,
    limitType: (data?.limitType as string) || '',
    cardBrand: (data?.cardBrand as string) || '',
    amount: data?.amount as number,
    count: data?.count as number,
    currency: (data?.currency as string) || '',
    transactionStatus: (data?.transactionStatus as string) || '',
    periodType: (data?.periodType as string) || '',
    lastUpdated: (data?.lastUpdated as string) || '',
    enabled: !!data?.enabled,
    groupId: data?.groupId as number,
  };
};
