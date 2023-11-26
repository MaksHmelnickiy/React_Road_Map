import { baseThemeValues } from 'constants/common';

const baseProps = {
  borderRadius: '5px',
  borderWidth: '1px',
  fontFamily: baseThemeValues.inherit,
  fontWeight: 400,
  fontSize: '16px',
  outlineWidth: '0px',
  outlineColor: 'palette.transparent',
};

const labelPlaceholderLgBase = {
  fontSize: '16px',
  fontWeight: 400,
  fontFamily: baseThemeValues.inherit,
};

const labelBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 500,
  fontSize: '14px',
};

// ==================================================

const baseSmProps = {
  borderRadius: '5px',
  borderWidth: '1px',
  fontFamily: baseThemeValues.inherit,
  fontWeight: 400,
  fontSize: '14px',
  outlineWidth: '0px',
  outlineColor: 'palette.transparent',
};

const labelPlaceholderSmBase = {
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: baseThemeValues.inherit,
};

const labelSmBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 500,
  fontSize: '12px',
};

export const inputTheme = {
  lg: {
    labelBase,
    labelPlaceholderBase: labelPlaceholderLgBase,
    baseProps,
    placeholderBase: labelBase,
    inactive: {
      ...baseProps,
      bg: 'palette.surface.4',
      borderColor: 'palette.tertiary.5',
      text: 'palette.tertiary.70',
      startIcon: 'palette.tertiary.30',
      endIcon: 'palette.tertiary.30',
      label: {
        ...labelBase,
        text: 'palette.primary.60',
      },
      labelPlaceholder: {
        ...labelPlaceholderLgBase,
        text: 'palette.tertiary.30',
      },
      placeholder: {
        ...labelPlaceholderLgBase,
        text: 'palette.tertiary.30',
      },
    },
    hover: {
      ...baseProps,
      bg: 'palette.surface.5',
      borderColor: 'palette.primary.40',
      text: 'palette.primary.99',
      startIcon: 'palette.secondary.95',
      endIcon: 'palette.secondary.95',
      label: {
        ...labelBase,
        text: 'palette.primary.60',
      },
      labelPlaceholder: {
        ...labelPlaceholderLgBase,
        text: 'palette.primary.60',
      },
      placeholder: {
        ...labelPlaceholderLgBase,
        text: 'palette.primary.60',
      },
    },
    focus: {
      ...baseProps,
      bg: 'palette.surface.5',
      borderWidth: '1px',
      borderColor: 'palette.primary.40',
      text: 'palette.primary.99',
      startIcon: 'palette.secondary.95',
      endIcon: 'palette.secondary.95',
      outlineWidth: '1px',
      outlineColor: 'palette.primary.40',
      label: {
        ...labelBase,
        text: 'palette.primary.60',
      },
      labelPlaceholder: {
        ...labelPlaceholderLgBase,
        text: 'palette.primary.60',
        fontSize: '12px',
      },
      placeholder: {
        ...labelPlaceholderLgBase,
        text: 'palette.transparent',
      },
    },
    disabled: {
      ...baseProps,
      bg: 'palette.neutral.0',
      borderColor: 'palette.neutral.5',
      text: 'palette.neutral.20',
      startIcon: 'palette.neutral.20',
      endIcon: 'palette.neutral.20',
      label: {
        ...labelBase,
        text: 'palette.neutral.20',
      },
      labelPlaceholder: {
        ...labelPlaceholderLgBase,
        text: 'palette.neutral.20',
      },
      placeholder: {
        ...labelPlaceholderLgBase,
        text: 'palette.neutral.20',
      },
    },
    error: {
      ...baseProps,
      bg: 'palette.surface.5',
      borderColor: 'palette.error.60',
      text: 'palette.primary.99',
      helpText: {
        text: 'palette.error.70',
        fontFamily: baseThemeValues.inherit,
        fontWeight: 400,
        fontSize: '12px',
      },
      startIcon: 'palette.secondary.95',
      endIcon: 'palette.secondary.95',
      label: {
        ...labelBase,
        text: 'palette.primary.60',
      },
      placeholder: {
        ...labelPlaceholderLgBase,
        text: 'palette.error.70',
      },
      labelPlaceholder: {
        ...labelPlaceholderLgBase,
        text: 'palette.error.70',
      },
    },
    button: {
      base: {
        bg: 'palette.transparent',
        icon: 'palette.tertiary.30',
      },
      hover: {
        bg: 'palette.secondary.60:0.1',
        icon: 'palette.secondary.95',
      },
      pressed: {
        bg: 'palette.secondary.40:0.2',
        icon: 'palette.secondary.70',
      },
    },
  },
  sm: {
    labelPlaceholderSmBase,
    baseSmProps,
    placeholderBase: labelSmBase,
    inactive: {
      ...baseSmProps,
      bg: 'palette.surface.4',
      borderColor: 'palette.tertiary.5',
      text: 'palette.tertiary.70',
      startIcon: 'palette.tertiary.30',
      endIcon: 'palette.tertiary.30',
      label: {
        ...labelSmBase,
        text: 'palette.primary.60',
      },
      labelPlaceholder: {
        ...labelPlaceholderSmBase,
        text: 'palette.tertiary.30',
      },
      placeholder: {
        ...labelPlaceholderSmBase,
        text: 'palette.tertiary.30',
      },
    },
    hover: {
      ...baseSmProps,
      bg: 'palette.surface.5',
      borderColor: 'palette.primary.40',
      text: 'palette.primary.99',
      startIcon: 'palette.secondary.95',
      endIcon: 'palette.secondary.95',
      label: {
        ...labelSmBase,
        text: 'palette.primary.60',
      },
      labelPlaceholder: {
        ...labelPlaceholderSmBase,
        text: 'palette.primary.60',
      },
      placeholder: {
        ...labelPlaceholderSmBase,
        text: 'palette.primary.60',
      },
    },
    focus: {
      ...baseSmProps,
      bg: 'palette.surface.5',
      borderWidth: '1px',
      borderColor: 'palette.primary.40',
      text: 'palette.primary.99',
      startIcon: 'palette.secondary.95',
      endIcon: 'palette.secondary.95',
      outlineWidth: '1px',
      outlineColor: 'palette.primary.40',
      label: {
        ...labelSmBase,
        text: 'palette.primary.60',
      },
      labelPlaceholder: {
        ...labelPlaceholderSmBase,
        text: 'palette.primary.60',
        fontSize: '12px',
      },
      placeholder: {
        ...labelPlaceholderSmBase,
        text: 'palette.transparent',
      },
    },
    disabled: {
      ...baseSmProps,
      bg: 'palette.neutral.0',
      borderColor: 'palette.neutral.5',
      text: 'palette.neutral.20',
      startIcon: 'palette.neutral.20',
      endIcon: 'palette.neutral.20',
      label: {
        ...labelSmBase,
        text: 'palette.neutral.20',
      },
      labelPlaceholder: {
        ...labelPlaceholderSmBase,
        text: 'palette.neutral.20',
      },
      placeholder: {
        ...labelPlaceholderSmBase,
        text: 'palette.neutral.20',
      },
    },
    error: {
      ...baseSmProps,
      bg: 'palette.surface.5',
      borderColor: 'palette.error.60',
      text: 'palette.primary.99',
      helpText: {
        text: 'palette.error.70',
        fontFamily: baseThemeValues.inherit,
        fontWeight: 400,
        fontSize: '12px',
      },
      startIcon: 'palette.secondary.95',
      endIcon: 'palette.secondary.95',
      label: {
        ...labelSmBase,
        text: 'palette.primary.60',
      },
      placeholder: {
        ...labelPlaceholderSmBase,
        text: 'palette.error.70',
      },
      labelPlaceholder: {
        ...labelPlaceholderSmBase,
        text: 'palette.error.70',
      },
    },
    button: {
      base: {
        bg: 'palette.transparent',
        icon: 'palette.tertiary.30',
      },
      hover: {
        bg: 'palette.secondary.60:0.1',
        icon: 'palette.secondary.95',
      },
      pressed: {
        bg: 'palette.secondary.40:0.2',
        icon: 'palette.secondary.70',
      },
    },
  },
};
