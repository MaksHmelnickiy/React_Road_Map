import { baseThemeValues } from 'constants/common';

import { menuButtonTheme } from './MenuButton/theme';

const navigationItemBase = {
  fontFamily: baseThemeValues.inherit,
  fontSize: '16px',
  fontWeight: '500',
};

export const navigationBarTheme = {
  container: 'palette.surface.3',
  openButton: menuButtonTheme,
  logoutModalMessage: 'palette.primary.99',
  navigationItem: {
    navigationItemBase,
    base: {
      ...navigationItemBase,
      borderWidth: '3px',
      bg: 'palette.transparent',
      text: 'palette.neutral.40',
      borderColor: 'palette.transparent',
    },
    hover: {
      ...navigationItemBase,
      borderWidth: '3px',
      bg: 'palette.primary.10',
      text: 'palette.primary.99',
      borderColor: 'palette.transparent',
    },
    active: {
      ...navigationItemBase,
      borderWidth: '3px',
      bg: 'palette.surface.5',
      text: 'palette.primary.99',
      borderColor: 'palette.primary.20',
    },
  },
};
