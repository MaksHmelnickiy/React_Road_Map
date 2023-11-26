import React from 'react';
import { useTranslation } from 'react-i18next';

import { TSelectValue } from '@private/components';
import { useField } from 'formik';

import Select from 'components/Controls/AutocompleteSelect';
import FormikInput from 'components/Form/FormikInput';
import { appReactMemo } from 'hocs';

import { TwoThirdsColumnSplit } from '../../../styled';
import { META_KEY_VALUES, METADATA_KEY_OPTIONS } from '../../../utils/constants';

const Metadata = () => {
  const { t } = useTranslation();

  const [keyName, setKeyName] = React.useState<META_KEY_VALUES | null>(null);
  const [field, meta, helpers] = useField('transaction.metadata');

  const onMetaChange = React.useCallback(
    (value: TSelectValue) => {
      const newValue = value as META_KEY_VALUES;
      const prevValue = keyName && field.value[keyName];
      setKeyName(newValue);
      const newMeta: Record<META_KEY_VALUES, string | null> = {
        exist: null,
        matches: null,
        notExist: null,
      };
      if (newValue) {
        newMeta[newValue] = prevValue;
      }
      helpers.setValue(newMeta, false);
    },
    [field.value]
  );

  const onValueChange = React.useCallback(() => {
    helpers.setError(undefined);
  }, []);

  return (
    <TwoThirdsColumnSplit>
      <Select
        value={keyName}
        options={METADATA_KEY_OPTIONS}
        label={t(`routingRuleset.form.fields.metadata`)}
        placeholder={t('common.dontSet')}
        enableRemoveButton={keyName !== null}
        onChange={onMetaChange}
        size='sm'
        showError
        error={!!(meta.error && meta.touched)}
        errorMessage={meta.error}
      />
      <FormikInput
        key={keyName}
        name={`transaction.metadata.${keyName}`}
        label={t(`routingRuleset.form.fields.key`)}
        placeholder={t(`routingRuleset.form.fields.key`)}
        disabled={!keyName}
        maxLength={1000}
        onChange={onValueChange}
        externalError={meta.error && meta.touched ? t('common.requiredField') : undefined}
      />
    </TwoThirdsColumnSplit>
  );
};

export default appReactMemo(Metadata);
