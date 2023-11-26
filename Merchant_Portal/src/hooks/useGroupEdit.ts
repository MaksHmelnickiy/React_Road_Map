import React, { useMemo } from 'react';

import { FILTRATION_TYPES } from '../constants/common';

export interface IGroupEditItems {
  group?: string;
  type?: string;
  groupEdit?: boolean;
  customComponent?: React.ReactElement;
}

interface IPropertiesList extends IGroupEditItems {
  name: string;
}

export const useGroupEdit = (items: Record<string, IGroupEditItems> | undefined) => {
  const [isBarOpen, setIsBarOpen] = React.useState(false);
  const [groupState, setGroupState] = React.useState<Record<string, unknown>>({});
  const isAllEnabled = React.useRef(false);

  const propertiesList: IPropertiesList[] = useMemo(() => {
    if (!items) {
      return [];
    }

    return Object.keys(items).map((key) => {
      const currentItem = items[key];

      return {
        name: key,
        group: currentItem.group,
        customComponent: currentItem.customComponent,
        type: currentItem.type,
      };
    });
  }, [items]);

  const clearStates = React.useCallback(() => {
    setIsBarOpen(false);
    setTimeout(() => setGroupState({}), 300);
  }, []);

  const activateItemHandler = React.useCallback((itemKey: string, type?: string) => {
    setGroupState((state) => {
      const itemValue = state[itemKey];
      if (itemValue !== undefined) {
        return {
          ...state,
          [itemKey]: undefined,
        };
      }

      return {
        ...state,
        [itemKey]: type === FILTRATION_TYPES.BOOLEAN ? true : '',
      };
    });
    isAllEnabled.current = false;
  }, []);

  const changeItemState = React.useCallback((itemKey: string, value: unknown) => {
    setGroupState((state) => ({
      ...state,
      [itemKey]: value,
    }));
  }, []);

  const enableAllHandler = React.useCallback(() => {
    if (isAllEnabled.current) {
      setGroupState({});
      isAllEnabled.current = false;
      return;
    }

    const newState = propertiesList.reduce<Record<string, boolean>>((prev, { name }) => {
      prev[name] = true;
      return prev;
    }, {});

    setGroupState(newState);
    isAllEnabled.current = true;
  }, [propertiesList]);

  return {
    propertiesList,
    isAllEnabled,
    isBarOpen,
    groupState,
    activateItemHandler,
    changeItemState,
    enableAllHandler,
    setGroupState,
    setIsBarOpen,
    clearStates,
  };
};
