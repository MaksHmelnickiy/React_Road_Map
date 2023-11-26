import { TObject } from 'utils/types';

import {
  IActiveTheme,
  IMerchant,
  IPaletteColor,
  ITheme,
  TLayoutsKeys,
  TPermanentPalette,
} from './types';

const normalizePalette = (data: TObject): IPaletteColor => {
  return {
    name: (data?.name as string) || '',
    hue: (data?.hue as number) || 0,
    saturation: (data?.saturation as number) || 0,
  };
};

export type IThemeData = TObject & {
  palette?: TObject[] | string;
  permanentPalette?: TObject | string;
  lightnessConfig?: TObject[];
};

export const normalizeTheme = (theme: TObject): ITheme => {
  let data: IThemeData;

  try {
    data = JSON.parse((theme?.theme as string) || '');
  } catch {
    data = {} as IThemeData;
  }

  return {
    id: (theme?.id as string) || '',
    name: (theme.name as string) || '',
    layoutName: (data?.layoutName as TLayoutsKeys) || '',
    isSystem: theme?.merchantTerminalId === 'system',
    theme: (data?.theme as TObject) || {},
    palette:
      typeof data?.palette === 'string'
        ? data?.palette
        : data?.palette?.map(normalizePalette) || [],
    permanentPalette:
      typeof data?.permanentPalette === 'string'
        ? data?.permanentPalette
        : (data?.permanentPalette as TPermanentPalette) || {},
    preview: (theme?.preview as string) || '',
    createdAt: (theme?.createdAt as string) || '',
    updatedAt: (theme?.updatedAt as string) || '',
  };
};

type TMerchantData = TObject & {
  themes?: TObject[];
};

export const getSortedThemes = (themes: ITheme[], activeTheme: string): ITheme[] => {
  const sortThemes = (themes: ITheme[]) =>
    themes.sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

  const merchantActiveTheme: ITheme[] = [];
  const defaultThemes: ITheme[] = [];
  const merchantThemes: ITheme[] = [];

  themes.forEach((theme) => {
    if (theme.id === activeTheme) {
      merchantActiveTheme.push(theme);
    } else if (theme.isSystem) {
      defaultThemes.push(theme);
    } else {
      merchantThemes.push(theme);
    }
  });

  return merchantActiveTheme.concat(
    sortThemes(defaultThemes),
    sortThemes(merchantThemes)
  );
};

export function normalizeMerchant(data: TMerchantData): IMerchant {
  return {
    activeTheme: (data?.activeTheme as string) || '',
    themes: data?.themes?.map(normalizeTheme) || [],
  };
}

export function normalizeActiveTheme(data: TObject): IActiveTheme {
  return {
    activeTheme: (data?.activeTheme as string) || '',
  };
}
