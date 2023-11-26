import { baseThemeValues } from 'constants/common';

const baseProps = {
  borderRadius: '15px',
  borderWidth: '2px',
  fontSize: '14px',
  fontWeight: 400,
  shadowSize: '7px',
  fontFamily: baseThemeValues.inherit,
};

const labelBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 500,
  fontSize: '12px',
};

export const radioSelectTheme = {
  groupLabel: {
    ...labelBase,
    text: 'palette.primary.60',
  },
  notChecked: {
    baseProps,
    base: {
      ...baseProps,
      bg: 'palette.transparent',
      borderColor: 'palette.tertiary.40',
      text: 'palette.primary.99',
      boxShadowColor: 'palette.transparent',
    },
    hover: {
      ...baseProps,
      bg: 'palette.tertiary.5',
      borderColor: 'palette.secondary.40',
      text: 'palette.secondary.99',
      boxShadowColor: 'palette.tertiary.5',
    },
    pressed: {
      ...baseProps,
      bg: 'palette.tertiary.5',
      borderColor: 'palette.secondary.99',
      text: 'palette.secondary.99',
      boxShadowColor: 'palette.tertiary.5',
    },
    disabled: {
      ...baseProps,
      bg: 'palette.transparent',
      borderColor: 'palette.neutral.50',
      text: 'palette.neutral.50',
      boxShadowColor: 'palette.transparent',
    },
  },
  checked: {
    baseProps,
    base: {
      ...baseProps,
      bg: 'palette.transparent',
      borderColor: 'palette.primary.20',
      text: 'palette.primary.99',
      borderWidth: '5px',
      boxShadowColor: 'palette.transparent',
    },
    hover: {
      ...baseProps,
      bg: 'palette.transparent',
      borderColor: 'palette.primary.20',
      text: 'palette.primary.99',
      borderWidth: '5px',
      boxShadowColor: 'palette.transparent',
    },
    pressed: {
      ...baseProps,
      bg: 'palette.transparent',
      borderColor: 'palette.primary.30',
      text: 'palette.primary.99',
      borderWidth: '5px',
      boxShadowColor: 'palette.transparent',
    },
    disabled: {
      ...baseProps,
      bg: 'palette.transparent',
      borderColor: 'palette.neutral.50',
      text: 'palette.neutral.50',
      borderWidth: '5px',
      boxShadowColor: 'palette.transparent',
    },
  },
};
