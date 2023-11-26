import { ICashierSettings, ICashierSettingsData } from './types';

export const normalizeCashierSettings = (
  data: ICashierSettingsData
): ICashierSettings => {
  return {
    id: (data?.id as number) || 0,
    merchantId: (data?.merchantId as number) || 0,
    merchantName: (data?.merchantName as string) || '',
    merchantTerminalId: (data?.merchantTerminalId as number) || 0,
    merchantTerminalName: (data?.merchantTerminalName as string) || '',
    paymentMethod: (data?.paymentMethod as string) || '',
    currency: (data?.currency as string) || '',
    transactionType: (data?.transactionType as string) || '',
    minCommission: data?.minCommission as number,
    commission: data?.commission as number,
    commissionConfirmation: !!data?.commissionConfirmation,
    predefinedAmounts: {
      amount1: data?.predefinedAmounts?.amount1 as number,
      amount2: data?.predefinedAmounts?.amount2 as number,
      amount3: data?.predefinedAmounts?.amount3 as number,
    },
    defaultAmount: data?.defaultAmount as number,
    requiredFields: {
      firstName: !!data?.requiredFields?.firstName,
      lastName: !!data?.requiredFields?.lastName,
      dateOfBirth: !!data?.requiredFields?.dateOfBirth,
      gender: !!data?.requiredFields?.gender,
      email: !!data?.requiredFields?.email,
      phoneCountryCode: !!data?.requiredFields?.phoneCountryCode,
      phone: !!data?.requiredFields?.phone,
      countryCode: !!data?.requiredFields?.countryCode,
      city: !!data?.requiredFields?.city,
      address1: !!data?.requiredFields?.address1,
      postCode: !!data?.requiredFields?.postCode,
      state: !!data?.requiredFields?.state,
      currency: !!data?.requiredFields?.currency,
      personalId: !!data?.requiredFields?.personalId,
      address2: !!data?.requiredFields?.address2,
    },
    requestCardPan: !!data?.requestCardPan,
    requestAccountId: !!data?.requestAccountId,
    earlyRouting: !!data?.earlyRouting,
  };
};
