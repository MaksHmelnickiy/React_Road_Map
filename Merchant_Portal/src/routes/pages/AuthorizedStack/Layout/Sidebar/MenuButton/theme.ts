import { baseThemeValues } from 'constants/common';

const baseButtonProps = {
  fontWeight: 700,
  fontSize: '18px',
  fontFamily: baseThemeValues.inherit,
  boxShadow: 'palette.transparent',
  outlineColor: 'palette.transparent',
  outlineWidth: '0px',
  borderRadius: '36px',
  borderWidth: '2px',
};

export const menuButtonTheme = {
  baseProps: baseButtonProps,
  base: {
    ...baseButtonProps,
    bg: 'palette.surface.3',
    borderColor: 'palette.tertiary.20',
    text: 'palette.tertiary.50',
  },
  hover: {
    ...baseButtonProps,
    bg: 'palette.primary.20',
    borderColor: 'palette.transparent',
    text: 'palette.primary.99',
  },
  focus: {
    ...baseButtonProps,
    bg: 'palette.primary.50',
    borderColor: 'palette.primary.50',
    text: 'palette.primary.99',
  },
  pressed: {
    ...baseButtonProps,
    outlineWidth: '4px',
    bg: 'palette.primary.30',
    outlineColor: 'palette.primary.70',
    text: 'palette.primary.99',
  },
  disabled: {
    ...baseButtonProps,
    bg: 'palette.transparent',
    borderColor: 'palette.neutral.10',
    text: 'palette.neutral.40',
  },
};
