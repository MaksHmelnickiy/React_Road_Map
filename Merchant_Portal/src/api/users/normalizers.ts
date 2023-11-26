import {
  IUser,
  IUserData,
  IUserForm,
  IUserFormattedData,
  IUserMerchantTerminalData,
  IUsersMerchant,
} from './types';

export const normalizeUsersMerchant = (
  data: IUserMerchantTerminalData
): IUsersMerchant => {
  return {
    id: (data?.id as number) || 0,
    fullAccess: !!data?.fullAccess,
    name: (data?.name as string) || '',
    merchantTerminals: data?.merchantTerminals?.map((terminal) => ({
      id: (terminal?.id as number) || 0,
      name: (terminal?.name as string) || '',
    })),
  };
};

export const normalizeUser = (data: IUserData): IUser => {
  return {
    id: (data?.userId as string) || (data?.id as string) || '',
    enabled: !!data?.enabled,
    created: (data?.created as string) || '',
    login: (data?.login as string) || '',
    firstName: (data?.firstName as string) || '',
    lastName: (data?.lastName as string) || '',
    phoneCountryCode: (data?.phoneCountryCode as string) || '',
    phoneNumber: (data?.phoneNumber as string) || '',
    role: (data?.roleNames as string[]) || [],
    roleScope: {
      fullAccess: !!data?.roleScope?.fullAccess,
      merchants: data?.roleScope?.merchants?.map(normalizeUsersMerchant) || [],
    },
  };
};

export const formatUserFormValues = (values: IUserForm): IUserFormattedData => {
  return {
    ...values,
    scope: {
      ...values.scope,
      merchants: values.scope.merchants.map(
        ({ merchantTerminals, name: _, ...merchant }) => ({
          ...merchant,
          merchantTerminals: merchant.fullAccess
            ? undefined
            : merchantTerminals.map((terminal) => terminal.id),
        })
      ),
    },
  };
};
