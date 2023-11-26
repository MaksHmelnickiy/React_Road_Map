import React, { PropsWithChildren } from 'react';

import { IColumn } from '@private/data-grid';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { useDataGridContext } from '../DataGridContext';

import { Container, StyledArrow, StyledIconButton } from './styled';
import useGridColumnSort from './useGridColumnSort';

interface IHeaderCellData<T> {
  columns: IColumn<T>[];
  index: number;
  orderColumn?: string;
  center?: boolean;
  className?: string;
}

type THeaderCellProps<T> = PropsWithChildren<IHeaderCellData<T>>;

const HeaderCell = <T,>({
  columns,
  index,
  children,
  center,
  className,
}: THeaderCellProps<T>): React.ReactElement => {
  const { disabled } = useDataGridContext();

  const { sortIsOn, cellTitle, cellData, sortedColumn, isSortable, onClick } =
    useGridColumnSort({
      columns,
      index,
    });

  const getArrowIcon = () => {
    if (sortedColumn?.property !== cellData?.dataKey) {
      return <ICONS_MAP.LongArrowDownBold />;
    }

    if (sortIsOn) {
      return <StyledArrow $up={sortedColumn?.direction === 'ASC'} />;
    }
  };

  return (
    <Container className={className} $center={center}>
      {children || (cellTitle as string)}
      {isSortable && (
        <StyledIconButton
          variant='icon'
          size='xs'
          iconSize={12}
          startIcon={getArrowIcon()}
          isActive={sortedColumn?.property === cellData?.dataKey && sortIsOn}
          onClick={onClick}
          disabled={disabled}
        />
      )}
    </Container>
  );
};

export default appReactMemo(HeaderCell);
