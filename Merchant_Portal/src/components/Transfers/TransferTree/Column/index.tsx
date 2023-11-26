import React from 'react';

import { useUpdateEffect } from '@private/hooks';
import { useVirtualizer } from '@tanstack/react-virtual';

import SearchInput from 'components/Controls/SearchInput';
import NoItemsFound from 'components/NoItemsFound';
import { appReactMemo } from 'hocs';

import { IFlatTreeOption, IParentOption, ISelectedTreeOption, ITreeItem } from '../types';

import { Container, ResultsContainer, TreeList, VirtualList } from './styled';
import TreeItem from './TreeItem';
import { useDeepSearchFilter } from './useFilterTree';

interface IColumn<T extends string> {
  data: ITreeItem<T>[];
  onSelect: (item: IFlatTreeOption) => void;
  iconsMap?: Record<string, React.ReactElement>;
  parentKey?: string;
  selected: ISelectedTreeOption[];
}

const Column = <T extends string>({
  data,
  onSelect,
  iconsMap,
  parentKey,
  selected,
}: IColumn<T>) => {
  const [closedItems, setClosedItems] = React.useState<Record<string, true>>({}); // { uuid: true, ...}
  const listRef = React.useRef<HTMLUListElement | null>(null);

  const {
    data: filteredData,
    searchQuery,
    filterByText,
  } = useDeepSearchFilter({ data, searchKeys: ['name'] });

  useUpdateEffect(() => {
    setClosedItems({});
    listRef.current?.scrollTo({ top: 0 });
  }, [filteredData]);

  const getFlatTree = <T extends IParentOption>(
    treeList: T[],
    key = '',
    parent?: IFlatTreeOption
  ): IFlatTreeOption[] => {
    return treeList.reduce<IFlatTreeOption[]>((prev, item) => {
      const entries = Object.entries(item);
      let normalizedItem = {
        key,
        parent,
        uuid: `${item.id}-${item.name}`,
      } as IFlatTreeOption;

      let children: IFlatTreeOption[] = [];

      entries.forEach((entry) => {
        const [key, value] = entry;
        if (Array.isArray(value)) {
          children = getFlatTree(value, key, normalizedItem) as IFlatTreeOption[];
          const parentChildren = children.map(({ id, name, key }) => ({ id, name, key }));
          normalizedItem.children = parentChildren;

          children = children.map((child) => ({
            ...child,
            parent: child.parent && { ...child.parent, children: parentChildren },
          }));
        } else {
          normalizedItem = {
            ...normalizedItem,
            [key]: value,
          };
        }
      });

      prev.push(normalizedItem, ...children);

      return prev;
    }, []);
  };

  const flatTree = React.useMemo(
    () => getFlatTree(filteredData, parentKey),
    [filteredData]
  );

  const openedFlatTree = React.useMemo(
    () =>
      flatTree.filter(
        ({ parent }) => (parent?.uuid && !closedItems[parent?.uuid]) || !parent?.uuid
      ),
    [flatTree, closedItems]
  );

  const rowVirtualizer = useVirtualizer({
    count: openedFlatTree.length,
    getScrollElement: () => listRef.current,
    estimateSize: () => 45,
    overscan: 5,
  });

  const visibilityHandler = React.useCallback((uuid: string) => {
    setClosedItems((state) => {
      if (state[uuid]) {
        const newState = { ...state };
        delete newState[uuid];
        return newState;
      }
      return { ...state, [uuid]: true };
    });
  }, []);

  const renderContent = () => {
    if (!flatTree.length) {
      return (
        <ResultsContainer>
          <NoItemsFound />
        </ResultsContainer>
      );
    }

    return (
      <TreeList ref={listRef}>
        <VirtualList
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
          }}
        >
          {rowVirtualizer.getVirtualItems().map(({ index, size, start }) => (
            <TreeItem
              key={index}
              treeItem={openedFlatTree[index]}
              closedItems={closedItems}
              visibilityHandler={visibilityHandler}
              selected={selected}
              iconsMap={iconsMap}
              onSelect={onSelect}
              searchQuery={searchQuery}
              style={{
                height: `${size}px`,
                transform: `translateY(${start}px)`,
              }}
            />
          ))}
        </VirtualList>
      </TreeList>
    );
  };

  return (
    <Container>
      <SearchInput value={searchQuery} onChange={filterByText} />
      {renderContent()}
    </Container>
  );
};

export default appReactMemo(Column);
