import { TObject } from 'utils/types';

import { IPspTerminal, IPspTerminalParameter, ITerminalData } from './types';

const normalizePspParams = (data: TObject): IPspTerminalParameter => {
  return {
    id: (data?.id as number) || 0,
    name: (data?.name as string) || '',
    value: (data?.value as string) || '',
    type: (data?.type as string) || '',
  };
};

export const normalizeTerminals = (data: ITerminalData): IPspTerminal => {
  return {
    id: (data?.id as number) || 0,
    name: (data?.name as string) || '',
    bankName: (data?.bankName as string) || '',
    bankId: (data?.bankId as number) || 0,
    parameters: data?.parameters?.map(normalizePspParams) || [],
    settlementType: (data?.settlementType as string) || '',
  };
};
