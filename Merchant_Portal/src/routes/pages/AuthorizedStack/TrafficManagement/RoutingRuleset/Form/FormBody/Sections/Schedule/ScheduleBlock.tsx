import React from 'react';
import { useTranslation } from 'react-i18next';

import { useField } from 'formik';

import FormikTimeInput from 'components/Form/FormikTimeInput';
import { appReactMemo } from 'hocs';
import { INullable } from 'utils/types';

import { HOURS_TIME_CONFIG } from '../../../utils/constants';
import { IWeekDaySchedule } from '../../../utils/types';

import { Error, ScheduleItemContainer, StyledFormikCheckbox } from './styled';

interface IScheduleBlock {
  label: string;
  value: string;
}

const ScheduleBlock = ({ label, value }: IScheduleBlock) => {
  const { t } = useTranslation();

  const [field, meta, helpers] = useField<INullable<IWeekDaySchedule>>(
    `schedule.periodsByDays.${value}`
  );

  const checkHandler = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const value = checked ? { from: null, to: null } : null;
    helpers.setValue(value);
  }, []);

  const getError = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { from: fromError, to: toError } = meta.error || {};

    const message = [];

    if (fromError && meta.touched) {
      message.push(fromError);
    }

    if (toError && meta.touched) {
      // message.push(fromError);
    }

    return message.join(', ');
  };

  return (
    <div>
      <ScheduleItemContainer>
        <StyledFormikCheckbox
          name={`schedule.periodsByDays.${value}`}
          label={label}
          onChange={checkHandler}
        />
        <FormikTimeInput
          name={`schedule.periodsByDays.${value}.from`}
          label={t(`routingRuleset.form.fields.timeFrom`)}
          timeConfig={HOURS_TIME_CONFIG}
          placeholder={t(`common.time.timeFormat`)}
          disabled={!field.value}
          showError={false}
        />
        <FormikTimeInput
          name={`schedule.periodsByDays.${value}.to`}
          label={t(`routingRuleset.form.fields.timeTo`)}
          timeConfig={HOURS_TIME_CONFIG}
          placeholder={t(`common.time.timeFormat`)}
          disabled={!field.value}
          showError={false}
        />
      </ScheduleItemContainer>
      <Error>{getError()}</Error>
    </div>
  );
};

export default appReactMemo(ScheduleBlock);
