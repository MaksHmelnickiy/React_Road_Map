import { ISelectedTreeOption } from 'components/Transfers/TransferTree/types';
import { TObject } from 'utils/types';

export interface IUsersMerchantTerminal {
  id: number;
  name: string;
}

export interface IUsersMerchant {
  id: number;
  fullAccess: boolean;
  name: string;
  merchantTerminals: IUsersMerchantTerminal[];
}

export interface IUser {
  id: string;
  enabled: boolean;
  created: string;
  login: string;
  firstName: string;
  lastName: string;
  phoneCountryCode: string;
  phoneNumber: string;
  role: string[];
  roleScope: {
    fullAccess: boolean;
    merchants: IUsersMerchant[];
  };
}

export type IUserMerchantTerminalData = TObject & { merchantTerminals: TObject[] };

export type IUserRoleScopeData = TObject & { merchants: IUserMerchantTerminalData[] };

export type IUserData = TObject & {
  roleScope: IUserRoleScopeData;
};

export interface IUserForm {
  id?: string;
  firstName: string | null;
  lastName: string | null;
  login: string | null;
  enabled: boolean | null;
  roleName: string[];
  phoneNumber: string | null;
  phoneCountryCode: string | null;
  scope: {
    fullAccess: boolean;
    merchants: ISelectedTreeOption[];
  };
}

export interface IUserFormattedData extends Omit<IUserForm, 'scope' | 'roleName'> {
  scope: {
    fullAccess: boolean;
    merchants: {
      fullAccess: boolean;
      merchantTerminals?: number[];
    }[];
  };
}
