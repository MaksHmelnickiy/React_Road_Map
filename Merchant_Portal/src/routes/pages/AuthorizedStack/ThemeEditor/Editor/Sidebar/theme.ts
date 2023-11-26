import { baseThemeValues } from 'constants/common';

const tabBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 500,
  fontSize: '14px',
  activeLine: 'palette.primary.20',
};

export const editorSidebarTheme = {
  bg: 'palette.surface.3',
  tabs: {
    bg: 'palette.surface.3',
    borderWidth: '1px',
    borderColor: 'palette.surface.5',
    tab: {
      base: {
        ...tabBase,
        bg: 'palette.transparent',
        text: 'palette.tertiary.60',
      },
      hover: {
        ...tabBase,
        bg: 'palette.surface.4',
        text: 'palette.tertiary.80',
      },
      pressed: {
        ...tabBase,
        bg: 'palette.surface.5',
        text: 'palette.tertiary.60',
      },
    },
  },
  closeBarButton: 'palette.neutral.60',
  section: {
    title: 'palette.neutral.90',
    subtitle: 'palette.neutral.80',
    borderWidth: '1px',
    borderColor: 'palette.surface.5',
  },
  accordion: {
    base: {
      borderWidth: '2px',
      borderColor: 'palette.transparent',
      bg: 'palette.transparent',
      text: 'palette.neutral.90',
    },
    hover: {
      bg: 'palette.surface.4',
    },
    opened: {
      bg: 'palette.surface.5',
      text: 'palette.neutral.99',
    },
    active: {
      borderColor: 'palette.primary.20',
      text: 'palette.neutral.99',
    },
  },
  components: {
    innerComponentsList: {
      groupLine: 'palette.surface.5',
    },
    property: {
      base: {
        borderWidth: '2px',
        borderColor: 'palette.transparent',
        text: 'palette.neutral.90',
      },
      active: {
        borderColor: 'palette.primary.20',
        text: 'palette.primary.99',
      },
    },
  },
  typography: {
    item: {
      text: 'palette.neutral.90',
      container: {
        base: {
          borderWidth: '2px',
          borderColor: 'palette.transparent',
        },
        active: {
          borderColor: 'palette.primary.20',
        },
      },
      divider: 'palette.surface.5',
      preview: {
        fontSize: '14px',
        text: 'palette.neutral.90',
      },
      select: {
        bg: 'palette.surface.3',
        borderColor: 'palette.surface.4',
        scrollThumb: 'palette.surface.5',
      },
    },
    preview: {
      fontSize: '50px',
      text: 'palette.primary.99',
    },
  },
};
