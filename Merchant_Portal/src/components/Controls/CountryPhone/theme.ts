import { baseThemeValues } from 'constants/common';

const labelLgBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 500,
  fontSize: '14px',
};

const labelSmBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 500,
  fontSize: '12px',
};

const componentBase = {
  borderRadius: '6px',
  borderWidth: '1px',
};

export const countryPhoneTheme = {
  lg: {
    inactive: {
      ...componentBase,
      borderColor: 'palette.tertiary.5',
      label: {
        ...labelLgBase,
        text: 'palette.primary.60',
      },
    },
    hover: {
      ...componentBase,
      borderColor: 'palette.primary.40',
      label: {
        ...labelLgBase,
        text: 'palette.primary.60',
      },
    },
    focus: {
      ...componentBase,
      borderColor: 'palette.primary.40',
      label: {
        ...labelLgBase,
        text: 'palette.primary.60',
      },
    },
    disabled: {
      ...componentBase,
      borderColor: 'palette.neutral.5',
      label: {
        ...labelLgBase,
        text: 'palette.neutral.20',
      },
    },
    error: {
      ...componentBase,
      borderColor: 'palette.error.60',
      label: {
        ...labelLgBase,
        text: 'palette.primary.60',
      },
      helpText: {
        fontFamily: baseThemeValues.inherit,
        fontSize: '12px',
        fontWeight: 400,
        text: 'palette.error.70',
      },
    },
    option: {
      countryName: {
        fontFamily: baseThemeValues.inherit,
        fontWeight: 400,
        fontSize: '16px',
        text: 'palette.tertiary.70',
      },
      countryPrefix: {
        fontFamily: baseThemeValues.inherit,
        fontWeight: 400,
        fontSize: '16px',
        text: 'palette.tertiary.60',
      },
    },
  },
  sm: {
    inactive: {
      ...componentBase,
      borderColor: 'palette.tertiary.5',
      label: {
        ...labelSmBase,
        text: 'palette.primary.60',
      },
    },
    hover: {
      ...componentBase,
      borderColor: 'palette.tertiary.5',
      label: {
        ...labelSmBase,
        text: 'palette.primary.60',
      },
    },
    focus: {
      ...componentBase,
      borderColor: 'palette.primary.40',
      label: {
        ...labelSmBase,
        text: 'palette.primary.60',
      },
    },
    disabled: {
      ...componentBase,
      borderColor: 'palette.neutral.5',
      label: {
        ...labelSmBase,
        text: 'palette.neutral.20',
      },
    },
    error: {
      ...componentBase,
      borderColor: 'palette.error.60',
      label: {
        ...labelSmBase,
        text: 'palette.primary.60',
      },
      helpText: {
        fontFamily: baseThemeValues.inherit,
        fontSize: '12px',
        fontWeight: 400,
        text: 'palette.error.70',
      },
    },
    option: {
      countryName: {
        fontFamily: baseThemeValues.inherit,
        fontWeight: 400,
        fontSize: '14px',
        text: 'palette.tertiary.70',
      },
      countryPrefix: {
        fontFamily: baseThemeValues.inherit,
        fontWeight: 400,
        fontSize: '14px',
        text: 'palette.tertiary.60',
      },
    },
  },
};
