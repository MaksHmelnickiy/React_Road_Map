import React from 'react';
import { useTranslation } from 'react-i18next';

import { useUpdateEffect } from '@private/hooks';

import { appReactMemo } from 'hocs';

import {
  getIntRegExp,
  HOUR_MSEC,
  MAX_HOURS,
  MAX_MINUTES,
  MAX_PERIOD_MINUTES,
  MINUTE_MSEC,
} from '../../../constants/common';
import Input from '../Input';

import { FiledColumn, HintText, Label, TimeFields } from './styled';

export type ITimeChange = (payload: {
  hours: string;
  minutes: string;
  msecs: number;
}) => void;

interface IPeriodInputsProps {
  label: string;
  sizeVariant: 'sm' | 'lg';
  onTimeChange: ITimeChange;
  className?: string;
  disabled?: boolean;
  initialValue?: number;
}

const PeriodInputs = ({
  label,
  sizeVariant,
  onTimeChange,
  className,
  disabled,
  initialValue,
}: IPeriodInputsProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'common.time' });

  const initialHours = initialValue ? Math.floor(initialValue / (1000 * 60 * 60)) : '';
  const initialMinutes =
    initialValue && initialHours
      ? (initialValue - initialHours * 1000 * 60 * 60) / (1000 * 60)
      : '';

  const [hours, setHours] = React.useState<string>(initialHours.toString() || '');
  const [minutes, setMinutes] = React.useState<string>(initialMinutes.toString() || '');

  useUpdateEffect(() => {
    const numMinutes = Number(minutes);
    const numHours = Number(hours);

    const msecs = numHours * HOUR_MSEC + numMinutes * MINUTE_MSEC;
    onTimeChange({ hours: hours.toString(), minutes: minutes.toString(), msecs });
  }, [hours, minutes]);

  const onHoursChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const numberValue = Number(value);
      if (numberValue >= MAX_HOURS) {
        setHours(MAX_HOURS.toString());
        if (numberValue > MAX_PERIOD_MINUTES) {
          return setMinutes(MAX_PERIOD_MINUTES.toString());
        }
        return;
      }

      setHours(value);
    },
    [minutes]
  );

  const onMinutesChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const numberValue = Number(value);

      if (Number(hours) === MAX_HOURS) {
        if (numberValue > MAX_PERIOD_MINUTES) {
          return setMinutes(MAX_PERIOD_MINUTES.toString());
        }
      }
      if (numberValue > MAX_MINUTES) {
        return setMinutes(MAX_MINUTES.toString());
      }

      setMinutes(value);
    },
    [hours, minutes]
  );

  return (
    <div className={className}>
      <Label variant='bold' size={sizeVariant === 'sm' ? 'xs' : 'sm'}>
        {label}
      </Label>
      <TimeFields>
        <FiledColumn>
          <Input
            value={hours}
            onChange={onHoursChange}
            regExp={getIntRegExp(0, 4)}
            placeholder={t('hh')}
            sizeVariant={sizeVariant}
            disabled={disabled}
          />
          <HintText size='xs'>{t('hours')}</HintText>
        </FiledColumn>
        <FiledColumn>
          <Input
            value={minutes}
            onChange={onMinutesChange}
            regExp={getIntRegExp()}
            placeholder={t('mm')}
            sizeVariant={sizeVariant}
            disabled={disabled}
          />
          <HintText size='xs'>{t('minutes')}</HintText>
        </FiledColumn>
      </TimeFields>
    </div>
  );
};

export default appReactMemo(PeriodInputs);
