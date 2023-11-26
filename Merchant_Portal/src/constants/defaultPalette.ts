export const surfaceLightnessConfig = [
  { name: 1, lightness: 14 },
  { name: 2, lightness: 17 },
  { name: 3, lightness: 20 },
  { name: 4, lightness: 24 },
  { name: 5, lightness: 28 },
];

export const baseLightnessConfig = [
  { name: 0, lightness: 20 },
  { name: 5, lightness: 30 },
  { name: 10, lightness: 40 },
  { name: 20, lightness: 50 },
  { name: 30, lightness: 55 },
  { name: 40, lightness: 60 },
  { name: 50, lightness: 65 },
  { name: 60, lightness: 70 },
  { name: 70, lightness: 75 },
  { name: 80, lightness: 80 },
  { name: 90, lightness: 85 },
  { name: 95, lightness: 90 },
  { name: 99, lightness: 95 },
  { name: 100, lightness: 100 },
];

export const royalBluePaletteConfig = [
  {
    name: 'primary',
    hue: 232,
    saturation: 50,
    config: baseLightnessConfig,
  },
  {
    name: 'secondary',
    hue: 242,
    saturation: 32,
    config: baseLightnessConfig,
  },
  {
    name: 'tertiary',
    hue: 232,
    saturation: 28, // constant
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
    hue: 169,
    saturation: 40,
    config: baseLightnessConfig,
  },
  {
    name: 'warning',
    hue: 32,
    saturation: 60,
    config: baseLightnessConfig,
  },
  {
    name: 'neutral',
    hue: 232,
    saturation: 10,
    config: baseLightnessConfig,
  },
  {
    name: 'surface',
    hue: 232,
    saturation: 28,
    config: surfaceLightnessConfig,
  },
];

export const basePermanentConfig = {
  transparent: 'transparent',
  black: 'hsla(0, 0%, 0%, 1)',
  white: 'hsla(0, 0%, 100%, 1)',
};
