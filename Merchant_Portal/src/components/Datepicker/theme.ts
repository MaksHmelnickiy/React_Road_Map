import { baseThemeValues } from 'constants/common';

const baseDatePresetTooltipButton = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: '400',
  fontSize: '14px',
  borderRadius: '6px',
  borderWidth: '1px',
};

const baseButtonProps = {
  fontWeight: 600,
  fontSize: '14px',
  fontFamily: baseThemeValues.inherit,
  boxShadow: 'palette.transparent',
  outlineColor: 'palette.transparent',
  outlineWidth: '0px',
  borderRadius: '6px',
};

const baseOutlinedProps = {
  ...baseButtonProps,
  borderWidth: '1px',
};

const basePrimaryProps = {
  ...baseButtonProps,
  borderWidth: '0px',
};

const dayBase = {
  fontFamily: baseThemeValues.inherit,
  fontSize: '14px',
  borderRadius: '40px',
};

const presetButtonBase = {
  fontFamily: baseThemeValues.inherit,
  fontWeight: '600',
  fontSize: '14px',
  borderWidth: '1px',
  borderRadius: '56px',
};

const presetButton = {
  base: {
    ...presetButtonBase,
    bg: 'palette.transparent',
    text: 'palette.neutral.40',
    borderColor: 'palette.neutral.10',
  },
  hover: {
    ...presetButtonBase,
    bg: 'palette.transparent',
    borderColor: 'palette.neutral.90',
    text: 'palette.neutral.90',
  },
  pressed: {
    ...presetButtonBase,
    bg: 'palette.surface.5',
    borderColor: 'palette.neutral.50',
    text: 'palette.neutral.90',
  },
  selected: {
    ...presetButtonBase,
    bg: 'palette.primary.20',
    borderColor: 'palette.primary.20',
    text: 'palette.primary.99',
  },
};

const nextArrowButton = {
  base: {
    fontFamily: baseThemeValues.inherit,
    fontWeight: 400,
    fontSize: '12px',
    bg: 'palette.surface.5',
    text: 'palette.primary.99',
  },
  hover: {
    fontFamily: baseThemeValues.inherit,
    fontWeight: 400,
    fontSize: '12px',
    bg: 'palette.surface.4',
    text: 'palette.primary.99',
  },
  pressed: {
    fontFamily: baseThemeValues.inherit,
    fontWeight: 400,
    fontSize: '12px',
    bg: 'palette.surface.3',
    text: 'palette.primary.99',
  },
  active: {
    fontFamily: baseThemeValues.inherit,
    fontWeight: 400,
    fontSize: '12px',
    bg: 'palette.primary.20',
    text: 'palette.primary.99',
  },
};

export const datepickerTheme = {
  container: {
    bg: 'palette.surface.3',
    borderRadius: '12px',
    boxShadowColor: 'palette.black:0.5',
  },
  datePresetTooltipButton: {
    base: {
      ...baseDatePresetTooltipButton,
      bg: 'palette.surface.4',
      borderColor: 'palette.tertiary.5',
      text: 'palette.tertiary.40',
    },
    hover: {
      ...baseDatePresetTooltipButton,
      bg: 'palette.surface.4',
      borderColor: 'palette.neutral.90',
      text: 'palette.neutral.90',
    },
    pressed: {
      ...baseDatePresetTooltipButton,
      bg: 'palette.surface.5',
      borderColor: 'palette.neutral.50',
      text: 'palette.neutral.90',
    },
  },
  controlButtons: {
    cancelButton: {
      base: {
        ...baseOutlinedProps,
        bg: 'palette.transparent',
        borderColor: 'palette.neutral.10',
        text: 'palette.neutral.40',
      },
      hover: {
        ...baseOutlinedProps,
        bg: 'palette.transparent',
        borderColor: 'palette.neutral.90',
        text: 'palette.neutral.90',
      },
      pressed: {
        ...baseOutlinedProps,
        bg: 'palette.surface.5',
        borderColor: 'palette.neutral.50',
        text: 'palette.neutral.90',
      },
    },
    applyButton: {
      base: {
        ...basePrimaryProps,
        bg: 'palette.primary.20',
        text: 'palette.primary.99',
      },
      hover: {
        ...basePrimaryProps,
        bg: 'palette.primary.40',
        text: 'palette.primary.99',
      },
      pressed: {
        ...basePrimaryProps,
        bg: 'palette.primary.30',
        text: 'palette.primary.99',
      },
      disabled: {
        ...basePrimaryProps,
        bg: 'palette.neutral.5',
        text: 'palette.neutral.40',
      },
    },
  },
  monthLabel: {
    fontFamily: baseThemeValues.inherit,
    fontWeight: 500,
    fontSize: '16px',
    text: 'palette.primary.99',
  },
  calendarMenuButton: {
    base: {
      icon: 'palette.tertiary.40',
      bg: 'palette.transparent',
      borderRadius: '4px',
    },
    hover: {
      icon: 'palette.primary.99',
      bg: 'palette.transparent',
      borderRadius: '4px',
    },
    pressed: {
      icon: 'palette.primary.99',
      bg: 'palette.surface.4',
      borderRadius: '4px',
    },
    active: {
      icon: 'palette.primary.99',
      bg: 'palette.primary.20',
      borderRadius: '4px',
    },
  },
  weekDay: {
    fontFamily: baseThemeValues.inherit,
    fontWeight: 500,
    fontSize: '14px',
    text: 'palette.neutral.80',
  },
  day: {
    base: {
      ...dayBase,
      fontWeight: 400,
      text: 'palette.neutral.80',
      bg: 'palette.transparent',
    },
    current: {
      ...dayBase,
      fontWeight: 400,
      text: 'palette.primary.99',
      bg: 'palette.tertiary.5',
    },
    disabled: {
      ...dayBase,
      fontWeight: 400,
      text: 'palette.neutral.10',
      bg: 'palette.transparent',
    },
    isSelected: {
      ...dayBase,
      fontWeight: 500,
      bg: 'palette.primary.20',
      text: 'palette.primary.99',
    },
    hover: {
      ...dayBase,
      fontWeight: 500,
      bg: 'palette.tertiary.30',
      text: 'palette.primary.99',
    },
    isRangeSelected: {
      ...dayBase,
      fontWeight: 500,
      bg: 'palette.surface.4',
      text: 'palette.primary.60',
    },
  },
  dayBg: {
    isSelected: {
      bg: 'palette.surface.4',
      borderColor: 'palette.transparent',
    },
    hover: {
      bg: 'palette.tertiary.30',
      borderColor: 'palette.tertiary.30',
    },
  },
  datePreset: {
    container: {
      bg: 'palette.surface.5',
      borderColor: 'palette.tertiary.5',
    },
    button: presetButton,
    input: {
      base: {
        fontFamily: baseThemeValues.inherit,
        fontWeight: '400',
        fontSize: '14px',
        bg: 'palette.surface.4',
        borderColor: 'palette.tertiary.5',
        text: 'palette.tertiary.40',
        placeholder: 'palette.tertiary.20',
      },
      hover: {
        fontFamily: baseThemeValues.inherit,
        fontWeight: '400',
        fontSize: '14px',
        bg: 'palette.surface.5',
        borderColor: 'palette.tertiary.20',
        text: 'palette.tertiary.40',
        placeholder: 'palette.tertiary.30',
      },
    },
  },
  calendarInnerMenu: {
    button: presetButton,
  },
  maskedTimeInput: {
    activeIcon: 'palette.primary.99',
  },
  timePickerElement: {
    label: 'palette.tertiary.40',
  },
  timeGroup: {
    bg: 'palette.tertiary.10',
    button: nextArrowButton,
  },
};
