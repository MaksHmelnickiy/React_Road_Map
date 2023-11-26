import { TObject } from 'utils/types';

import { ICashierLimit } from './types';

export const normalizeCashierLimit = (data: TObject): ICashierLimit => {
  return {
    id: data?.id as number,
    merchantId: data?.merchantId as number,
    merchantName: (data?.merchantName as string) || '',
    merchantTerminalId: data?.merchantTerminalId as number,
    merchantTerminalName: (data?.merchantTerminalName as string) || '',
    paymentMethod: (data?.paymentMethod as string) || '',
    operation: (data?.operation as string) || '',
    countryCode: (data?.countryCode as string) || '',
    currency: (data?.currency as string) || '',
    minAmount: data?.minAmount as number,
    maxAmount: data?.maxAmount as number,
  };
};
