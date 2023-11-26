import { ITerminalLinkPayload } from 'api/terminalsLinks/types';

export interface ITerminalLinkForm extends ITerminalLinkPayload {
  merchantId: number | null;
  bankId: number | null;
}

export enum NAVIGATION_OPTIONS {
  GENERAL = 'general',
  FEATURE = 'feature',
}

export const RADIO_FIELDS = [
  'recurringEnabled',
  'threeDSEnabled',
  'webhooksEnabled',
  'exitFrame',
  'trusted',
  'limitsEnabled',
  'motoEnabled',
];

export const initialValues: ITerminalLinkForm = {
  merchantTerminalId: null,
  bankTerminalId: null,
  description: null,
  enabled: false,
  threeDSEnabled: false,
  webhooksEnabled: false,
  recurringEnabled: false,
  trusted: false,
  limitsEnabled: false,
  exitFrame: false,
  motoEnabled: false,

  // TODO
  merchantId: null,
  bankId: null,
};
