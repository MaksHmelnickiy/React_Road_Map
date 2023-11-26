import { TObject } from 'utils/types';

export type ICountryGroup = TObject & {
  countryCodes: string;
};

export interface ICountryGroupData {
  id: number;
  name: string;
  merchantId: number;
  merchantName: string;
  merchantTerminalId: number;
  merchantTerminalName: string;
  countRulesetsUse?: number;
  countryCodes: string[];
}
