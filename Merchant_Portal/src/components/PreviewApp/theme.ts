import { baseThemeValues } from 'constants/common';

export const previewAppTheme = {
  container: {
    bg: 'palette.secondary.99',
    borderWidth: '1px',
    borderColor: 'palette.surface.5',
    borderRadius: '24px',
  },
  header: {
    bg: 'palette.surface.2',
    logo: {
      fontFamily: baseThemeValues.inherit,
      fontWeight: 700,
      fontSize: '16px',
      text: 'palette.primary.99',
    },
  },
  sidebar: {
    bg: 'palette.surface.3',
    controlButton: {
      bg: 'palette.surface.3',
      borderWidth: '1px',
      borderColor: 'palette.tertiary.20',
      borderRadius: '22px',
      text: 'palette.tertiary.50',
    },
    navItem: {
      base: {
        fontFamily: baseThemeValues.inherit,
        fontSize: '11px',
        fontWeight: 500,
        text: 'palette.neutral.40',
        bg: 'palette.transparent',
        borderWidth: '2px',
        borderColor: 'palette.transparent',
      },
      active: {
        fontFamily: baseThemeValues.inherit,
        fontSize: '11px',
        bg: 'palette.surface.5',
        fontWeight: 500,
        text: 'palette.primary.99',
        borderWidth: '2px',
        borderColor: 'palette.primary.20',
      },
    },
  },
  content: {
    bg: 'palette.surface.1',
    title: {
      fontFamily: baseThemeValues.inherit,
      fontWeight: 700,
      fontSize: '16px',
      text: 'palette.primary.99',
    },
    button: {
      fontSize: '12px',
      text: 'palette.neutral.40',
    },
    perPage: {
      fontSize: '10px',
      text: 'palette.tertiary.60',
    },
    select: {
      borderRadius: '5px',
      bg: 'palette.surface.4',
    },
    filters: {
      searchInput: {
        fontSize: '12px',
      },
      tabs: {
        borderWidth: '1px',
        borderColor: 'palette.tertiary.30',
        tab: {
          base: {
            fontFamily: baseThemeValues.inherit,
            fontWeight: 500,
            fontSize: '10px',
            text: 'palette.tertiary.30',
            borderWidth: '2px',
            borderColor: 'palette.transparent',
          },
          active: {
            fontFamily: baseThemeValues.inherit,
            fontWeight: 700,
            fontSize: '10px',
            text: 'palette.primary.99',
            borderWidth: '2px',
            borderColor: 'palette.primary.99',
          },
        },
      },
    },
    table: {
      headerCell: {
        fontSize: '8px',
        text: 'palette.tertiary.80',
        bg: 'palette.surface.3',
        borderWidth: '1px',
        borderColor: 'palette.surface.5',
      },
      rowCell: {
        fontSize: '8px',
        text: 'palette.secondary.99',
        odd: 'palette.surface.4',
        even: 'palette.surface.5',
      },
      tag: {
        fontSize: '8px',
      },
      status: {
        fontSize: '8px',
      },
    },
  },
};
