import { TAG_VARIANTS } from '@private/components';

import { baseThemeValues } from 'constants/common';

const tagBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 400,
  fontSize: '12px',
  borderRadius: '16px',
  borderWidth: '0px',
  borderColor: 'palette.transparent',
};

export const tagTheme = {
  baseProps: tagBase,
  [TAG_VARIANTS.PRIMARY]: {
    ...tagBase,
    text: 'palette.primary.99',
    bg: 'palette.primary.20',
  },
  [TAG_VARIANTS.BLUE]: {
    ...tagBase,
    text: 'palette.primary.0',
    bg: 'palette.primary.50',
  },
  [TAG_VARIANTS.SUCCESS]: {
    ...tagBase,
    text: 'palette.success.60',
    bg: 'palette.success.0',
  },
  [TAG_VARIANTS.WARNING]: {
    ...tagBase,
    text: 'palette.warning.30',
    bg: 'palette.warning.0',
  },
  [TAG_VARIANTS.ERROR]: {
    ...tagBase,
    text: 'palette.error.60',
    bg: 'palette.error.0',
  },
};
