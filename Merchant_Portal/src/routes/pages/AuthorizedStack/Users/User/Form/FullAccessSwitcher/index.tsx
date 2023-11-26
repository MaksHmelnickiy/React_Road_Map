import React from 'react';
import { useTranslation } from 'react-i18next';

import { useFormikContext } from 'formik';

import { IUserForm } from 'api/users/types';
import Switch from 'components/Controls/Switch';
import FieldWrapper from 'components/Form/FieldWrapper';
import { appReactMemo } from 'hocs';

const FullAccessSwitcher = () => {
  const { t } = useTranslation();

  const { values, setFieldValue } = useFormikContext<IUserForm>();

  const fullAccessHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      setFieldValue('scope', { ...values.scope, fullAccess: checked });
    },
    [values.scope]
  );

  return (
    <FieldWrapper title={t('users.form.fullAccess')} notInput>
      <Switch
        checked={values.scope.fullAccess}
        onChange={fullAccessHandler}
        label={values.scope.fullAccess ? t('common.active') : t('common.inactive')}
      />
    </FieldWrapper>
  );
};

export default appReactMemo(FullAccessSwitcher);
