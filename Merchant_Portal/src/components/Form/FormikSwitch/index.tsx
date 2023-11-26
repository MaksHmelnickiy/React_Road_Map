import React from 'react';
import { useTranslation } from 'react-i18next';

import { ISwitchProps } from '@private/components';
import { useField } from 'formik';

import Switch from 'components/Controls/Switch';
import { appReactMemo } from 'hocs';

export interface IFormikSwitchProps extends ISwitchProps {
  name: string;
}

const FormikSwitch = ({ name, label, ...restProps }: IFormikSwitchProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'common' });

  const [field] = useField(name);

  const statusText = field.value ? t('active') : t('inactive');

  return (
    <Switch {...restProps} {...field} checked={field.value} label={label ?? statusText} />
  );
};

export default appReactMemo(FormikSwitch);
