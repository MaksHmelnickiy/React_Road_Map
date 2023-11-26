import React, { PropsWithChildren } from 'react';

import { TAG_VARIANTS } from '@private/components';

import { Container } from 'components/Grids/DataGrid/RowCell/styled';
import Tag from 'components/Tags/Tag';

import { CellName, StyledPopover, TagsBody } from './styled';

type TRowCellData<T> = {
  item: T;
  dataKey?: keyof T;
  rowIndex: number;
  bold?: boolean;
  onClick?: (item: T) => void;
  className?: string;
  entityName?: string;
  list: string[];
  renderFirstItem?: (item: string) => React.ReactElement;
  renderHiddenComponent?: (item: string, index: number) => React.ReactElement;
  countDisplayItems?: number;
  tagPrefix?: string;
};

type TRowCellProps<T> = PropsWithChildren<TRowCellData<T>>;

const MultiItemsCell = <T,>({
  item,
  rowIndex,
  onClick,
  className,
  list,
  renderFirstItem,
  renderHiddenComponent,
  countDisplayItems = 1,
  tagPrefix = '+',
}: TRowCellProps<T>): React.ReactElement => {
  const onRowClick = React.useCallback(() => {
    return onClick?.(item);
  }, [item]);

  const getHiddenItem = (name: string, index: number) => {
    if (renderHiddenComponent) {
      return React.cloneElement(renderHiddenComponent(name, index), {
        key: `${name}-${index}`,
      });
    }

    return <Tag key={`${name}-${index}`} variant={TAG_VARIANTS.PRIMARY} label={name} />;
  };

  const hiddenTags = React.useMemo(
    () => <TagsBody>{list?.slice(countDisplayItems)?.map(getHiddenItem)}</TagsBody>,
    [list]
  );

  const getVisibleItem = (value = '', index = 0) => {
    if (renderFirstItem) {
      return React.cloneElement(renderFirstItem(value), {
        key: `${value}-${index}`,
      });
    }

    return <CellName key={`${value}-${index}`}>{value}</CellName>;
  };

  const renderContent = () => {
    if (!list?.length) {
      return '-';
    }

    const visibleList = list.slice(0, countDisplayItems);

    return (
      <>
        {visibleList.length ? visibleList.map(getVisibleItem) : getVisibleItem()}
        {list.length > countDisplayItems && (
          <StyledPopover placement='bottom-start' positionGap={10} component={hiddenTags}>
            <Tag
              variant={TAG_VARIANTS.PRIMARY}
              label={`${tagPrefix}${list.length - countDisplayItems}`}
            />
          </StyledPopover>
        )}
      </>
    );
  };

  return (
    <Container
      $index={rowIndex}
      onClick={onRowClick}
      $isPointer={!!onRowClick}
      className={className}
    >
      {renderContent()}
    </Container>
  );
};

export default MultiItemsCell;
