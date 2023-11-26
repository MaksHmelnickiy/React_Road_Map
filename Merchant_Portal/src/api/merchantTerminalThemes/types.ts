import { layouts } from '@private/payment';

import { TObject } from 'utils/types';

export type TLayoutsKeys = keyof typeof layouts;

export interface IPaletteColor {
  name: string;
  hue: number;
  saturation: number;
}

export interface ILightnessItem {
  name: number;
  lightness: number;
}

export interface IColor {
  hue: number;
  saturation: number;
}

export type TPermanentPalette = Record<string, string> | string;

export interface ITheme {
  id: string;
  name: string;
  layoutName: TLayoutsKeys;
  theme: TObject;
  palette: IPaletteColor[] | string;
  permanentPalette: TPermanentPalette;
  preview: string;
  createdAt: string;
  updatedAt: string;
  isSystem: boolean;
}

export type TComposedPalette = Record<string, string | Record<string, string>>;

export interface IMerchant {
  activeTheme: string;
  themes: ITheme[];
}

export interface ICreateThemePayload {
  id: string;
  theme: Omit<ITheme, 'id' | 'isSystem'>;
}

export interface IUpdateThemePayload {
  id: string;
  theme: ITheme;
}

export interface IActivateThemePayload {
  id: string;
  themeId?: string;
}

export interface IDeleteThemePayload {
  id: string;
  themeId: string;
}

export interface IPalettePreset {
  name: string;
  palette: IPaletteColor[];
  permanentPalette: Record<string, string>;
  isDefault: boolean;
}

export interface ILayout {
  component: unknown;
  theme: unknown;
  validation: unknown;
  config: unknown;
  lightnessConfig: ILightnessItem[];
  palettes: IPalettePreset[];
}

export interface IActiveTheme {
  activeTheme: string;
}
