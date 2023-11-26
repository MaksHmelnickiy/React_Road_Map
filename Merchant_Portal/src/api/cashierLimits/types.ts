export interface ICashierLimit {
  id: number;
  merchantId: number;
  merchantName: string;
  merchantTerminalId?: number;
  merchantTerminalName: string;
  paymentMethod: string;
  operation: string;
  countryCode: string;
  currency: string;
  minAmount?: number;
  maxAmount?: number;
}

export interface ILimitForm {
  merchantTerminalId: number | null;
  paymentMethod: string | null;
  operation: string | null;
  country: string | null;
  currency: string | null;
  minAmount: number | null;
  maxAmount: number | null;
}

export interface IEditLimitPayload {
  id: string;
  payload: ILimitForm;
}
