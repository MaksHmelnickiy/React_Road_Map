import React, { PropsWithChildren } from 'react';

import { CellData } from 'components/Grids/DetailGrid/DataCell/styled';

type TRowDataCell<T> = {
  item: T;
  dataKey?: keyof T;
  children?: React.ReactNode;
  flexValue?: number;
};

type TRowCellProps<T> = PropsWithChildren<TRowDataCell<T>>;

const DataCell = <T,>({
  item,
  dataKey,
  children,
  flexValue,
}: TRowCellProps<T>): React.ReactElement => {
  const cellData = dataKey && item?.[dataKey] && `${item?.[dataKey]}`;

  return (
    <CellData variant='regular' size='md' flexValue={flexValue}>
      {children || cellData}
    </CellData>
  );
};

export default DataCell;
