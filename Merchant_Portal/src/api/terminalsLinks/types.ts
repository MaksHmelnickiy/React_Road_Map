import { IAllPageFilters, TObject } from 'utils/types';

import { TRANSACTION_STATUS } from '../transactions/contants';

export interface ITerminalsLinks {
  id: number;
  merchantTerminal: {
    id: number;
    name: string;
    merchant: {
      id: number;
      name: string;
    };
  };
  bankTerminal: {
    id: number;
    name: string;
    bank: {
      id: number;
      name: string;
      paymentMethod: string;
    };
  };
  description: string;
  enabled: boolean;
  recurringEnabled: boolean;
  webhooksEnabled: boolean;
  motoEnabled: boolean;
  exitIFrame: boolean;
  trusted: boolean;
  limitsEnabled: boolean;
}

export interface ITerminalLink {
  id: number;
  merchantTerminal: {
    id: number;
    name: string;
    merchant: {
      id: number;
      name: string;
    };
  };
  bankTerminal: {
    id: number;
    name: string;
    bank: {
      id: number;
      name: string;
      paymentMethod: string;
    };
  };
  paymentMethod: string;
  description: string;
  enabled: boolean;
  recurringEnabled: boolean;
  webhooksEnabled: boolean;
  motoEnabled: boolean;
  exitIFrame: boolean;
  trusted: boolean;
  limitsEnabled: boolean;
  parameters: ITerminalLinkParameter[];
}

export interface ITerminalLinkParameter {
  id: number;
  name: string;
  dataType: string;
  value: string;
}

export interface ITerminalLinkLimitData {
  id?: number;
  enabled: boolean;
  limitType: string;
  transactionStatus: TRANSACTION_STATUS;
  periodType: string;
  amount?: number;
  count?: number;
  currency: string;
  lastUpdated: string;
  uniqueInstrument: boolean;
}

export interface ITerminalLinkLimit extends ITerminalLinkLimitData {
  terminalLinkGroupId: number;
  terminalLinkGroupName: string;
}

export interface ITerminalLinksLimits extends ITerminalLinkLimitData {
  cardBrand: string;
  merchantName: string;
  merchantId: number;
  merchantTerminalName: string;
  merchantTerminalId?: number;
  description: string;
  terminalLinkId?: number;
  bankName: string;
  bankId?: number;
  paymentMethod: string;
}

export interface ITerminalLinksParameters {
  paramId?: number;
  name: string;
  value: string;
  editable: boolean;
  level: string;
  terminalLinkId?: number;
  terminalLinkDescription: string;
  merchantId?: number;
  merchantName: string;
  merchantTerminalId?: number;
  merchantTerminalName: string;
  bankId?: number;
  bankName: string;
  paymentMethod: string;
}

export interface IGetTerminalLinksPayload {
  merchantTerminalId: number | null;
  paymentMethod?: string | null;
}

export interface IGroupEditPayload {
  filters: IAllPageFilters;
  settings: Record<string, boolean | undefined>;
}

export type ITerminalGroupData = TObject & {
  merchant?: TObject;
};

export interface ITerminalGroup {
  id: number;
  name: string;
  limitsCount?: number;
  terminalLinksCount?: number;
  enabled: boolean;
}

export interface ITerminalLinkBase {
  enabled: boolean;
  threeDSEnabled: boolean;
  webhooksEnabled: boolean;
  recurringEnabled: boolean;
  trusted: boolean;
  limitsEnabled: boolean;
  exitFrame: boolean;
  motoEnabled: boolean;
}

export interface ITerminalLinkPayload extends ITerminalLinkBase {
  merchantTerminalId: number | null;
  bankTerminalId: number | null;
  description: string | null;
}

export interface ITerminalLinksGroups {
  merchant: {
    id: number;
    name: string;
  };
  id: string;
  name: string;
  limitsCount?: number;
  terminalLinksCount?: number;
  enabled: boolean;
}

export interface ITerminalGroupLimits {
  id: number;
  uniqueInstrument: boolean;
  limitType: string;
  cardBrand: string;
  amount?: number;
  count?: number;
  currency: string;
  transactionStatus: string;
  periodType: string;
  lastUpdated: string;
  enabled: boolean;
  groupId?: number;
}
