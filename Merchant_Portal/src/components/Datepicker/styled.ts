import {
  autocompleteSelectClasses,
  inputClasses,
  tooltipClasses,
} from '@private/components';
import { Datepicker, datepickerClasses, IDatepickerProps } from '@private/datepicker';
import {
  getBaseThemeProps,
  getBorderBase,
  getFontBase,
  getPrefixedVar,
} from '@private/payment';
import styled, { css } from 'styled-components';

import { getButtonTheme } from 'components/Button/styled';
import { getAutocompleteTheme } from 'components/Controls/AutocompleteSelect/styled';
import { getInputTheme } from 'components/Controls/Input/styled';
import { getSwitchTheme } from 'components/Controls/Switch/styled';

const prefix = ['components', 'datepicker'];

const getDatePresetTooltipButtonTheme = (prefix: string[]) => {
  return css`
    background: ${getPrefixedVar(prefix, 'bg')};
    ${getFontBase(prefix)};
    ${getBorderBase(prefix)};
  `;
};

const getCalendarMenuButtonTheme = (prefix: string[]) => {
  return css`
    color: ${getPrefixedVar(prefix, 'icon')};
    background: ${getPrefixedVar(prefix, 'bg')};
    border-radius: ${getPrefixedVar(prefix, 'borderRadius')};
  `;
};

const getDayTheme = (prefix: string[]) => {
  return css`
    ${getFontBase(prefix)};
    background: ${getPrefixedVar(prefix, 'bg')};
    border-radius: ${getPrefixedVar(prefix, 'borderRadius')};
  `;
};

export const StyledDatePicker = styled(Datepicker)<IDatepickerProps>`
  ${tooltipClasses.wrapper} {
    z-index: 1005;
  }

  &${tooltipClasses.wrapper} {
    z-index: 1005;
  }

  &${datepickerClasses.datepickerPopover} {
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    z-index: 1005;
  }

  ${tooltipClasses.message} {
    background: transparent;
  }

  ${datepickerClasses.datepickerContainer} {
    background: ${getPrefixedVar(prefix, 'container', 'bg')};
    box-shadow: 0px 4px 22px ${getPrefixedVar(prefix, 'container', 'boxShadowColor')};
    border-radius: ${getPrefixedVar(prefix, 'container', 'borderRadius')};
  }

  ${datepickerClasses.datepickerCalendarsContainer} {
    & > :nth-child(2) {
      border: none;
    }
  }

  ${datepickerClasses.timeSwitch} {
    ${getSwitchTheme()};
  }

  ${datepickerClasses.cancelButton} {
    height: 40px;
    min-width: 80px;
    ${getButtonTheme([...prefix, 'controlButtons', 'cancelButton'])};
  }

  ${datepickerClasses.applyButton} {
    height: 40px;
    min-width: 80px;
    ${getButtonTheme([...prefix, 'controlButtons', 'applyButton'])};
  }

  ${datepickerClasses.datePresetTooltipButton} {
    min-width: 280px;
    height: 36px;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    border-style: solid;
    transition: all 0.3s ease;

    ${getDatePresetTooltipButtonTheme([...prefix, 'datePresetTooltipButton', 'base'])}

    &:hover {
      ${getDatePresetTooltipButtonTheme([...prefix, 'datePresetTooltipButton', 'hover'])}
    }

    &:active {
      ${getDatePresetTooltipButtonTheme([
        ...prefix,
        'datePresetTooltipButton',
        'pressed',
      ])}
    }
  }

  ${datepickerClasses.typeTimeContainer} {
    background: ${getPrefixedVar(prefix, 'timeGroup', 'bg')};
  }

  ${datepickerClasses.typeTimeButton} {
    border: none;
    background: ${getPrefixedVar(prefix, 'timeGroup', 'button', 'base', 'bg')};
    ${getFontBase([...prefix, 'timeGroup', 'button', 'base'])};

    &[data-is-selected='false'] {
      &:hover {
        background: ${getPrefixedVar(prefix, 'timeGroup', 'button', 'hover', 'bg')};
        ${getFontBase([...prefix, 'button', 'hover'])};
      }

      &:active {
        background: ${getPrefixedVar(prefix, 'timeGroup', 'button', 'pressed', 'bg')};
        ${getFontBase([...prefix, 'button', 'pressed'])};
      }
    }

    &[data-is-selected='true'] {
      background: ${getPrefixedVar(prefix, 'timeGroup', 'button', 'active', 'bg')};
      ${getFontBase([...prefix, 'button', 'active'])};
    }
  }

  ${datepickerClasses.timezoneSelect} {
    ${getAutocompleteTheme(['components', 'autocompleteSelect', 'sm'])}

    ${autocompleteSelectClasses.option} {
      min-height: 36px;
      white-space: normal;
      display: flex;
      align-items: center;
      padding: 5px 35px 5px 14px;
    }
  }

  ${datepickerClasses.calendarMenuOpenButton} {
    ${getCalendarMenuButtonTheme([...prefix, 'calendarMenuButton', 'base'])};

    &:hover {
      ${getCalendarMenuButtonTheme([...prefix, 'calendarMenuButton', 'hover'])};
    }

    &:active {
      ${getCalendarMenuButtonTheme([...prefix, 'calendarMenuButton', 'pressed'])};
    }

    &[data-is-active='true'] {
      ${getCalendarMenuButtonTheme([...prefix, 'calendarMenuButton', 'active'])};
    }
  }

  ${datepickerClasses.monthLabel} {
    ${getFontBase([...prefix, 'monthLabel'])}
  }

  ${datepickerClasses.monthButton}, ${datepickerClasses.calendarMenuYearButton} {
    ${getButtonTheme(['components', 'button', 'icon'])};
  }

  ${datepickerClasses.weekdaysWrapper} {
    ${getFontBase([...prefix, 'weekDay'])};
    margin-bottom: 14px;
  }

  ${datepickerClasses.dayLabel} {
    ${getFontBase([...prefix, 'weekDay'])};
  }

  ${datepickerClasses.day} {
    ${getDayTheme([...prefix, 'day', 'base'])};

    &[data-is-сurrent='true'] {
      ${getDayTheme([...prefix, 'day', 'current'])};
    }

    &[data-is-disabled='true'] {
      ${getDayTheme([...prefix, 'day', 'disabled'])};
    }

    &[data-is-selected-start='true'],
    &[data-is-selected-end='true'] {
      ${getDayTheme([...prefix, 'day', 'isSelected'])};
    }

    &[data-is-hovered='true'][data-is-selected='false'] {
      ${getDayTheme([...prefix, 'day', 'hover'])};
    }

    &[data-is-current-hover='true'] {
      &:hover {
        ${getDayTheme([...prefix, 'day', 'hover'])};
      }
    }

    &[data-is-selected='true'] {
      ${getDayTheme([...prefix, 'day', 'isRangeSelected'])};
    }
  }

  ${datepickerClasses.dayBackground} {
    &[data-is-start-selected='true'],
    &[data-is-selected-end='true'],
    &[data-is-selected='true'],
    &[data-is-selected-first-of-week='true'],
    &[data-is-selected-last-of-week='true'] {
      background: ${getPrefixedVar(prefix, 'dayBg', 'isSelected', 'bg')};
    }

    &[data-is-start-hovered='true'],
    &[data-is-hover-range='true'],
    &[data-is-hovered='true'],
    &[data-is-hover-range-first-of-week='true'],
    &[data-is-hover-range-last-of-week='true'] {
      border-color: ${getPrefixedVar(prefix, 'dayBg', 'hover', 'borderColor')};
    }
  }

  ${datepickerClasses.datePresetContainer} {
    min-width: 458px;
    background: ${getPrefixedVar(prefix, 'datePreset', 'container', 'bg')};
  }

  ${datepickerClasses.datePresetButtonsContainer} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${datepickerClasses.datePresetButton} {
    ${getButtonTheme([...prefix, 'datePreset', 'button'])}
  }

  ${datepickerClasses.datePresetInputsContainer} {
    height: 36px;
    background: ${getPrefixedVar(prefix, 'datePreset', 'input', 'base', 'bg')};
    border-color: ${getPrefixedVar(prefix, 'datePreset', 'input', 'base', 'borderColor')};
    transition: all 0.3s ease;

    &:hover {
      background: ${getPrefixedVar(prefix, 'datePreset', 'input', 'hover', 'bg')};
      border-color: ${getPrefixedVar(
        prefix,
        'datePreset',
        'input',
        'hover',
        'borderColor'
      )};

      ${datepickerClasses.datePresetInput} ${inputClasses.input}::placeholder {
        color: ${getPrefixedVar(prefix, 'datePreset', 'input', 'hover', 'placeholder')};
      }

      ${datepickerClasses.datePresetSelect} ${autocompleteSelectClasses.input}::placeholder {
        color: ${getPrefixedVar(prefix, 'datePreset', 'input', 'hover', 'placeholder')};
      }
    }
  }

  ${datepickerClasses.datePresetInput} {
    ${inputClasses.input} {
      height: 34px;
      ${getFontBase([...prefix, 'datePreset', 'input', 'base'])}

      &::placeholder {
        color: ${getPrefixedVar(prefix, 'datePreset', 'input', 'base', 'placeholder')};
      }

      &:focus::placeholder {
        color: transparent !important;
      }
    }
  }

  ${datepickerClasses.datePresetSelect} {
    ${getAutocompleteTheme(['components', 'autocompleteSelect', 'sm'])}

    ${autocompleteSelectClasses.input} {
      ${getFontBase([...prefix, 'datePreset', 'input', 'base'])}

      &::placeholder {
        color: ${getPrefixedVar(prefix, 'datePreset', 'input', 'base', 'placeholder')};
      }
    }

    ${autocompleteSelectClasses.inputWrapper}:hover ${autocompleteSelectClasses.input}::placeholder {
      color: ${getPrefixedVar(prefix, 'datePreset', 'input', 'hover', 'placeholder')};
    }

    ${autocompleteSelectClasses.inputWrapper} ${autocompleteSelectClasses.input}:focus::placeholder {
      color: transparent;
    }

    ${autocompleteSelectClasses.option} {
      min-height: 36px;
    }

    ${autocompleteSelectClasses.inputWrapper} {
      &,
      &:hover,
      &[data-is-focused='true'] {
        min-height: 34px;
        background: transparent;
        border-color: transparent;
        box-shadow: none;
      }
    }

    ${autocompleteSelectClasses.optionsWrapper} {
      min-width: 410px;
      width: 410px;
    }
  }

  ${datepickerClasses.calendarMenuTitle} {
    color: ${getPrefixedVar(prefix, 'calendarMenu', 'title')};
  }

  ${datepickerClasses.calendarMenuButton} {
    ${getButtonTheme([...prefix, 'calendarInnerMenu', 'button'])}
    padding: 0;

    &[data-is-selected='true'] {
      ${getBaseThemeProps([...prefix, 'calendarInnerMenu', 'button', 'selected'])};

      background: ${getPrefixedVar(
        [...prefix, 'calendarInnerMenu', 'button', 'selected'],
        'bg'
      )};
    }
  }

  ${datepickerClasses.maskedTimeInputWrapper} {
    &[data-is-active-time='true'] ${inputClasses.iconButton} {
      color: ${getPrefixedVar([...prefix, 'maskedTimeInput', 'activeIcon'])};
    }
  }

  ${datepickerClasses.maskedTimeInput} {
    ${getInputTheme(['components', 'input', 'sm'])}
  }

  ${datepickerClasses.timePickerElementLabel} {
    color: ${getPrefixedVar([...prefix, 'timePickerElement', 'label'])};
  }

  ${datepickerClasses.timePickerElementControlButton} {
    ${getButtonTheme(['components', 'button', 'icon'])};
  }

  ${datepickerClasses.timePickerElementInput} {
    ${getInputTheme(['components', 'input', 'lg'])}
  }
`;
