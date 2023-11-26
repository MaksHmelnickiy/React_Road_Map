import {
  IPsp,
  IPspDetails,
  IPspParameter,
  IPspParameterData,
  TPspData,
  TPspDetailsData,
} from 'api/psp/types';
import { TRANSACTIONS_TYPE } from 'api/transactions/contants';

export const normalizePsp = (data: TPspData): IPsp => {
  return {
    id: (data?.id as number) || 0,
    name: (data?.name as string) || '',
    adapterCode: (data?.adapterCode as string) || '',
    paymentMethod: (data?.paymentMethod as string) || '',
    operation: (data?.operation as TRANSACTIONS_TYPE[]) || [],
    enabled: !!data?.enabled,
    pciDssCompliant: !!data?.pciDssCompliant,
    pciDssExpirationDate: (data?.pciDssExpirationDate as string) || '',
    refPercent: (data?.refPercent as string) || '',
    fx: (data?.fx as string) || '',
    gambling: (data?.gambling as string) || '',
    cryptoExchange: (data?.cryptoExchange as string) || '',
    notes: (data?.notes as string) || '',
    countryCodes: data?.countryCodes?.split(';') || [],
    countryGroups: data?.countryGroups?.split(';') || [],
    email: (data?.email as string) || '',
    isPartner: !!data?.isPartner,
  };
};

const normalizePspParameters = (data: IPspParameterData): IPspParameter => {
  return {
    id: (data?.id as number) || 0,
    dataType: (data?.dataType as string) || '',
    name: (data?.name as string) || '',
    value: (data?.value as string) || '',
    visibility: {
      bankTerminal: !!data?.visibility?.bankTerminal,
      terminalLink: !!data?.visibility?.terminalLink,
    },
  };
};

export const normalizePspDetails = (data: TPspDetailsData): IPspDetails => {
  return {
    bankConditionsBlock: {
      isPartner: !!data?.bankConditionsBlock?.isPartner,
      cryptoExchange: (data?.bankConditionsBlock?.cryptoExchange as string) || '',
      gambling: (data?.bankConditionsBlock?.gambling as string) || '',
      countries: data?.bankConditionsBlock?.countries?.split(';') || [],
      countryGroups: data?.bankConditionsBlock?.countryGroups?.split(';') || [],
      fx: (data?.bankConditionsBlock?.fx as string) || '',
      notes: (data?.bankConditionsBlock?.notes as string) || '',
      refPercent: (data?.bankConditionsBlock?.refPercent as string) || '',
    },
    bankInfoBlock: {
      id: (data?.bankInfoBlock?.id as number) || 0,
      name: (data?.bankInfoBlock?.name as string) || '',
      adapterCode: (data?.bankInfoBlock?.adapterCode as string) || '',
      adapterCodeHash: (data?.bankInfoBlock?.adapterCodeHash as string) || '',
      enabled: !!data?.bankInfoBlock?.enabled,
      paymentMethod: (data?.bankInfoBlock?.paymentMethod as string) || '',
      pciDssCompliant: !!data?.bankInfoBlock?.pciDssCompliant,
      email: (data?.bankInfoBlock?.email as string) || '',
      pciDssExpirationDate: data?.bankInfoBlock?.pciDssExpirationDate || '',
      operation: (data?.bankInfoBlock?.operation as TRANSACTIONS_TYPE[]) || [],
    },
    bankParametersBlockView:
      data?.bankParametersBlockView?.map(normalizePspParameters) || [],
  };
};
