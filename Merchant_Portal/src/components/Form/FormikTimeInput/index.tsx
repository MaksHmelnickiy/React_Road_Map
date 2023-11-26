import React from 'react';
import { useTranslation } from 'react-i18next';
import { useIMask } from 'react-imask';

import { useUpdateEffect } from '@private/hooks';
import { useField } from 'formik';
import IMask from 'imask';

import { appReactMemo } from 'hocs';

import Input from '../../Controls/Input';
import { IInputProps } from '../../Controls/Input/styled';

interface IFormikTimeInput extends IInputProps {
  timeConfig: {
    mask?: string;
    hours: {
      from: number;
      to: number;
      maxLength: number;
    };
    minutes: {
      from: number;
      to: number;
      maxLength: number;
    };
  };
}

const FormikTimeInput = ({
  name = '',
  showError = true,
  isAnimatedLabel = false,
  shouldValidate = false,
  sizeVariant = 'sm',
  timeConfig,
  disabled,
  ...rest
}: IFormikTimeInput) => {
  const { t } = useTranslation();
  const [field, meta, helpers] = useField(name);

  const { mask = '`hh h : `mm m', hours, minutes } = timeConfig;

  const { ref, value, setValue } = useIMask(
    {
      mask,
      blocks: {
        hh: {
          mask: IMask.MaskedRange,
          from: hours.from,
          to: hours.to,
          maxLength: hours.maxLength,
        },
        mm: {
          mask: IMask.MaskedRange,
          from: minutes.from,
          to: minutes.to,
          maxLength: minutes.maxLength,
        },
      },
      lazy: !field.value,
      autofix: true,
      overwrite: true,
      placeholderChar: '0',
    },

    {
      onAccept: (maskedValue: string) => {
        if (disabled) {
          return;
        }

        helpers.setValue(maskedValue?.replace(/\s/g, ''), false);
        helpers.setError(undefined);
      },
    }
  );

  useUpdateEffect(() => {
    if (disabled) {
      setValue('');
    }
  }, [disabled]);

  const onBlur = React.useCallback(() => {
    helpers.setTouched(true, shouldValidate);
  }, []);

  return (
    <Input
      {...rest}
      inputRef={ref}
      value={field.value ? value : ''}
      onBlur={onBlur}
      showError={showError}
      error={!!(meta.error && meta.touched)}
      errorMessage={t(meta.error as never)}
      isAnimatedLabel={isAnimatedLabel}
      sizeVariant={sizeVariant}
      disabled={disabled}
    />
  );
};

export default appReactMemo(FormikTimeInput);
