import { INullable, TObject } from 'utils/types';

export interface IPaymentMethodsPayload {
  id?: INullable<number | string>;
  moto?: boolean;
}

export interface ICustomer {
  merchantCustomerId: string | number | null;
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: string | null;
  email: string | null;
  phoneCountryCode: string | null;
  phone: string | null;
  registrationDate: string | null;
  countryCode: string | null;
  city: string | null;
  state: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  postalCode: string | null;
}

export interface IManualTransaction {
  merchantTerminalId: string | null;
  paymentMethod: string | null;
  amount: string | null;
  currency: string | null;
  description: string | null;
  merchantTransactionId: string | null;
  mt4Id: string | null;
  terminalLinkId: number | null;
  rulesetId: number | null;
  customer: ICustomer;
}

export interface IManualTransactionForm extends IManualTransaction {
  strategy: string | null;
}

export interface IRuleset {
  rulesetId: number;
  terminalLinkDescription: string;
  rulesetEnabled: boolean;
}

export type TResult = {
  result: TObject[];
} & TObject;

export interface IManualTransactionResponse {
  redirectLink: string;
}

export interface IPspDescriptionsPayload {
  merchantTerminalId: string | null;
  paymentMethod: string | null;
}
