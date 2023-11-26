import React from 'react';
import { useTranslation } from 'react-i18next';

import { useFormikContext } from 'formik';

import BreadCrumb from 'components/BreadCrumb';
import Button from 'components/Button';
import { appReactMemo } from 'hocs';
import { PageHeader, ViewTitle } from 'routes/pages/AuthorizedStack/styled';

import { ButtonsContainer } from '../styled';

interface IHeader {
  onBack: () => void;
}

const Header = ({ onBack }: IHeader) => {
  const { t } = useTranslation();

  const { isSubmitting } = useFormikContext();

  return (
    <PageHeader>
      <div>
        <ViewTitle as='h1'>{t('terminalLink.create')}</ViewTitle>
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
