import { TObject } from 'utils/types';

export interface IPspTerminal {
  id: number;
  name: string;
  bankName: string;
  bankId: number;
  settlementType: string;
  parameters: IPspTerminalParameter[];
}

export interface IPspTerminalParameter {
  id: number;
  name: string;
  value: string;
  type: string;
}

export type ITerminalData = {
  parameters: TObject[];
} & TObject;
