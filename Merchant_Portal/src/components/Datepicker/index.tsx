import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  IDatepickerProps,
  IDatePresetButtonValues,
  IDatePresetSelectValues,
} from '@private/datepicker';
import locale from 'date-fns/locale/en-US';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { getPreviousMonthDate } from 'utils/common';

import { StyledDatePicker } from './styled';
import { timezones } from './timezones';

export type IDatepicker = Omit<
  IDatepickerProps,
  | 'open'
  | 'onOpen'
  | 'onClose'
  | 'locale'
  | 'timezonesList'
  | 'translationConfig'
  | 'datePresetButtonsValues'
  | 'datePresetSelectValues'
>;

const Datepicker = ({
  variant = 'double-range-picker',
  settingsConfig = {},
  config = {},
  ...restProps
}: IDatepicker) => {
  const { t } = useTranslation('translation', { keyPrefix: 'common.datepicker' });

  const [isOpen, setIsOpen] = React.useState(false);

  const onOpen = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const calendarConfig = React.useMemo(
    () => ({
      datePresetIcon: <ICONS_MAP.CalendarPreset />,
      calendarIcon: <ICONS_MAP.Calendar width={18} />,
      initialVisibleMonth:
        variant === 'double-range-picker' ? getPreviousMonthDate() : undefined,
      ...config,
    }),
    [config]
  );

  const translationConfig = React.useMemo(
    () => ({
      datePresetTitle: t('datePresetTitle'),
      datePresetInputPlaceholder: t('datePresetInputPlaceholder'),
      datePresetSelectPlaceholder: t('datePresetSelectPlaceholder'),
      cancelButtonText: t('cancelButtonText'),
      applyButtonText: t('applyButtonText'),
      timeLabel: t('timeLabel'),
      timezonesPlaceholder: t('timezonesPlaceholder'),
    }),
    []
  );

  const datePresetButtonsValues = React.useMemo(
    () =>
      [
        { label: t('presets.currentDay'), value: 'days', variant: 'current' },
        { label: t('presets.previousDay'), value: 'days', variant: 'prev' },
        { label: t('presets.currentWeek'), value: 'weeks', variant: 'current' },
        { label: t('presets.previousWeek'), value: 'weeks', variant: 'prev' },
        { label: t('presets.currentMonth'), value: 'months', variant: 'current' },
        { label: t('presets.previousMonth'), value: 'months', variant: 'prev' },
        { label: t('presets.currentYear'), value: 'years', variant: 'current' },
        { label: t('presets.previousYear'), value: 'years', variant: 'prev' },
      ] as IDatePresetButtonValues[],
    []
  );

  const datePresetSelectValues = React.useMemo(() => {
    const timePreset = {
      label: t('presets.previousHours'),
      value: 2,
      variant: 'prev',
      type: 'hours',
    } as IDatePresetSelectValues;
    const basePresets = [
      { label: t('presets.previousDays'), value: 4, variant: 'prev', type: 'days' },
      { label: t('presets.previousWeeks'), value: 6, variant: 'prev', type: 'weeks' },
      { label: t('presets.previousMonths'), value: 8, variant: 'prev', type: 'months' },
      { label: t('presets.previousYears'), value: 10, variant: 'prev', type: 'years' },
    ] as IDatePresetSelectValues[];

    return settingsConfig?.hideTime ? basePresets : [timePreset, ...basePresets];
  }, []);

  const localSettingsConfig = React.useMemo(
    () => ({
      hideInputs: true,
      switchedAndZoneTogether: true,
      timezoneOnTop: true,
      datepickerMenuInPopover: false,
      timepickerInPopovers: false,
      ...settingsConfig,
    }),
    [settingsConfig]
  );

  const timezonesList = React.useMemo(
    () =>
      timezones.map((item) => ({
        value: item.name,
        label: item.location,
      })),
    []
  );

  return (
    <StyledDatePicker
      {...restProps}
      variant={variant}
      open={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      locale={locale}
      timezonesList={timezonesList}
      config={calendarConfig}
      translationConfig={translationConfig}
      datePresetButtonsValues={datePresetButtonsValues}
      datePresetSelectValues={datePresetSelectValues}
      settingsConfig={localSettingsConfig}
    />
  );
};

export default appReactMemo(Datepicker);
