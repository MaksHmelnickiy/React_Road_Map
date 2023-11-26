import React from 'react';

import { useField } from 'formik';

import { ITimeChange } from 'components/Controls/PeriodInputs';
import { appReactMemo } from 'hocs';

import { Error, StyledPeriodInputs } from './styled';

interface ITime {
  name: string;
  label: string;
}

const Time = ({ name, label }: ITime) => {
  const [_field, { error }, { setValue }] = useField(name);

  const onTimeChange: ITimeChange = React.useCallback(({ msecs }) => {
    setValue(msecs);
  }, []);

  return (
    <div>
      <StyledPeriodInputs label={label} sizeVariant='sm' onTimeChange={onTimeChange} />
      <Error size='xs'>{error}</Error>
    </div>
  );
};

export default appReactMemo(Time);
