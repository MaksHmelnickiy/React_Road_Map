import React from 'react';

import { useField } from 'formik';

import { appReactMemo } from 'hocs';

import SwitchInput from '../../Controls/SwitchInput';
import { IFormikSwitchProps } from '../FormikSwitch';

interface ISwitchInputProps extends IFormikSwitchProps {
  showError?: boolean;
  onFieldChange?: IFormikSwitchProps['onChange'];
}

const FormikSwitchInput = ({
  name,
  onChange,
  onFieldChange,
  showError = true,
  ...rest
}: ISwitchInputProps) => {
  const [field, meta, helpers] = useField(name);

  const changeHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      if (onFieldChange) {
        onFieldChange?.(e, checked);
      } else {
        helpers.setValue(checked);
      }
      onChange?.(e, checked);
    },
    [onFieldChange, onChange]
  );

  return (
    <SwitchInput
      {...rest}
      {...field}
      checked={!!field.value}
      onChange={changeHandler}
      errorMessage={
        meta.touched && typeof meta.error === 'string' ? meta.error : undefined
      }
      showError={showError}
    />
  );
};

export default appReactMemo(FormikSwitchInput);
