import {
  baseLightnessConfig,
  basePermanentConfig,
  royalBluePaletteConfig,
  surfaceLightnessConfig,
} from 'constants/defaultPalette';

export const ripeLemonPaletteConfig = [
  {
    name: 'primary',
    hue: 52,
    saturation: 60,
    config: baseLightnessConfig,
  },
  {
    name: 'secondary',
    hue: 260,
    saturation: 32,
    config: baseLightnessConfig,
  },
  {
    name: 'tertiary',
    hue: 52,
    saturation: 10,
    config: baseLightnessConfig,
  },
  {
    name: 'error',
    hue: 15,
    saturation: 40,
    config: baseLightnessConfig,
  },
  {
    name: 'success',
    hue: 140,
    saturation: 70,
    config: baseLightnessConfig,
  },
  {
    name: 'warning',
    hue: 44,
    saturation: 60,
    config: baseLightnessConfig,
  },
  {
    name: 'neutral',
    hue: 52,
    saturation: 10,
    config: baseLightnessConfig,
  },
  {
    name: 'surface',
    hue: 52,
    saturation: 10,
    config: surfaceLightnessConfig,
  },
];

export const atlantisPaletteConfig = [
  {
    name: 'primary',
    hue: 100,
    saturation: 60,
    config: baseLightnessConfig,
  },
  {
    name: 'secondary',
    hue: 223,
    saturation: 60,
    config: baseLightnessConfig,
  },
  {
    name: 'tertiary',
    hue: 100,
    saturation: 10,
    config: baseLightnessConfig,
  },
  {
    name: 'error',
    hue: 16,
    saturation: 60,
    config: baseLightnessConfig,
  },
  {
    name: 'success',
    hue: 81,
    saturation: 40,
    config: baseLightnessConfig,
  },
  {
    name: 'warning',
    hue: 45,
    saturation: 60,
    config: baseLightnessConfig,
  },
  {
    name: 'neutral',
    hue: 100,
    saturation: 2,
    config: baseLightnessConfig,
  },
  {
    name: 'surface',
    hue: 100,
    saturation: 8,
    config: surfaceLightnessConfig,
  },
];

export const valenciaPaletteConfig = [
  {
    name: 'primary',
    hue: 6,
    saturation: 50,
    config: baseLightnessConfig,
  },
  {
    name: 'secondary',
    hue: 292,
    saturation: 10,
    config: baseLightnessConfig,
  },
  {
    name: 'tertiary',
    hue: 6,
    saturation: 28,
    config: baseLightnessConfig,
  },
  {
    name: 'error',
    hue: 346,
    saturation: 40,
    config: baseLightnessConfig,
  },
  {
    name: 'success',
    hue: 140,
    saturation: 40,
    config: baseLightnessConfig,
  },
  {
    name: 'warning',
    hue: 63,
    saturation: 60,
    config: baseLightnessConfig,
  },
  {
    name: 'neutral',
    hue: 6,
    saturation: 10,
    config: baseLightnessConfig,
  },
  {
    name: 'surface',
    hue: 6,
    saturation: 8,
    config: surfaceLightnessConfig,
  },
];

export const studioPaletteConfig = [
  {
    name: 'primary',
    hue: 259,
    saturation: 50,
    config: baseLightnessConfig,
  },
  {
    name: 'secondary',
    hue: 37,
    saturation: 50,
    config: baseLightnessConfig,
  },
  {
    name: 'tertiary',
    hue: 259,
    saturation: 28,
    config: baseLightnessConfig,
  },
  {
    name: 'error',
    hue: 346,
    saturation: 40,
    config: baseLightnessConfig,
  },
  {
    name: 'success',
    hue: 165,
    saturation: 40,
    config: baseLightnessConfig,
  },
  {
    name: 'warning',
    hue: 45,
    saturation: 60,
    config: baseLightnessConfig,
  },
  {
    name: 'neutral',
    hue: 259,
    saturation: 10,
    config: baseLightnessConfig,
  },
  {
    name: 'surface',
    hue: 259,
    saturation: 8,
    config: surfaceLightnessConfig,
  },
];

export const purpleHeartPaletteConfig = [
  {
    name: 'primary',
    hue: 280,
    saturation: 70,
    config: baseLightnessConfig,
  },
  {
    name: 'secondary',
    hue: 171,
    saturation: 50,
    config: baseLightnessConfig,
  },
  {
    name: 'tertiary',
    hue: 280,
    saturation: 28,
    config: baseLightnessConfig,
  },
  {
    name: 'error',
    hue: 346,
    saturation: 40,
    config: baseLightnessConfig,
  },
  {
    name: 'success',
    hue: 165,
    saturation: 40,
    config: baseLightnessConfig,
  },
  {
    name: 'warning',
    hue: 45,
    saturation: 60,
    config: baseLightnessConfig,
  },
  {
    name: 'neutral',
    hue: 280,
    saturation: 10,
    config: baseLightnessConfig,
  },
  {
    name: 'surface',
    hue: 280,
    saturation: 1,
    config: surfaceLightnessConfig,
  },
];

export const settingsPalette = [
  {
    name: 'Royal Blue',
    palette: royalBluePaletteConfig,
    permanentPalette: basePermanentConfig,
    isDefault: true,
  },
  {
    name: 'Ripe Lemon',
    palette: ripeLemonPaletteConfig,
    permanentPalette: basePermanentConfig,
    isDefault: false,
  },
  {
    name: 'Atlantis',
    palette: atlantisPaletteConfig,
    permanentPalette: basePermanentConfig,
    isDefault: false,
  },
  {
    name: 'Valencia',
    palette: valenciaPaletteConfig,
    permanentPalette: basePermanentConfig,
    isDefault: false,
  },
  {
    name: 'Studio',
    palette: studioPaletteConfig,
    permanentPalette: basePermanentConfig,
    isDefault: false,
  },
  {
    name: 'Purple Heart',
    palette: purpleHeartPaletteConfig,
    permanentPalette: basePermanentConfig,
    isDefault: false,
  },
];
