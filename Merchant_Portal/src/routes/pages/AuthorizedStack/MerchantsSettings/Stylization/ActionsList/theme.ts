import { buttonTheme } from 'components/Button/theme';

export const actionsTheme = {
  openActionsButton: {
    base: 'palette.primary.99',
    active: 'palette.primary.20',
  },
  deleteButton: {
    baseProps: {
      ...buttonTheme.icon.baseProps,
    },
    base: {
      ...buttonTheme.icon.base,
      text: 'palette.error.60',
    },
    hover: {
      ...buttonTheme.icon.hover,
      text: 'palette.error.40',
    },
    focus: {
      ...buttonTheme.icon.focus,
      text: 'palette.error.40',
    },
    pressed: {
      ...buttonTheme.icon.pressed,
      text: 'palette.error.60',
    },
    disabled: {
      ...buttonTheme.icon.disabled,
    },
  },
};
