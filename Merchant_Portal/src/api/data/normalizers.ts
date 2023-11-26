import { PERMISSIONS } from 'api/auth/constants';
import { IDictionaries, IResultCode, IRole, TDictionaryType } from 'api/data/types';
import {
  OPERATION_STATE,
  TRANSACTIONS_STATE,
  TRANSACTIONS_TYPE,
} from 'api/transactions/contants';
import { TObject } from 'utils/types';

export const normalizeDictionaries = (data: TDictionaryType): IDictionaries => {
  const paymentMethodMap: Record<string, string> = {};
  const paymentMethod =
    data?.paymentMethod?.map((method) => {
      const name = (method?.name as string) || '';
      const description = (method?.description as string) || '';
      if (name) {
        paymentMethodMap[name] = description;
      }
      return { name, description };
    }) || [];

  const resultCodeMap: Record<string, IResultCode> = {};
  const resultCode =
    data?.resultCode?.map((codeData) => {
      const resultCode = {
        code: (codeData?.code as string) || '',
        description: (codeData?.description as string) || '',
        message: (codeData?.message as string) || '',
      };
      resultCodeMap[resultCode.code] = resultCode;
      return resultCode;
    }) || [];

  return {
    cardBrand: (data?.cardBrand as string[]) || [],
    limitPeriodType: (data?.limitPeriodType as string[]) || [],
    clientRequiredFields: (data?.clientRequiredFields as string[]) || [],
    finalTransactionState: (data?.finalTransactionState as string[]) || [],
    parameterLevel: (data?.parameterLevel as string[]) || [],
    countryCode: (data?.countryCode as string[]) || [],
    currency: (data?.currency as string[]) || [],
    paymentMethod,
    paymentMethodMap,
    resultCode,
    resultCodeMap,
    transactionState: (data?.transactionState as TRANSACTIONS_STATE[]) || [],
    operationState: (data?.operationState as OPERATION_STATE[]) || [],
    operationType: (data?.operationType as string[]) || [],
    limitTransactionStatus: (data?.limitTransactionStatus as string[]) || [],
    apiAccessMode: (data?.apiAccessMode as string[]) || [],
    transactionType: (data?.transactionType as TRANSACTIONS_TYPE[]) || [],
    transactionTypes: (data?.transactionTypes as TRANSACTIONS_TYPE[]) || [],
    limitType: (data?.limitType as string[]) || [],
  };
};

export const normalizeRoles = (data: TObject[]): IRole[] => {
  return data?.map((roleData) => ({
    role: (roleData?.role as string) || '',
    permissions: roleData?.permissions as PERMISSIONS[],
  }));
};
