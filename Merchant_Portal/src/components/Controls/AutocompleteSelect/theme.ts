import { baseThemeValues } from 'constants/common';

import { buttonTheme } from '../../Button/theme';
import { scrollbarTheme } from '../../Scrollbar/theme';

const baseProps = {
  borderWidth: '1px',
  borderRadius: '5px',
  fontFamily: baseThemeValues.inherit,
  fontWeight: 400,
  outlineWidth: '0px',
  outlineColor: 'palette.transparent',
};

const placeholderBase = {
  fontWeight: 400,
  fontFamily: baseThemeValues.inherit,
};

const optionsBase = {
  fontWeight: 400,
  fontFamily: baseThemeValues.inherit,
};

const labelBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: 500,
};

// ==================================================

const baseLgProps = {
  ...baseProps,
  fontSize: '16px',
};

const placeholderLgBase = {
  ...placeholderBase,
  fontSize: '16px',
};

const optionsLgBase = {
  ...optionsBase,
  fontSize: '16px',
};

const labelLgBase = {
  ...labelBase,
  fontSize: '14px',
};

// ==================================================

const baseSmProps = {
  ...baseProps,
  fontSize: '14px',
};

const placeholderSmBase = {
  ...placeholderBase,
  fontSize: '14px',
};

const optionsSmBase = {
  ...optionsBase,
  fontSize: '14px',
};

const labelSmBase = {
  ...labelBase,
  fontSize: '12px',
};

const clearButtonTheme = {
  base: {
    bg: 'palette.error.10',
    icon: 'palette.surface.3',
  },
  hover: {
    bg: 'palette.error.20',
    icon: 'palette.surface.3',
  },
  active: {
    bg: 'palette.error.30',
    icon: 'palette.surface.3',
  },
};

export const autocompleteSelectTheme = {
  lg: {
    baseProps: baseLgProps,
    placeholderBase: placeholderLgBase,
    labelBase: labelLgBase,
    inactive: {
      ...baseLgProps,
      bg: 'palette.surface.4',
      borderColor: 'palette.tertiary.5',
      text: 'palette.tertiary.70',
      placeholder: { ...placeholderLgBase, text: 'palette.tertiary.40' },
      label: {
        ...labelLgBase,
        text: 'palette.primary.60',
      },
    },
    hover: {
      ...baseLgProps,
      bg: 'palette.surface.5',
      borderColor: 'palette.primary.40',
      text: 'palette.primary.99',
      placeholder: { ...placeholderLgBase, text: 'palette.tertiary.40' },
      label: {
        ...labelLgBase,
        text: 'palette.primary.60',
      },
    },
    focus: {
      ...baseLgProps,
      bg: 'palette.surface.5',
      borderColor: 'palette.primary.40',
      text: 'palette.primary.99',
      outlineWidth: '1px',
      outlineColor: 'palette.primary.40',
      placeholder: {
        ...placeholderLgBase,
        text: 'palette.transparent',
      },
      label: {
        ...labelLgBase,
        text: 'palette.primary.60',
      },
    },
    disabled: {
      ...baseLgProps,
      bg: 'palette.neutral.5',
      borderColor: 'palette.transparent',
      text: 'palette.neutral.30',
      placeholder: {
        ...placeholderLgBase,
        text: 'palette.neutral.30',
      },
      label: {
        ...labelLgBase,
        text: 'palette.neutral.30',
      },
    },
    error: {
      ...baseLgProps,
      bg: 'palette.surface.5',
      borderColor: 'palette.error.60',
      text: 'palette.primary.99',
      placeholder: {
        ...placeholderLgBase,
        text: 'palette.error.70',
      },
      helpText: {
        text: 'palette.error.70',
        fontFamily: baseThemeValues.inherit,
        fontWeight: 400,
        fontSize: '12px',
      },
      label: {
        ...labelLgBase,
        text: 'palette.primary.60',
      },
    },
    openArrowColor: 'palette.tertiary.70',
    scrollBar: {
      ...scrollbarTheme,
      thumb: 'palette.tertiary.20',
      borderWidth: '3px',
      width: '9px',
    },
    optionsList: {
      borderWidth: '0px',
      borderRadius: '6px',
      borderColor: 'palette.transparent',
      boxShadowColor: 'palette.black',
      verticalGap: '0px',
      horizontalGap: '0px',
      bg: 'palette.surface.4',
      divider: {
        height: '1px',
        verticalGap: '0px',
        bg: 'palette.transparent',
      },
    },
    options: {
      optionsBase: optionsLgBase,
      base: {
        ...optionsLgBase,
        bg: 'palette.transparent',
        text: 'palette.tertiary.70',
      },
      hover: {
        ...optionsLgBase,
        bg: 'palette.surface.5',
        text: 'palette.primary.99',
      },
      active: {
        ...optionsLgBase,
        bg: 'palette.tertiary.20',
        text: 'palette.primary.99',
      },
      selected: {
        ...optionsLgBase,
        bg: 'palette.transparent',
        text: 'palette.primary.100',
      },
      disabled: {
        ...optionsLgBase,
        bg: 'palette.transparent',
        text: 'palette.neutral.10',
      },
    },
    highlightedSearch: 'palette.primary.20',
    clearButton: clearButtonTheme,
    loadingText: {
      fontFamily: baseThemeValues.inherit,
      fontWeight: 500,
      fontSize: '20px',
      text: 'palette.primary.99',
    },
    mulitTags: {
      tag: {
        bg: 'palette.transparent',
        borderRadius: '12px',
        borderWidth: '1px',
        borderColor: 'palette.neutral.10',
        removeButton: 'palette.primary.99',
        text: 'palette.primary.99',
        fontFamily: baseThemeValues.inherit,
        fontWeight: 500,
        fontSize: '12px',
      },
      totalTag: {
        bg: 'palette.primary.20',
        text: 'palette.primary.99',
        borderRadius: '12px',
        borderWidth: '0px',
        borderColor: 'palette.transparent',
        fontFamily: baseThemeValues.inherit,
        fontWeight: 500,
        fontSize: '12px',
      },
    },
  },
  sm: {
    baseProps: baseSmProps,
    placeholderBase: placeholderSmBase,
    labelBase: labelSmBase,

    inactive: {
      ...baseSmProps,
      bg: 'palette.surface.4',
      borderColor: 'palette.tertiary.5',
      text: 'palette.tertiary.70',
      placeholder: { ...placeholderSmBase, text: 'palette.tertiary.40' },
      label: {
        ...labelSmBase,
        text: 'palette.primary.60',
      },
    },
    hover: {
      ...baseSmProps,
      bg: 'palette.surface.5',
      borderColor: 'palette.primary.40',
      text: 'palette.primary.99',
      placeholder: { ...placeholderSmBase, text: 'palette.tertiary.40' },
      label: {
        ...labelSmBase,
        text: 'palette.primary.60',
      },
    },
    focus: {
      ...baseSmProps,
      bg: 'palette.surface.5',
      borderColor: 'palette.primary.40',
      text: 'palette.primary.99',
      outlineWidth: '1px',
      outlineColor: 'palette.primary.40',
      placeholder: {
        ...placeholderSmBase,
        text: 'palette.transparent',
      },
      label: {
        ...labelSmBase,
        text: 'palette.primary.60',
      },
    },
    disabled: {
      ...baseSmProps,
      bg: 'palette.neutral.5',
      borderColor: 'palette.transparent',
      text: 'palette.neutral.30',
      placeholder: {
        ...placeholderSmBase,
        text: 'palette.neutral.30',
      },
      label: {
        ...labelSmBase,
        text: 'palette.neutral.20',
      },
    },
    error: {
      ...baseSmProps,
      bg: 'palette.surface.5',
      borderColor: 'palette.error.60',
      text: 'palette.primary.99',
      placeholder: { ...placeholderSmBase, text: 'palette.error.70' },
      helpText: {
        text: 'palette.error.70',
        fontFamily: baseThemeValues.inherit,
        fontWeight: 400,
        fontSize: '12px',
      },
      label: {
        ...labelSmBase,
        text: 'palette.primary.60',
      },
    },
    openArrowButton: buttonTheme.icon,
    openArrowColor: 'palette.secondary.70',
    scrollBar: {
      ...scrollbarTheme,
      thumb: 'palette.tertiary.20',
      borderWidth: '3px',
      width: '9px',
    },
    optionsList: {
      borderWidth: '0px',
      borderRadius: '6px',
      borderColor: 'palette.transparent',
      boxShadowColor: 'palette.black:0.3',
      verticalGap: '0px',
      horizontalGap: '0px',
      bg: 'palette.surface.4',
      divider: {
        height: '1px',
        verticalGap: '0px',
        bg: 'palette.transparent',
      },
    },
    options: {
      optionsBase: optionsSmBase,
      base: {
        ...optionsSmBase,
        bg: 'palette.transparent',
        text: 'palette.tertiary.70',
      },
      hover: {
        ...optionsSmBase,
        bg: 'palette.surface.5',
        text: 'palette.primary.99',
      },
      active: {
        ...optionsSmBase,
        bg: 'palette.tertiary.20',
        text: 'palette.primary.99',
      },
      selected: {
        ...optionsSmBase,
        bg: 'palette.transparent',
        text: 'palette.primary.100',
      },
      disabled: {
        ...optionsSmBase,
        bg: 'palette.transparent',
        text: 'palette.neutral.10',
      },
    },
    highlightedSearch: 'palette.primary.20',
    clearButton: clearButtonTheme,
    loadingText: {
      fontFamily: baseThemeValues.inherit,
      fontWeight: 500,
      fontSize: '16px',
      text: 'palette.primary.99',
    },
    mulitTags: {
      tag: {
        bg: 'palette.transparent',
        borderRadius: '12px',
        borderWidth: '1px',
        borderColor: 'palette.neutral.10',
        removeButton: 'palette.primary.99',
        text: 'palette.primary.99',
        fontFamily: baseThemeValues.inherit,
        fontWeight: 500,
        fontSize: '12px',
      },
      totalTag: {
        bg: 'palette.primary.20',
        text: 'palette.primary.99',
        borderRadius: '12px',
        borderWidth: '0px',
        borderColor: 'palette.transparent',
        fontFamily: baseThemeValues.inherit,
        fontWeight: 500,
        fontSize: '12px',
      },
    },
  },
};
