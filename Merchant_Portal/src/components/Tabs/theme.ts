import { baseThemeValues } from 'constants/common';

const tabBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 700,
  fontSize: '16px',
};

export const tabTheme = {
  inactive: {
    baseProps: tabBase,
    base: {
      ...tabBase,
      bg: 'palette.transparent',
      text: 'palette.tertiary.30',
      underline: 'palette.transparent',
    },
    hover: {
      ...tabBase,
      bg: 'palette.surface.5',
      text: 'palette.primary.99',
      underline: 'palette.transparent',
    },
    pressed: {
      ...tabBase,
      bg: 'palette.surface.4',
      text: 'palette.primary.99',
      underline: 'palette.transparent',
    },
  },
  active: {
    baseProps: tabBase,
    base: {
      ...tabBase,
      bg: 'palette.transparent',
      text: 'palette.primary.99',
      underline: 'palette.primary.99',
    },
    hover: {
      ...tabBase,
      bg: 'palette.surface.5',
      text: 'palette.primary.99',
      underline: 'palette.primary.99',
    },
    pressed: {
      ...tabBase,
      bg: 'palette.surface.4',
      text: 'palette.primary.99',
      underline: 'palette.primary.99',
    },
  },
};

export const tabsTheme = {
  borderWidth: '1px',
  borderColor: 'palette.tertiary.10',
};
