import { TRANSACTIONS_TYPE } from 'api/transactions/contants';
import { TObject } from 'utils/types';

export interface IPsp {
  id: number;
  name: string;
  adapterCode: string;
  paymentMethod: string;
  operation: TRANSACTIONS_TYPE[];
  enabled: boolean;
  pciDssCompliant: boolean;
  pciDssExpirationDate: string;
  refPercent: string;
  fx: string;
  gambling: string;
  cryptoExchange: string;
  notes: string;
  countryCodes: string[];
  countryGroups: string[];
  email: string;
  isPartner: boolean;
}

export type TPspData = TObject & {
  operation: string[];
  countryCodes: string;
  countryGroups: string;
};

export interface IPspDetails {
  bankConditionsBlock: IPspConditions;
  bankInfoBlock: IPspInfo;
  bankParametersBlockView: IPspParameter[];
}

export interface IPspConditions {
  isPartner: boolean;
  notes: string;
  cryptoExchange: string;
  fx: string;
  gambling: string;
  countries: string[];
  countryGroups: string[];
  refPercent: string;
}

export interface IPspInfo {
  adapterCode: string;
  adapterCodeHash: string;
  enabled: boolean;
  paymentMethod: string;
  pciDssCompliant: boolean;
  pciDssExpirationDate: string;
  id: number;
  name: string;
  email: string;
  operation: TRANSACTIONS_TYPE[];
}

interface IPspParameterVisibility {
  bankTerminal: boolean;
  terminalLink: boolean;
}

export interface IPspParameter {
  id: number;
  name: string;
  dataType: string;
  value: string;
  visibility: IPspParameterVisibility;
}

export type TPspInfo = TObject & {
  pciDssExpirationDate: string;
  operation: TRANSACTIONS_TYPE[];
};

export type IPspParameterData = TObject & {
  visibility: TObject;
};

export type IPspConditionsData = TObject & {
  countries: string;
  countryGroups: string;
};

export type TPspDetailsData = TObject & {
  bankConditionsBlock: IPspConditionsData;
  bankInfoBlock: TPspInfo;
  bankParametersBlockView: IPspParameterData[];
};
