import React from 'react';

import { ISelectedComponent } from 'utils/types';

export interface ISidebarState {
  [key: string]: boolean;
}

interface ISidebarContext {
  sidebarState: ISidebarState;
  componentConfig: ISelectedComponent | null;
  selectComponent: (props: ISelectedComponent) => void;
  updateHandler: (data: { key: string; value: string }) => void;
  updateSidebarState: (side: keyof ISidebarState, state: boolean) => void;
}

export const SidebarsContext = React.createContext<ISidebarContext>({
  sidebarState: { left: true, right: false },
  componentConfig: null,
  selectComponent: () => null,
  updateHandler: () => null,
  updateSidebarState: () => null,
});

export const useSidebarContext = () => React.useContext(SidebarsContext);

export const SidebarsProvider = SidebarsContext.Provider;
