import React from 'react';

export interface IParentOption {
  id: number;
  name: string;
}

interface IParentChild extends IParentOption {
  key: string;
}

export type ISelectedTreeOption = IParentOption &
  Record<string, IParentChild[]> & {
    fullAccess: boolean;
  };

export interface IFlatTreeOption {
  id: number;
  name: string;
  key: string;
  uuid: string;
  parent?: IFlatTreeOption;
  children?: IParentChild[];
}

export type ITreeItem<T extends string> = IParentOption & Record<T, IParentOption[]>;

export interface ITransferTreeData<T extends string> {
  data?: ITreeItem<T>[];
  initialSelected?: ISelectedTreeOption[];
  onChange?: (list: ISelectedTreeOption[]) => void;
  parentKey?: string;
  iconsMap?: Record<string, React.ReactElement>;
}
