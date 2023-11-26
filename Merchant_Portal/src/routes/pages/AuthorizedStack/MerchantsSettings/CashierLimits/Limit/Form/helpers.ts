export enum NAVIGATION_OPTIONS {
  GENERAL = 'general',
  PAYMENT = 'payment',
  TRANSACTION = 'transaction',
}

export const defaultValues = {
  merchantTerminalId: null,
  paymentMethod: null,
  operation: null,
  country: null,
  currency: null,
  minAmount: null,
  maxAmount: null,
};
