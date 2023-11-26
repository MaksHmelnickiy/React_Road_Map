import { ILightnessItem, TPermanentPalette } from 'api/merchantTerminalThemes/types';
import { TObject } from 'utils/types';

import {
  IPageConfig,
  IPagesConfigs,
  IPortalUserConfig,
  IUserPaletteColor,
  IUserTheme,
} from './types';

type IPageSettingsData = Record<string, unknown> & {
  columns: Record<string, TObject>;
};

const normalizePageSettings = (data: IPageSettingsData): IPageConfig => {
  const normalizedColumns = Object.entries<TObject>(data?.columns || {}).map(
    ([key, data]) => [
      key,
      {
        visible: !!data?.visible,
        order: (data?.order as number) || 0,
      },
    ]
  );

  return {
    columns: Object.fromEntries(normalizedColumns),
  };
};

type IPages = Record<string, IPageSettingsData>;

const normalizePages = (data: IPages): IPagesConfigs => {
  const entries = Object.entries<IPageSettingsData>(data);

  const normalizedPageSettings: IPagesConfigs = {};

  entries?.forEach(([pageKey, settings]) => {
    if (pageKey && settings) {
      normalizedPageSettings[pageKey] = normalizePageSettings(settings);
    }
  });

  return normalizedPageSettings;
};

type IPortalUserData = TObject & {
  settings: TObject & {
    pages: IPages;
  };
};

export const normalizePortalUserConfig = (data: IPortalUserData): IPortalUserConfig => {
  return {
    settings: {
      pages: normalizePages(data?.settings?.pages || {}) || {},
    },
  };
};

const normalizePaletteColorConfig = (data: TObject): ILightnessItem => {
  return {
    name: (data?.name as number) || 0,
    lightness: (data?.lightness as number) || 0,
  };
};

type IPaletteType = TObject & {
  config: TObject[];
};

const normalizePalette = (data: IPaletteType): IUserPaletteColor => {
  return {
    name: (data?.name as string) || '',
    hue: (data?.hue as number) || 0,
    saturation: (data?.saturation as number) || 0,
    config: data.config.map(normalizePaletteColorConfig) || [],
  };
};

export type IThemeData = TObject & {
  palette?: IPaletteType[] | string;
  permanentPalette?: TObject | string;
};

export const normalizeUserTheme = (data: IThemeData): IUserTheme => {
  return {
    id: (data?.id as string) || '',
    palette:
      typeof data?.palette === 'string'
        ? data?.palette
        : data?.palette?.map(normalizePalette) || [],
    permanentPalette:
      typeof data?.permanentPalette === 'string'
        ? data?.permanentPalette
        : (data?.permanentPalette as TPermanentPalette) || {},
    createdAt: (data?.createdAt as string) || '',
    updatedAt: (data?.updatedAt as string) || '',
  };
};
