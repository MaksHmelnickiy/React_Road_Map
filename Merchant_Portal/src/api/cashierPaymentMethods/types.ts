import { IPaymentMethodForm } from 'routes/pages/AuthorizedStack/MerchantsSettings/PaymentMethods/PaymentMethod/Form/helpers';

export interface ICashierPaymentMethod {
  id: number;
  merchantId: number;
  merchantName: string;
  merchantTerminalId: number;
  merchantTerminalName: string;
  logoData: string;
  cashierPaymentMethodName: string;
  cashierPaymentMethodCode: string;
}

export type IPaymentMethodPayload = Omit<IPaymentMethodForm, 'organization'>;

export interface IUpdatePaymentMethod {
  id: string;
  payload: IPaymentMethodPayload;
}
