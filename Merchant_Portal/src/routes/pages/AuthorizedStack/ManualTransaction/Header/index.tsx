import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useFormikContext } from 'formik';

import BreadCrumb from 'components/BreadCrumb';
import Button from 'components/Button';
import { appReactMemo } from 'hocs';

import { PageHeader, PageTitle } from '../../styled';

import { ButtonsContainer } from './styled';

const Header = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { isSubmitting } = useFormikContext();

  const onBack = React.useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <PageHeader>
      <div>
        <PageTitle as='h1'>{t('manualTransaction.title')}</PageTitle>
        <BreadCrumb />
      </div>
      <ButtonsContainer>
        <Button variant='outlined' size='lg' onClick={onBack}>
          {t('common.cancel')}
        </Button>
        <Button
          type='submit'
          variant='primary'
          size='lg'
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {t('common.create')}
        </Button>
      </ButtonsContainer>
    </PageHeader>
  );
};

export default appReactMemo(Header);
