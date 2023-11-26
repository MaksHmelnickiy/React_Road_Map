import { baseThemeValues } from 'constants/common';

const itemBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 500,
  fontSize: '14px',
};

export const transferListTheme = {
  header: {
    left: {
      bg: 'palette.tertiary.5',
      title: {
        fontFamily: baseThemeValues.inherit,
        fontWeight: 700,
        fontSize: '24px',
        text: 'palette.tertiary.90',
      },
      subtitle: {
        fontFamily: baseThemeValues.inherit,
        fontWeight: 400,
        fontSize: '14px',
        text: 'palette.tertiary.90',
      },
      icon: 'palette.tertiary.90',
      circle: 'palette.tertiary.0',
      borderColor: 'palette.transparent',
      borderWidth: '0px',
      borderRadius: '8px',
    },
    right: {
      bg: 'palette.secondary.10',
      title: {
        fontFamily: baseThemeValues.inherit,
        fontWeight: 700,
        fontSize: '24px',
        text: 'palette.tertiary.90',
      },
      subtitle: {
        fontFamily: baseThemeValues.inherit,
        fontWeight: 400,
        fontSize: '14px',
        text: 'palette.tertiary.90',
      },
      icon: 'palette.tertiary.90',
      circle: 'palette.secondary.5',
      borderColor: 'palette.transparent',
      borderWidth: '0px',
      borderRadius: '8px',
    },
  },
  body: {
    bg: 'palette.surface.2',
    item: {
      base: {
        ...itemBase,
        text: 'palette.neutral.40',
        bg: 'palette.transparent',
      },
      hover: {
        ...itemBase,
        text: 'palette.primary.99',
        bg: 'palette.surface.4',
      },
      pressed: {
        ...itemBase,
        text: 'palette.primary.99',
        bg: 'palette.surface.5',
      },
    },
    separateLine: 'palette.surface.5',
    connectLine: 'palette.surface.5',
    moveButton: {
      base: {
        bg: 'palette.surface.4',
        text: 'palette.primary.20',
        borderRadius: '12px',
        borderWidth: '0px',
        borderColor: 'palette.transparent',
      },
      active: {
        bg: 'palette.surface.4',
        text: 'palette.primary.20',
        borderRadius: '12px',
        borderWidth: '0px',
        borderColor: 'palette.transparent',
      },
      hover: {
        bg: 'palette.surface.5',
        text: 'palette.primary.99',
        borderRadius: '12px',
        borderWidth: '0px',
        borderColor: 'palette.transparent',
      },
      pressed: {
        bg: 'palette.surface.4',
        text: 'palette.primary.99',
        borderRadius: '12px',
        borderWidth: '0px',
        borderColor: 'palette.transparent',
      },
      disabled: {
        bg: 'palette.surface.2',
        text: 'palette.tertiary.5',
        borderRadius: '12px',
        borderWidth: '0px',
        borderColor: 'palette.transparent',
      },
    },
  },
};
