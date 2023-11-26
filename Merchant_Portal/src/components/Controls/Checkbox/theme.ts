import { baseThemeValues } from 'constants/common';

const baseProps = {
  borderRadius: '3px',
  borderWidth: '2px',
  fontSize: '14px',
  fontWeight: 500,
  shadowSize: '7px',
  fontFamily: baseThemeValues.inherit,
};

export const checkboxTheme = {
  notChecked: {
    baseProps,
    base: {
      ...baseProps,
      checkMark: 'palette.transparent',
      shadowColor: 'palette.transparent',
      borderColor: 'palette.tertiary.40',
      bg: 'palette.transparent',
      text: 'palette.neutral.40',
    },
    hover: {
      ...baseProps,
      checkMark: 'palette.transparent',
      shadowColor: 'palette.tertiary.5',
      borderColor: 'palette.primary.99',
      bg: 'palette.tertiary.5',
      text: 'palette.primary.99',
    },
    pressed: {
      ...baseProps,
      checkMark: 'palette.transparent',
      shadowColor: 'palette.tertiary.5',
      borderColor: 'palette.primary.99',
      bg: 'palette.tertiary.5',
      text: 'palette.primary.99',
    },
    disabled: {
      ...baseProps,
      checkMark: 'palette.transparent',
      shadowColor: 'palette.transparent',
      borderColor: 'palette.neutral.10',
      bg: 'palette.transparent',
      text: 'palette.neutral.10',
    },
  },
  checked: {
    baseProps,
    base: {
      ...baseProps,
      checkMark: 'palette.surface.4',
      shadowColor: 'palette.transparent',
      borderColor: 'palette.primary.30',
      bg: 'palette.primary.30',
      text: 'palette.tertiary.70',
    },
    hover: {
      ...baseProps,
      checkMark: 'palette.surface.4',
      shadowColor: 'palette.tertiary.5',
      borderColor: 'palette.primary.40',
      bg: 'palette.primary.40',
      text: 'palette.primary.99',
    },
    pressed: {
      ...baseProps,
      checkMark: 'palette.surface.4',
      shadowColor: 'palette.tertiary.5',
      borderColor: 'palette.primary.20',
      bg: 'palette.primary.20',
      text: 'palette.primary.99',
    },
    disabled: {
      ...baseProps,
      checkMark: 'palette.surface.4',
      shadowColor: 'palette.transparent',
      borderColor: 'palette.neutral.5',
      bg: 'palette.neutral.5',
      text: 'palette.neutral.5',
    },
  },
};
