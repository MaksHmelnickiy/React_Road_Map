import { NOTIF_TYPES } from '@private/notifications';

import { baseThemeValues } from 'constants/common';

const ntfBase = {
  borderWidth: '1px',
  borderRadius: '8px',
  bg: 'palette.surface.4',
  boxShadow: 'palette.black:0.5',
  loader: {
    back: 'palette.surface.5',
    front: 'palette.secondary.20',
  },
};

const titleBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 600,
  fontSize: '14px',
};

export const notificationTheme = {
  baseProps: ntfBase,
  titleBase,
  [NOTIF_TYPES.INFO]: {
    ...ntfBase,
    borderColor: 'palette.primary.20',
    title: { ...titleBase, text: 'palette.primary.60' },
    message: 'palette.tertiary.99',
  },
  [NOTIF_TYPES.SUCCESS]: {
    ...ntfBase,
    borderColor: 'palette.success.20',
    title: { ...titleBase, text: 'palette.success.30' },
    message: 'palette.tertiary.99',
  },
  [NOTIF_TYPES.WARNING]: {
    ...ntfBase,
    borderColor: 'palette.warning.20',
    title: { ...titleBase, text: 'palette.warning.20' },
    message: 'palette.tertiary.99',
  },
  [NOTIF_TYPES.ERROR]: {
    ...ntfBase,
    borderColor: 'palette.error.10',
    title: { ...titleBase, text: 'palette.error.50' },
    message: 'palette.tertiary.99',
  },
  [NOTIF_TYPES.LOADING]: {
    ...ntfBase,
    borderColor: 'palette.secondary.20',
    title: { ...titleBase, text: 'palette.secondary.60' },
    message: 'palette.tertiary.99',
  },
};
