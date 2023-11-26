import React from 'react';

export interface IGroupEditContext {
  // name: string;
  changeItemState: (itemKey: string, value: unknown) => void;
  groupState: Record<string, unknown>;
}

export const GroupEditContext = React.createContext<IGroupEditContext>({
  // name: '',
  changeItemState: () => {},
  groupState: {},
});

export const GroupEditProvider = GroupEditContext.Provider;

export const useGroupEditContext = () => React.useContext(GroupEditContext);
