import {
  ILightnessItem,
  IPaletteColor,
  TPermanentPalette,
} from 'api/merchantTerminalThemes/types';

export interface IGridColumn {
  visible: boolean;
  order: number;
}

export interface IPageConfig {
  columns: Record<string, IGridColumn>;
}

export type IPagesConfigs = Record<string, IPageConfig>;

export interface ISavePageSettingsData {
  pageKey: string;
  settings: IPageConfig;
}

export interface IPortalUserConfig {
  settings: {
    pages: IPagesConfigs;
  };
}

export interface IUserPaletteColor extends IPaletteColor {
  config: ILightnessItem[];
}

export interface IUserTheme {
  id: string;
  palette: IUserPaletteColor[] | string;
  permanentPalette: TPermanentPalette;
  createdAt: string;
  updatedAt: string;
}

export interface IUpdateUserThemePayload {
  userId: string;
  theme: IUserTheme;
}
