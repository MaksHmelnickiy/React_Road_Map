import { baseThemeValues } from 'constants/common';

const treeItemBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 500,
  fontSize: '14px',
  borderColor: 'palette.transparent',
  borderWidth: '0px',
  borderRadius: '4px',
};

export const transferTreeTheme = {
  header: {
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
  body: {
    bg: 'palette.surface.2',
    borderRadius: '12px',
    borderColor: 'palette.transparent',
    borderWidth: '0px',
    connectLineWidth: '2px',
    connectLine: 'palette.surface.5',
    item: {
      connectLineWidth: '2px',
      connectLine: 'palette.surface.5',
      base: {
        ...treeItemBase,
        text: 'palette.neutral.40',
        bg: 'palette.transparent',
      },
      hover: {
        ...treeItemBase,
        text: 'palette.primary.99',
        bg: 'palette.surface.4',
      },
      active: {
        ...treeItemBase,
        text: 'palette.primary.99',
        bg: 'palette.transparent',
      },
    },
  },
};
