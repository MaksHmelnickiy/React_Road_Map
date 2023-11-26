import { baseThemeValues } from 'constants/common';

const baseButtonProps = {
  fontWeight: 700,
  fontSize: '18px',
  fontFamily: baseThemeValues.inherit,
  boxShadow: 'palette.transparent',
  outlineColor: 'palette.transparent',
  outlineWidth: '0px',
};

const basePrimaryProps = {
  ...baseButtonProps,
  borderRadius: '6px',
  borderWidth: '0px',
};

const baseOutlinedProps = {
  ...baseButtonProps,
  borderRadius: '6px',
  borderWidth: '1px',
};

const baseIconProps = {
  ...baseButtonProps,
  borderRadius: '30px',
  borderWidth: '0px',
  borderColor: 'palette.transparent',
};

const baseLinkProps = {
  fontWeight: 600,
  fontSize: '14px',
  fontFamily: baseThemeValues.inherit,
  boxShadow: 'palette.transparent',
  outlineColor: 'palette.transparent',
  outlineWidth: '0px',
  borderRadius: '0px',
  borderWidth: '0px',
  borderColor: 'palette.transparent',
  bg: 'palette.transparent',
};

export const buttonTheme = {
  primary: {
    baseProps: basePrimaryProps,
    base: {
      ...basePrimaryProps,
      bg: 'palette.primary.20',
      text: 'palette.primary.99',
    },
    hover: {
      ...basePrimaryProps,
      bg: 'palette.primary.40',
      text: 'palette.primary.99',
    },
    focus: {
      ...basePrimaryProps,
      outlineWidth: '4px',
      outlineColor: 'palette.primary.70',
      bg: 'palette.primary.50',
      text: 'palette.primary.99',
    },
    pressed: {
      ...basePrimaryProps,
      bg: 'palette.primary.30',
      text: 'palette.primary.99',
    },
    disabled: {
      ...basePrimaryProps,
      bg: 'palette.neutral.5',
      text: 'palette.neutral.40',
    },
  },
  danger: {
    baseProps: basePrimaryProps,
    base: {
      ...basePrimaryProps,
      bg: 'palette.error.20',
      text: 'palette.error.99',
    },
    hover: {
      ...basePrimaryProps,
      bg: 'palette.error.40',
      text: 'palette.error.99',
    },
    focus: {
      ...basePrimaryProps,
      outlineWidth: '4px',
      outlineColor: 'palette.error.70',
      bg: 'palette.error.50',
      text: 'palette.error.99',
    },
    pressed: {
      ...basePrimaryProps,
      bg: 'palette.error.30',
      text: 'palette.error.99',
    },
    disabled: {
      ...basePrimaryProps,
      bg: 'palette.neutral.5',
      text: 'palette.neutral.40',
    },
  },
  outlined: {
    baseProps: baseOutlinedProps,
    base: {
      ...baseOutlinedProps,
      bg: 'palette.transparent',
      borderColor: 'palette.neutral.40',
      text: 'palette.neutral.40',
    },
    hover: {
      ...baseOutlinedProps,
      bg: 'palette.transparent',
      borderColor: 'palette.neutral.90',
      text: 'palette.neutral.90',
    },
    focus: {
      ...baseOutlinedProps,
      bg: 'palette.surface.4',
      borderColor: 'palette.neutral.90',
      text: 'palette.neutral.90',
    },
    pressed: {
      ...baseOutlinedProps,
      bg: 'palette.surface.5',
      borderColor: 'palette.neutral.50',
      text: 'palette.neutral.90',
    },
    disabled: {
      ...baseOutlinedProps,
      bg: 'palette.transparent',
      borderColor: 'palette.neutral.10',
      text: 'palette.neutral.10',
    },
  },
  link: {
    baseProps: baseLinkProps,
    base: {
      ...baseLinkProps,
      text: 'palette.primary.60',
    },
    hover: {
      ...baseLinkProps,
      text: 'palette.primary.40',
    },
    focus: {
      ...baseLinkProps,
      text: 'palette.primary.40',
    },
    pressed: {
      ...baseLinkProps,
      text: 'palette.primary.30',
    },
    disabled: {
      ...baseLinkProps,
      text: 'palette.neutral.40',
    },
  },
  icon: {
    baseProps: baseIconProps,
    base: {
      ...baseIconProps,
      bg: 'palette.transparent',
      text: 'palette.tertiary.30',
    },
    hover: {
      ...baseIconProps,
      bg: 'palette.tertiary.5',
      text: 'palette.primary.90',
    },
    focus: {
      ...baseIconProps,
      bg: 'palette.primary.20',
      text: 'palette.primary.99',
    },
    pressed: {
      ...baseIconProps,
      bg: 'palette.tertiary.0',
      text: 'palette.primary.90',
    },
    disabled: {
      ...baseIconProps,
      bg: 'palette.transparent',
      text: 'palette.neutral.20',
    },
  },
};
