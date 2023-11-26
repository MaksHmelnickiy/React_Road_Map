import React, { useCallback } from 'react';

import { IRadioSelectProps } from '@private/components';
import { useField } from 'formik';

import { appReactMemo } from 'hocs';

import RadioSelect from '../../Controls/RadioSelect';

interface IFormikRadioSelectProps extends IRadioSelectProps {
  mapping?: Record<string, unknown>;
}

const FormikRadioSelect = ({ name, mapping = {}, ...rest }: IFormikRadioSelectProps) => {
  const [field, , helpers] = useField(name || '');

  const onValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
      const reversedValue = mapping[value as keyof typeof mapping];
      const propertyExist = Object.prototype.hasOwnProperty.call(mapping, value);
      helpers.setValue(propertyExist ? reversedValue : value, false);
    },
    [mapping]
  );

  return (
    <RadioSelect {...rest} value={field.value?.toString()} onChange={onValueChange} />
  );
};

export default appReactMemo(FormikRadioSelect);
