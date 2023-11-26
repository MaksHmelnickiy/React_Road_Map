import React from 'react';

import Button from 'components/Button';
import Checkbox from 'components/Controls/Checkbox';
import { appReactMemo } from 'hocs';

import { IFlatTreeOption, ISelectedTreeOption } from '../../types';

import { ArrowIcon, Container, IconContainer, Name, Title } from './styled';

interface ITreeItemProps {
  treeItem: IFlatTreeOption;
  closedItems: Record<string, true>;
  visibilityHandler: (uuid: string) => void;
  selected: ISelectedTreeOption[];
  iconsMap?: Record<string, React.ReactElement>;
  onSelect: (item: IFlatTreeOption) => void;
  searchQuery?: string;
  style: React.CSSProperties;
}

const TreeItem = ({
  treeItem,
  searchQuery,
  closedItems,
  visibilityHandler,
  selected,
  iconsMap,
  onSelect,
  style,
}: ITreeItemProps) => {
  const { id, name, key, uuid, parent, children } = treeItem;

  const checkboxHandler = React.useCallback((e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  }, []);

  const onChangeVisibility = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      visibilityHandler(uuid);
    },
    [uuid]
  );

  const onSelectItem = () => {
    onSelect(treeItem);
  };

  const icon = iconsMap?.[key];

  const isSelected = React.useMemo(() => {
    if (!parent) {
      return selected.some(
        (selectedItem) =>
          selectedItem.id === id && selectedItem.name === name && selectedItem.fullAccess
      );
    }

    const selectedParent = selected.find(
      (selectedItem) => selectedItem.id === parent.id && selectedItem.name === parent.name
    );

    if (selectedParent?.fullAccess) {
      return true;
    }

    if (selectedParent) {
      return selectedParent[key]?.some((child) => child.id === id && child.name === name);
    }

    return false;
  }, [selected, treeItem]);

  const isParentChildSelected = React.useMemo(
    () =>
      !!children &&
      selected.some(
        (selectedItem) =>
          selectedItem.id === treeItem.id && selectedItem.name === treeItem.name
      ),
    [selected, treeItem]
  );

  return (
    <Container
      onClick={onSelectItem}
      $isChild={!!parent}
      $isSelected={isParentChildSelected || isSelected}
      style={style}
    >
      <Title>
        <Checkbox checked={isSelected} onClick={checkboxHandler} />
        {icon && <IconContainer>{icon}</IconContainer>}
        <Name searchTerm={searchQuery}>{name}</Name>
      </Title>
      {!!children && (
        <Button
          variant='icon'
          size='xs'
          startIcon={<ArrowIcon $isOpen={!closedItems[uuid]} />}
          onClick={onChangeVisibility}
        />
      )}
    </Container>
  );
};

export default appReactMemo(TreeItem);
