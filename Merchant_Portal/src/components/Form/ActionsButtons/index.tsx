import React from 'react';
import { useTranslation } from 'react-i18next';

import { useFormikContext } from 'formik';

import Button from 'components/Button';
import { appReactMemo } from 'hocs';

import { Container } from './styled';

interface IFormActions {
  isEdit?: boolean;
  onBack: () => void;
}

const FormActions = ({ isEdit, onBack }: IFormActions) => {
  const { t } = useTranslation('translation', { keyPrefix: 'common' });
  const { isSubmitting } = useFormikContext();

  return (
    <Container>
      <Button variant='outlined' onClick={onBack}>
        {t('cancel')}
      </Button>
      <Button
        type='submit'
        variant='primary'
        disabled={isSubmitting}
        isLoading={isSubmitting}
      >
        {isEdit ? t('save') : t('create')}
      </Button>
    </Container>
  );
};

export default appReactMemo(FormActions);
