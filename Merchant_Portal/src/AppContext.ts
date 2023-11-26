import React from 'react';
/* eslint-disable */
export const AppContext = React.createContext({
  updateAppPalette: (newTheme: any) => {},
});

export const AppProvider = AppContext.Provider;

export const useAppContext = () => React.useContext(AppContext);
