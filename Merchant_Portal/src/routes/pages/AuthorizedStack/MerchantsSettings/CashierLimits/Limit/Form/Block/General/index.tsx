import React from 'react';
import { useTranslation } from 'react-i18next';

import FormikCountrySelect from 'components/Form/FormikCountrySelect';
import FormikSelect from 'components/Form/FormikSelect';
import Section from 'components/Form/FormSection';
import { appReactMemo } from 'hocs';

import { NAVIGATION_OPTIONS } from '../../helpers';
import { DoubleColumn } from '../../styled';

interface IGeneral {
  isNew?: boolean;
}

const General = ({ isNew }: IGeneral) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'cashierLimits.form.fields',
  });

  return (
    <Section
      sectionKey={NAVIGATION_OPTIONS.GENERAL}
      keyPrefix='cashierLimits.form.sections'
    >
      <DoubleColumn>
        <FormikSelect
          label={t('merchant')}
          placeholder={t('merchant')}
          name='merchant'
          options={[]}
          size='sm'
          disabled={!isNew}
        />
        <FormikCountrySelect
          label={t('country')}
          placeholder={t('country')}
          name='country'
          size='sm'
        />
      </DoubleColumn>
    </Section>
  );
};

export default appReactMemo(General);
