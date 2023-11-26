import { TObject } from 'utils/types';

import { ICashierPaymentMethod } from './types';

export const normalizeCashierPaymentMethod = (data: TObject): ICashierPaymentMethod => {
  return {
    id: (data?.id as number) || 0,
    merchantId: (data?.merchantId as number) || 0,
    merchantName: (data?.merchantName as string) || '',
    merchantTerminalId: (data?.merchantTerminalId as number) || 0,
    merchantTerminalName: (data?.merchantTerminalName as string) || '',
    logoData: (data?.logoData as string) || '',
    cashierPaymentMethodName: (data?.cashierPaymentMethodName as string) || '',
    cashierPaymentMethodCode: (data?.cashierPaymentMethodCode as string) || '',
  };
};
