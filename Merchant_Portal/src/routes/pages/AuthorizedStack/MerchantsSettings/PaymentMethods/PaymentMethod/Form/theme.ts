import { baseThemeValues } from 'constants/common';

export const paymentMethodFormTheme = {
  title: 'palette.primary.99',
  dropZone: {
    base: {
      borderWidth: '1px',
      borderColor: 'palette.primary.70',
      borderRadius: '12px',
      bg: 'palette.transparent',
    },
    hover: {
      borderWidth: '2px',
      borderRadius: '12px',
      borderColor: 'palette.primary.20',
      bg: 'palette.primary.30:0.25',
    },
    error: {
      borderWidth: '2px',
      borderRadius: '12px',
      borderColor: 'palette.error.20',
      bg: 'palette.error.20:0.5',
    },
    errorMessage: {
      fontFamily: baseThemeValues.inherit,
      fontWeight: 400,
      fontSize: '12px',
      text: 'palette.error.70',
    },
    dropText: 'palette.tertiary.90',
    clickLink: 'palette.primary.40',
    limitationRules: 'palette.tertiary.90',
    methodCode: 'palette.primary.99',
  },
};
