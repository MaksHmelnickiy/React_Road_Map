import { baseThemeValues } from 'constants/common';

const baseSwitchInput = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 400,
  text: 'palette.primary.99',
  bg: 'palette.surface.4',
  borderColor: 'palette.tertiary.5',
  borderRadius: '5px',
  borderWidth: '1px',
  error: {
    text: 'palette.error.70',
    fontFamily: baseThemeValues.inherit,
    fontWeight: 400,
    fontSize: '12px',
  },
};

export const switchInputTheme = {
  sm: {
    ...baseSwitchInput,
    fontSize: '12px',
  },
  lg: {
    ...baseSwitchInput,
    fontSize: '14px',
  },
};
