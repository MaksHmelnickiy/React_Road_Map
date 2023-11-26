import { baseThemeValues } from 'constants/common';

export enum FONTS_VARIANTS {
  INTER = 'Inter',
  ARIAL = 'Arial',
  ARIAL_BLACK = 'Arial Black',
  ARIAL_NARROW = 'Arial Narrow',
  TAHOMA = 'Tahoma',
  TREBUCHED_MS = 'Trebuchet MS',
  VERDANA = 'Verdana',
  TIMES_NEW_ROMAN = 'Times New Roman',
  COURIER_NEW = 'Courier New',
}

const safeFonts = Object.values(FONTS_VARIANTS);

export const FONT_WEIGHTS = {
  [FONTS_VARIANTS.ARIAL]: ['400', '700'],
  [FONTS_VARIANTS.ARIAL_NARROW]: ['400', '700'],
  [FONTS_VARIANTS.ARIAL_BLACK]: ['900'],
  [FONTS_VARIANTS.TAHOMA]: ['400', '700'],
  [FONTS_VARIANTS.TREBUCHED_MS]: ['400', '700'],
  [FONTS_VARIANTS.VERDANA]: ['400', '700'],
  [FONTS_VARIANTS.TIMES_NEW_ROMAN]: ['400', '700'],
  [FONTS_VARIANTS.COURIER_NEW]: ['400', '700'],
  [FONTS_VARIANTS.INTER]: ['300', '400', '500', '600', '700'],
};

export const inheritFont = {
  label: 'Inherit main font',
  value: baseThemeValues.inherit,
};

export const safeFontsOptions = safeFonts.map((name) => ({
  value: name,
  label: name,
}));

export const fontOptions = [inheritFont, ...safeFontsOptions];
export const mainFontOptions = safeFontsOptions;

export const fontSizes = [8, 10, 12, 14, 16, 18, 22, 24, 28, 30, 32, 34, 36, 38, 40];

export const pixelsOptions = Array(36)
  .fill('')
  .map((_, index) => {
    const option = `${index}px`;
    return {
      label: option,
      value: option,
    };
  });

export const fontSizeVariants = fontSizes.map((size) => {
  const option = `${size}px`;

  return {
    label: option,
    value: option,
  };
});
