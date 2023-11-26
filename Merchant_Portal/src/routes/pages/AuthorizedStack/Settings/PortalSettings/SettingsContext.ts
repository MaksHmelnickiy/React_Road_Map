import React from 'react';

import { TComposedPalette } from 'api/merchantTerminalThemes/types';
import { IUserPaletteColor, IUserTheme } from 'api/portalUser/types';

export interface ISettingsContext {
  userTheme: IUserTheme;
  composedPalette: TComposedPalette;
  userPalette: IUserPaletteColor[];
  updateUserTheme: (theme: IUserTheme) => void;
  activeColorIndex: number | null;
  onSelectPaletteColor: (index: number | null) => void;
}

export const SettingsContext = React.createContext<ISettingsContext>({
  userTheme: {} as IUserTheme,
  composedPalette: {},
  userPalette: [],
  updateUserTheme: () => {},
  activeColorIndex: null,
  onSelectPaletteColor: () => {},
});

export const SettingsProvider = SettingsContext.Provider;

export const useSettingsContext = () => React.useContext(SettingsContext);
