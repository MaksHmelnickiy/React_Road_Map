import { baseThemeValues } from 'constants/common';

const labelBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 500,
  fontSize: 14,
};

const thumbBase = {
  borderWidth: '0px',
  borderColor: 'palette.transparent',
  borderRadius: '36px',
  boxShadow: 'palette.black:0.1',
};

export const switchTheme = {
  labelBase,
  thumbBase,
  notChecked: {
    base: {
      label: {
        ...labelBase,
        text: 'palette.tertiary.70',
      },
      track: {
        borderRadius: '12px',
        borderWidth: '1px',
        borderColor: 'palette.primary.40',
        bg: 'palette.transparent',
        outlineWidth: '0px',
        outlineColor: 'palette.transparent',
      },
      thumb: {
        ...thumbBase,
        bg: 'palette.primary.40',
      },
      icon: 'palette.primary.99',
    },
    hover: {
      label: {
        ...labelBase,
        text: 'palette.primary.99',
      },
      track: {
        borderRadius: '12px',
        borderWidth: '1px',
        borderColor: 'palette.primary.40',
        bg: 'palette.tertiary.5',
        outlineWidth: '0px',
        outlineColor: 'palette.transparent',
      },
      thumb: {
        ...thumbBase,
        bg: 'palette.primary.40',
      },
      icon: 'palette.primary.99',
    },
    pressed: {
      label: {
        ...labelBase,
        text: 'palette.primary.99',
      },
      track: {
        borderRadius: '12px',
        borderWidth: '1px',
        borderColor: 'palette.primary.40',
        bg: 'palette.surface.4',
        outlineWidth: '1px',
        outlineColor: 'palette.primary.40',
      },
      thumb: {
        ...thumbBase,
        bg: 'palette.primary.40',
      },
      icon: 'palette.primary.99',
    },
    disabled: {
      label: {
        ...labelBase,
        text: 'palette.neutral.5',
      },
      track: {
        borderRadius: '12px',
        borderWidth: '0px',
        borderColor: 'palette.transparent',
        bg: 'palette.neutral.10',
        outlineWidth: '0px',
        outlineColor: 'palette.transparent',
      },
      thumb: {
        ...thumbBase,
        bg: 'palette.neutral.5',
      },
      icon: 'palette.neutral.20',
    },
  },
  checked: {
    base: {
      label: {
        ...labelBase,
        text: 'palette.tertiary.70',
      },
      track: {
        borderRadius: '12px',
        borderWidth: '0px',
        borderColor: 'palette.transparent',
        bg: 'palette.primary.20',
        outlineWidth: '0px',
        outlineColor: 'palette.transparent',
      },
      thumb: {
        ...thumbBase,
        bg: 'palette.primary.99',
      },
      icon: 'palette.primary.40',
    },
    hover: {
      label: {
        ...labelBase,
        text: 'palette.primary.99',
      },
      track: {
        borderRadius: '12px',
        borderWidth: '0px',
        borderColor: 'palette.transparent',
        bg: 'palette.primary.50',
        outlineWidth: '0px',
        outlineColor: 'palette.transparent',
      },
      thumb: {
        ...thumbBase,
        bg: 'palette.primary.95',
      },
      icon: 'palette.primary.50',
    },
    pressed: {
      label: {
        ...labelBase,
        text: 'palette.primary.99',
      },
      track: {
        borderRadius: '12px',
        borderWidth: '0px',
        borderColor: 'palette.transparent',
        bg: 'palette.primary.30',
        outlineWidth: '3px',
        outlineColor: 'palette.primary.10',
      },
      thumb: {
        ...thumbBase,
        bg: 'palette.primary.95',
      },
      icon: 'palette.primary.30',
    },
    disabled: {
      label: {
        ...labelBase,
        text: 'palette.neutral.5',
      },
      track: {
        borderRadius: '12px',
        borderWidth: '0px',
        borderColor: 'palette.transparent',
        bg: 'palette.neutral.10',
        outlineWidth: '0px',
        outlineColor: 'palette.transparent',
      },
      thumb: {
        ...thumbBase,
        bg: 'palette.neutral.5',
      },
      icon: 'palette.neutral.20',
    },
  },
};
