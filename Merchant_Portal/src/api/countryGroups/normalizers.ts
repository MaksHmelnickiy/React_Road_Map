import { ICountryGroup, ICountryGroupData } from './types';

export const normalizeCountryGroup = (data: ICountryGroup): ICountryGroupData => {
  return {
    id: (data?.id as number) || 0,
    name: (data?.name as string) || '',
    merchantId: (data?.merchantId as number) || 0,
    merchantName: (data?.merchantName as string) || '',
    merchantTerminalId: (data?.merchantTerminalId as number) || 0,
    merchantTerminalName: (data?.merchantTerminalName as string) || '',
    countRulesetsUse: data?.countRulesetsUse as number,
    countryCodes: data?.countryCodes?.split(';') || [],
  };
};
