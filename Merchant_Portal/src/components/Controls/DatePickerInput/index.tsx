import React from 'react';
import { useTranslation } from 'react-i18next';

import { IDatepickerChildrenProps } from '@private/datepicker';
import { useUpdateEffect } from '@private/hooks';
import { format } from 'date-fns';

import Input from 'components/Controls/Input';
import Datepicker, { IDatepicker } from 'components/Datepicker';
import {
  DATE_MASK,
  DATE_TIME_MASK,
  LOCAL_DATE_MASK,
  TIMEZONE_MASK,
} from 'constants/common';
import { appReactMemo } from 'hocs';

export type TDateValue = { startDate: string; endDate: string };

export interface IDatePickerInput extends Omit<IDatepicker, 'children'> {
  value?: TDateValue | string;
  sizeVariant?: 'sm' | 'lg';
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  inputMask?: string;
  showError?: boolean;
  error?: boolean;
  errorMessage?: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  iconSize?: number;
}

interface IInputComponent
  extends Omit<IDatePickerInput, 'onChange'>,
    Partial<IDatepickerChildrenProps> {
  hideTime?: boolean;
}

const InputComponent = ({
  value,
  sizeVariant = 'lg',
  label,
  placeholder,
  disabled,
  inputMask,
  showError,
  error,
  errorMessage,
  setStartDate,
  setEndDate,
  hideTime,
  startDate,
  endDate,
}: IInputComponent) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'common.datepicker.datepickerInput',
  });

  const calendarValue = value as TDateValue | undefined;

  useUpdateEffect(() => {
    const mask = hideTime ? LOCAL_DATE_MASK : TIMEZONE_MASK;
    const calendarStartValue = startDate && format(new Date(startDate), mask);
    const calendarEndValue = endDate && format(new Date(endDate), mask);

    if (calendarStartValue !== calendarValue?.startDate) {
      setStartDate?.({ value: calendarValue?.startDate || null, format: mask });
    }

    if (calendarEndValue !== calendarValue?.endDate) {
      setEndDate?.({ value: calendarValue?.endDate || null, format: mask });
    }
  }, [calendarValue]);

  useUpdateEffect(() => {
    if (typeof value === 'object' && !value?.startDate) {
      setStartDate?.({ value: null });
    }
  }, [calendarValue?.startDate]);

  useUpdateEffect(() => {
    if (typeof value === 'object' && !value?.endDate) {
      setEndDate?.({ value: null });
    }
  }, [calendarValue?.endDate]);

  const getValue = () => {
    if (!value) {
      return '';
    }

    if (typeof value === 'string') {
      const isDateStart =
        hideTime || Number(new Date(value)) === new Date(value).setHours(0, 0, 0, 0);

      return format(
        new Date(value),
        inputMask || (isDateStart ? DATE_MASK : DATE_TIME_MASK)
      );
    }

    const fromTimeStart =
      hideTime ||
      Number(new Date(value.startDate)) ===
        new Date(value.startDate).setHours(0, 0, 0, 0);
    const toTimeStart =
      hideTime ||
      Number(new Date(value.endDate)) === new Date(value.endDate).setHours(0, 0, 0, 0);

    return `${format(
      new Date(value.startDate),
      inputMask || (fromTimeStart ? DATE_MASK : DATE_TIME_MASK)
    )} - ${format(
      new Date(value.endDate),
      inputMask || (toTimeStart ? DATE_MASK : DATE_TIME_MASK)
    )}`;
  };

  return (
    <Input
      readOnly
      label={label || t('label')}
      placeholder={placeholder || t('placeholder')}
      isAnimatedLabel={false}
      value={getValue()}
      sizeVariant={sizeVariant}
      disabled={disabled}
      showError={showError}
      error={error}
      errorMessage={errorMessage}
    />
  );
};

const DatePickerInput = ({
  value,
  sizeVariant = 'lg',
  label,
  placeholder,
  disabled,
  inputMask,
  showError,
  error,
  errorMessage,
  startIcon,
  endIcon,
  iconSize,
  ...restProps
}: IDatePickerInput) => {
  const { hideTime } = restProps.settingsConfig || {};

  const initialDate = React.useMemo(() => {
    if (!value) {
      return;
    }

    if (typeof value === 'string') {
      return {
        start: {
          value,
          format: hideTime ? LOCAL_DATE_MASK : TIMEZONE_MASK,
        },
      };
    }

    return {
      start: {
        value: value.startDate,
        format: hideTime ? LOCAL_DATE_MASK : TIMEZONE_MASK,
      },
      end: {
        value: value.endDate,
        format: hideTime ? LOCAL_DATE_MASK : TIMEZONE_MASK,
      },
    };
  }, []);

  const inputProps = {
    sizeVariant,
    label,
    placeholder,
    disabled,
    inputMask,
    showError,
    error,
    errorMessage,
    value,
    hideTime,
    startIcon,
    endIcon,
    iconSize,
  };

  if (disabled) {
    return <InputComponent {...inputProps} />;
  }

  return (
    <Datepicker {...restProps} initialDate={initialDate}>
      {(datepickerProps) => (
        <div>
          <InputComponent {...inputProps} {...datepickerProps} />
        </div>
      )}
    </Datepicker>
  );
};

export default appReactMemo(DatePickerInput);
