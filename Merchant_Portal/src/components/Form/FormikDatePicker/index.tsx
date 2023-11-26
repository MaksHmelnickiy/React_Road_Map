import React from 'react';

import format from 'date-fns/format';
import { useField } from 'formik';

import { appReactMemo } from 'hocs';

import DatePickerInput, { IDatePickerInput } from '../../Controls/DatePickerInput';

interface IFormikDatePicker extends Partial<IDatePickerInput> {
  label: string;
  placeholder: string;
  sizeVariant: 'sm' | 'lg';
  name: string;
  valueMask?: string;
}

const FormikDatePicker: React.FC<IFormikDatePicker> = ({ name, valueMask, ...rest }) => {
  const [field, meta, helpers] = useField(name);

  const onSelectDate = React.useCallback(
    (value: string) => {
      helpers.setError(undefined);
      if (valueMask) {
        return helpers.setValue(value ? format(new Date(value), valueMask) : null, false);
      }
      helpers.setValue(value, false);
    },
    [valueMask]
  );

  return (
    <DatePickerInput
      {...rest}
      value={field.value}
      onChange={onSelectDate}
      showError
      error={!!(meta.touched && meta.error)}
      errorMessage={meta.error}
    />
  );
};

export default appReactMemo(FormikDatePicker);
