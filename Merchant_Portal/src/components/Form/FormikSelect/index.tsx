import React from 'react';
import { useTranslation } from 'react-i18next';

import { TSelectValue } from '@private/components';
import { useField } from 'formik';

import { IAutocompleteSelect } from 'components/Controls/AutocompleteSelect/styled';
import { appReactMemo } from 'hocs';

import AutocompleteSelect from '../../Controls/AutocompleteSelect';

export interface IFormikSelect extends IAutocompleteSelect {
  name: string;
  shouldValidate?: boolean;
  enablePreselect?: boolean;
}

const FormikSelect = ({
  name,
  options,
  showError = true,
  onChange,
  shouldValidate = false,
  enableRemoveButton = true,
  placeholder,
  size = 'sm',
  enablePreselect,
  disableUnselect = true,
  ...rest
}: IFormikSelect) => {
  const { t } = useTranslation();

  const [field, meta, helpers] = useField(name);

  React.useEffect(() => {
    if (enablePreselect && options.length === 1) {
      const [option] = options;
      helpers.setValue(option.value);
    }
  }, [options]);

  const onSelectOption = React.useCallback(
    (value: TSelectValue) => {
      helpers.setValue(value ?? null, false);
      helpers.setError(undefined);
      onChange?.(value);
    },
    [onChange]
  );

  const onBlur = React.useCallback(() => {
    helpers.setTouched(true, !field.value && shouldValidate);
  }, [field.value]);

  return (
    <AutocompleteSelect
      {...rest}
      options={options}
      value={rest.multiselect ? field.value || [] : field.value}
      size={size}
      enableRemoveButton={enableRemoveButton && field.value !== null}
      onChange={onSelectOption}
      onBlur={onBlur}
      showError={showError}
      error={!!(meta.error && meta.touched && showError)}
      errorMessage={meta.error}
      disableUnselect={disableUnselect}
      placeholder={placeholder || t('common.dontSet')}
    />
  );
};

export default appReactMemo(FormikSelect);
