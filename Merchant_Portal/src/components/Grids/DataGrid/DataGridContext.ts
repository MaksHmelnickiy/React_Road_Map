import React from 'react';

import { IFilterSetting, ISortType, TSortCallbackProps } from 'utils/types';

interface ISortContext {
  defaultSortedColumn?: string;
  filters?: Record<string, IFilterSetting>;
  disabled?: boolean;
  sort?: ISortType;
  onSort?: (config: TSortCallbackProps) => void;
}

export const DataGridContext = React.createContext<ISortContext>({});

export const useDataGridContext = () => React.useContext(DataGridContext);

export const DataGridProvider = DataGridContext.Provider;
