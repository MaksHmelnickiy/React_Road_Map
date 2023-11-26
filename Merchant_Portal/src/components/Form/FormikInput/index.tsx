import React from 'react';
import { useTranslation } from 'react-i18next';

import { useField } from 'formik';

import { appReactMemo } from 'hocs';

import Input from '../../Controls/Input';
import { IInputProps } from '../../Controls/Input/styled';

interface IFormikInput extends IInputProps {
  valueValidator?: (value: string) => boolean;
  externalError?: string;
}

const FormikInput = ({
  name = '',
  showError = true,
  isAnimatedLabel = false,
  shouldValidate = false,
  sizeVariant = 'sm',
  valueValidator,
  onChange,
  externalError,
  ...rest
}: IFormikInput) => {
  const { t } = useTranslation();
  const [field, meta, helpers] = useField(name);

  const onChangeHandler = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const isValid = valueValidator?.(value) ?? true;
      if (isValid) {
        helpers.setValue(value, false);
        helpers.setError(undefined);
      }
      onChange?.(e);
    },
    [valueValidator]
  );

  const onBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      helpers.setTouched(true, shouldValidate);
      rest.onBlur?.(e);
    },
    [rest.onBlur]
  );

  return (
    <Input
      {...rest}
      {...field}
      value={field.value ?? ''}
      onChange={shouldValidate ? field.onChange : onChangeHandler}
      onBlur={onBlur}
      showError={showError}
      error={!!(meta.error && meta.touched) || !!externalError}
      errorMessage={t(meta.error as never) || externalError}
      isAnimatedLabel={isAnimatedLabel}
      sizeVariant={sizeVariant}
    />
  );
};

export default appReactMemo(FormikInput);
