import React from 'react';

const SidebarContext = React.createContext<{ isOpenBar: boolean }>({
  isOpenBar: true,
});

export const SidebarProvider = SidebarContext.Provider;

export const useSidebarContext = () => React.useContext(SidebarContext);
