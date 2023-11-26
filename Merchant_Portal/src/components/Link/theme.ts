import { baseThemeValues } from 'constants/common';

const linkBase = {
  fontFamily: baseThemeValues.inherit,
  fontSize: '14px',
};

const linkBaseVariation = {
  regular: {
    ...linkBase,
    fontWeight: 400,
  },
  bold: {
    ...linkBase,
    fontWeight: 600,
  },
};

export const linkThemeVariants = (variant: 'regular' | 'bold') => ({
  unread: {
    baseProps: linkBaseVariation[variant],
    base: {
      ...linkBaseVariation[variant],
      text: 'palette.primary.60',
    },
    hover: {
      ...linkBaseVariation[variant],
      text: 'palette.primary.40',
    },
    pressed: {
      ...linkBaseVariation[variant],
      text: 'palette.primary.30',
    },
    disabled: {
      ...linkBaseVariation[variant],
      text: 'palette.neutral.40',
    },
  },
  read: {
    base: {
      ...linkBaseVariation[variant],
      text: 'palette.secondary.80',
    },
    hover: {
      ...linkBaseVariation[variant],
      text: 'palette.primary.40',
    },
    pressed: {
      ...linkBaseVariation[variant],
      text: 'palette.primary.30',
    },
    disabled: {
      ...linkBaseVariation[variant],
      text: 'palette.neutral.40',
    },
  },
});

export const linkTheme = {
  regular: linkThemeVariants('regular'),
  bold: linkThemeVariants('bold'),
};
