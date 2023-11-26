import React, { PropsWithChildren } from 'react';

import { appReactMemo } from 'hocs';

import { Container, Text } from './styled';

type TRowCellData<T> = {
  item: T;
  dataKey?: keyof T;
  rowIndex: number;
  onClick?: (item: T) => void;
  className?: string;
  children?: React.ReactNode;
  center?: boolean;
};

type TRowCellProps<T> = PropsWithChildren<TRowCellData<T>>;

const RowCell = <T,>({
  dataKey,
  item,
  rowIndex,
  onClick,
  children,
  className,
  center,
}: TRowCellProps<T>): React.ReactElement => {
  const cellData =
    dataKey &&
    dataKey
      .toString()
      .split('.')
      .reduce((accumulator, currentValue) => accumulator[currentValue as never], item);

  const onRowClick = () => {
    return onClick?.(item);
  };

  const renderContent = () => {
    if (children) {
      return children;
    }

    if (typeof cellData !== 'object' && cellData !== '') {
      return cellData ?? '-';
    }

    return '-';
  };

  return (
    <Container
      className={className}
      $index={rowIndex}
      onClick={onRowClick}
      $center={center}
      $isPointer={!!onClick}
    >
      <Text>{renderContent() as React.ReactNode}</Text>
    </Container>
  );
};

export default appReactMemo(RowCell);
