import { TObject } from 'utils/types';

import { IManualTransactionResponse, IRuleset, TResult } from './types';

const normalizeDescription = (data: TObject) => {
  return {
    label: (data?.description as string) || '',
    value: (data?.id as string) || '',
  };
};

export const normalizePspDescriptions = (data: TResult) => {
  return data?.result.map(normalizeDescription) || [];
};

export const normalizeRuleset = (data: TObject): IRuleset => {
  return {
    rulesetId: (data?.rulesetId as number) || 0,
    terminalLinkDescription: (data?.terminalLinkDescription as string) || '',
    rulesetEnabled: !!data?.rulesetEnabled,
  };
};

export const normalizeManualTransactionResponse = (
  data: TObject
): IManualTransactionResponse => {
  return {
    redirectLink: (data?.redirectLink as string) || '',
  };
};
