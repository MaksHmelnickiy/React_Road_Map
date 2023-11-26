import { baseThemeValues } from 'constants/common';

const boldBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 500,
};

const regularBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 400,
};

export const typographyTheme = {
  h1: {
    fontFamily: baseThemeValues.inherit,
    fontSize: '32px',
    fontWeight: 700,
  },
  h3: {
    fontFamily: baseThemeValues.inherit,
    fontSize: '24px',
    fontWeight: 700,
  },
  h5: {
    fontFamily: baseThemeValues.inherit,
    fontSize: '18px',
    fontWeight: 700,
  },
  h6: {
    fontFamily: baseThemeValues.inherit,
    fontSize: '16px',
    fontWeight: 700,
  },
  p: {
    bold: {
      boldBase,
      xxl: {
        ...boldBase,
        fontSize: '22px',
      },
      xl: {
        ...boldBase,
        fontSize: '20px',
      },
      lg: {
        ...boldBase,
        fontSize: '18px',
      },
      md: {
        ...boldBase,
        fontSize: '16px',
      },
      sm: {
        ...boldBase,
        fontSize: '14px',
      },
      xs: {
        ...boldBase,
        fontSize: '12px',
      },
    },
    regular: {
      regularBase,
      xxl: {
        ...regularBase,
        fontSize: '22px',
      },
      xl: {
        ...regularBase,
        fontSize: '20px',
      },
      lg: {
        ...regularBase,
        fontSize: '18px',
      },
      md: {
        ...regularBase,
        fontSize: '16px',
      },
      sm: {
        ...regularBase,
        fontSize: '14px',
      },
      xs: {
        ...regularBase,
        fontSize: '12px',
      },
    },
  },
};
