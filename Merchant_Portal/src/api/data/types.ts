import { PERMISSIONS } from 'api/auth/constants';
import {
  OPERATION_STATE,
  TRANSACTIONS_STATE,
  TRANSACTIONS_TYPE,
} from 'api/transactions/contants';
import { TObject } from 'utils/types';

export interface IResultCode {
  code: string;
  description: string;
  message: string;
}

export interface IPaymentMethod {
  name: string;
  description: string;
}

export interface IDictionaries {
  cardBrand: string[];
  limitPeriodType: string[];
  clientRequiredFields: string[];
  finalTransactionState: string[];
  parameterLevel: string[];
  countryCode: string[];
  currency: string[];
  paymentMethod: IPaymentMethod[];
  paymentMethodMap: Record<string, string>;
  resultCode: IResultCode[];
  resultCodeMap: Record<string, IResultCode>;
  transactionState: TRANSACTIONS_STATE[];
  transactionType: TRANSACTIONS_TYPE[];
  operationState: OPERATION_STATE[];
  operationType: string[];
  limitTransactionStatus: string[];
  apiAccessMode: string[];
  transactionTypes: string[];
  limitType: string[];
}

export type IDictionariesKeys = keyof Omit<
  IDictionaries,
  'resultCodeMap' | 'paymentMethodMap'
>;

export type TDictionaryType = TObject & {
  resultCode: TObject[];
  paymentMethod: TObject[];
};

export interface IRolesParams {
  withPermissions?: boolean;
}

export interface IRole {
  role: string;
  permissions?: PERMISSIONS[];
}
