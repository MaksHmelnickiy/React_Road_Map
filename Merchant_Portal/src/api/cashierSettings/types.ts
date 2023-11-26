import { TObject } from 'utils/types';

export interface ICashierAmounts {
  amount1?: number;
  amount2?: number;
  amount3?: number;
}

export interface ICashierRequiredFields {
  firstName: boolean;
  lastName: boolean;
  dateOfBirth: boolean;
  gender: boolean;
  email: boolean;
  phoneCountryCode: boolean;
  phone: boolean;
  countryCode: boolean;
  city: boolean;
  address1: boolean;
  postCode: boolean;
  state: boolean;
  currency: boolean;
  personalId: boolean;
  address2: boolean;
}

export interface ICashierSettings {
  id: number;
  merchantId: number;
  merchantName: string;
  merchantTerminalId: number;
  merchantTerminalName: string;
  paymentMethod: string;
  currency: string;
  transactionType: string;
  minCommission?: number;
  commission?: number;
  commissionConfirmation: boolean;
  predefinedAmounts: ICashierAmounts;
  defaultAmount?: number;
  requiredFields: ICashierRequiredFields;
  requestCardPan: boolean;
  requestAccountId: boolean;
  earlyRouting: boolean;
}

export type ICashierSettingsData = TObject & {
  predefinedAmounts: TObject;
  requiredFields: TObject;
};
