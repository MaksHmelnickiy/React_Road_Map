import React from 'react';
import { useTranslation } from 'react-i18next';

import DataCell from 'components/Grids/DetailGrid/DataCell';
import {
  BlockData,
  BlockHeader,
  CellHeader,
  NoItemsContainer,
} from 'components/Grids/DetailGrid/styled';
import NoItemsFound from 'components/NoItemsFound';
import { appReactMemo } from 'hocs';

export interface IDetailGridColumn<T> {
  dataKey: keyof T;
  title: string;
  width: {
    value: number;
  };
  renderCellData?: (params: T) => React.ReactElement;
}

interface IDetailGrid<T> {
  details?: T[];
  columns: IDetailGridColumn<T>[];
}

const DetailGrid = <T,>({ details, columns }: IDetailGrid<T>) => {
  const { t } = useTranslation('translation');

  if (!details?.length) {
    return (
      <NoItemsContainer>
        <NoItemsFound title={t('common.noItemsFound')} />
      </NoItemsContainer>
    );
  }

  return (
    <>
      <BlockHeader>
        {columns.map((item, index) => (
          <CellHeader
            key={index}
            variant='bold'
            size='xs'
            flexValue={columns[index].width.value}
          >
            {columns[index].title}
          </CellHeader>
        ))}
      </BlockHeader>
      {details.map((item, index) => (
        <BlockData key={index}>
          {columns.map((column, index) => (
            <DataCell
              key={index}
              item={item}
              dataKey={column.dataKey}
              flexValue={column.width.value}
            >
              {column.renderCellData ? column.renderCellData(item) : ''}
            </DataCell>
          ))}
        </BlockData>
      ))}
    </>
  );
};

export default appReactMemo(DetailGrid);
