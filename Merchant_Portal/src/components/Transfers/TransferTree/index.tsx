import React from 'react';

import { useUpdateEffect } from '@private/hooks';

import { appReactMemo } from 'hocs';

import Column from './Column';
import { Container, StyledListHeader } from './styled';
import { IFlatTreeOption, ISelectedTreeOption, ITransferTreeData } from './types';

interface ITransferList<T extends string> extends ITransferTreeData<T> {
  iconHeader?: React.FunctionComponent;
  dataListName?: string;
  selectDataText?: string;
}

const TransferTree = <T extends string>({
  data = [],
  initialSelected = [],
  dataListName = '',
  iconHeader,
  onChange,
  iconsMap,
  parentKey,
  selectDataText = '',
}: ITransferList<T>) => {
  const [selected, setSelected] = React.useState<ISelectedTreeOption[]>(initialSelected);

  useUpdateEffect(() => {
    onChange?.(selected);
  }, [selected]);

  const onSelect = React.useCallback((item: IFlatTreeOption) => {
    const { id, name, parent, key, children } = item;

    // add/remove parent item with full access
    if (!parent) {
      setSelected((state) => {
        const childKey = children?.[0]?.key;

        const existedParentAccess = state.find((selectedItem) => selectedItem.id === id);
        // if parent exist - remove it
        if (existedParentAccess) {
          if (existedParentAccess.fullAccess) {
            return state.filter((selectedItem) => selectedItem.id !== id);
          }

          return state.map((selectedItem) => {
            if (selectedItem.id === id) {
              const newItem = {
                id,
                name,
                fullAccess: true,
              } as ISelectedTreeOption;

              if (childKey) {
                newItem[childKey] = children;
              }
              return newItem;
            }
            return selectedItem;
          });
        }

        // if parent don't exist  -  add parent with full access
        const itemToAdd = { id, name, fullAccess: true } as ISelectedTreeOption;
        if (childKey) {
          itemToAdd[childKey] = children;
        }
        return [...state, itemToAdd];
      });

      return;
    }

    setSelected((state) => {
      const existedParent = state.find((selectedItem) => selectedItem.id === parent.id);
      // if parent don't exist  -  add parent with child
      if (!existedParent) {
        const itemToAdd = {
          id: parent.id,
          name: parent.name,
          [key]: [{ id, name }],
        } as ISelectedTreeOption;
        return [...state, itemToAdd];
      }

      // if parent exist
      return state.reduce<ISelectedTreeOption[]>((prev, item) => {
        if (item.id !== parent.id) {
          prev.push(item);
        } else {
          let newParent = item;
          // parent has full Access
          if (item.fullAccess) {
            newParent = {
              id: item.id,
              name: item.name,
              [key]: parent?.children?.filter((child) => child.id !== id),
            } as ISelectedTreeOption;
            // parent includes child with id
          } else if (item[key]?.some((child) => child.id === id)) {
            newParent = {
              ...item,
              [key]: item[key].filter((child) => child.id !== id),
            };
          } else {
            newParent = {
              ...item,
              [key]: [...item[key], { id, name, key }],
            };
          }

          if (newParent.fullAccess || newParent[key].length) {
            prev.push(newParent);
          }
        }

        return prev;
      }, []);
    });
  }, []);

  return (
    <Container>
      <StyledListHeader
        title={dataListName}
        subTitle={selectDataText}
        icon={iconHeader}
      />
      <Column
        data={data}
        onSelect={onSelect}
        iconsMap={iconsMap}
        parentKey={parentKey}
        selected={selected}
      />
    </Container>
  );
};

export default appReactMemo(TransferTree);
