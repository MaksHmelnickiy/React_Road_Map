export interface IClient {
  id: number;
  merchantTerminalId: number;
  merchantTerminalName: string;
  merchantCustomerId: string;
  firstName: string;
  lastName: string;
  email: string;
  registrationDate: string;
  firstTimeDepositDate: string;
  registrationCountryCode: string;
  countryCode: string;
  city: string;
}

export interface IClientGeneralInfo {
  id: number;
  firstName: string;
  lastName: string;
  merchantTerminalId: number;
  merchantTerminalName: string;
  merchantCustomerId: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  countryCode: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  terminalLinkId: number;
  terminalLinkDescription: string;
  registrationDate: string;
  state: string;
}

export interface IClientStats {
  id: number;
  depositAmount?: number;
  depositCount?: number;
  depositAverageAmount?: number;
  successDepositPercentage?: number;
  withdrawAmount?: number;
  withdrawCount?: number;
  withdrawAverageAmount?: number;
  firstTimeDeposit: string;
  baseCurrency: string;
  firstDepositTry: string;
  firstTimeDepositId: string;
}

export interface IClientTopErrorsData {
  errorCode: string;
  errorMessage: string;
  count?: number;
}

export interface IClientTopErrors {
  id: number;
  listCustomerMethodErrorStats: IClientTopErrorsData[];
}

export interface IPaymentMethod {
  methodName: string;
  bankName: string;
  depositAmount?: number;
  depositCount?: number;
  authRate?: number;
}

export interface IClientPaymentMethod {
  id: number;
  baseCurrency: string;
  listCustomerMethodStats: IPaymentMethod[];
}

export interface IClientForm {
  merchantTerminalId: number | null;
  merchantCustomerId: string | null;
  terminalLinkId: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  dateOfBirth: string | null;
  countryCode: string | null;
  city: string | null;
  state: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  phoneCountryCode: string | null;
  phone: string | null;
  postalCode: string | null;
  registrationDate: string | null;
}

export interface IEditClientPayload {
  id: string;
  payload: IClientForm;
}
