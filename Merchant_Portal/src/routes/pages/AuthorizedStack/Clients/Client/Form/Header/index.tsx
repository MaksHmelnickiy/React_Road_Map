import React from 'react';
import { useTranslation } from 'react-i18next';

import { useFormikContext } from 'formik';

import BreadCrumb from 'components/BreadCrumb';
import Button from 'components/Button';
import { appReactMemo } from 'hocs';
import { PageHeader, PageTitle } from 'routes/pages/AuthorizedStack/styled';

import { ButtonsContainer } from './styled';

interface IHeader {
  onBack: () => void;
  isNew?: boolean;
}

const Header = ({ onBack, isNew }: IHeader) => {
  const { t } = useTranslation();

  const { isSubmitting } = useFormikContext();

  return (
    <PageHeader>
      <div>
        <PageTitle>
          {isNew ? t('client.form.titleCreate') : t('client.form.titleEdit')}
        </PageTitle>
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
          {isNew ? t('common.create') : t('common.save')}
        </Button>
      </ButtonsContainer>
    </PageHeader>
  );
};

export default appReactMemo(Header);
