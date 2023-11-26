import React from 'react';
import { useTranslation } from 'react-i18next';

import { ICheckboxProps } from '@private/components';
import { useField } from 'formik';

import Checkbox from 'components/Controls/Checkbox';
import { appReactMemo } from 'hocs';

interface IFormikCheckbox extends ICheckboxProps {
  name: string;
  onFieldChange?: ICheckboxProps['onChange'];
}

const FormikCheckbox: React.FC<IFormikCheckbox> = ({
  name,
  label,
  onChange,
  onFieldChange,
  ...rest
}) => {
  const { t, i18n } = useTranslation();
  const [field, _meta, _helpers] = useField(name || '');

  const changeHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onFieldChange) {
        return onFieldChange(e);
      }
      field.onChange(e);
      onChange?.(e);
    },
    [onFieldChange, onChange]
  );

  return (
    <Checkbox
      {...rest}
      {...field}
      onChange={changeHandler}
      checked={!!field.value}
      label={label && i18n.exists(label) ? t(label as never) : label}
    />
  );
};

export default appReactMemo(FormikCheckbox);
