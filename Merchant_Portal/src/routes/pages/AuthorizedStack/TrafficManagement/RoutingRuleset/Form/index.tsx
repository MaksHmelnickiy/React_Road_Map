import React from 'react';
import { useTranslation } from 'react-i18next';

import { Formik, FormikHelpers } from 'formik';

import FormikHeader from 'components/Form/Header/FormikHeader';
import Loader from 'components/Loader';
import { appReactMemo } from 'hocs';
import { useGetMerchantsScope } from 'queries/merchants';
import { NAVIGATION_LIST } from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/utils/constants';
import { LoaderContainer } from 'routes/styled';

import { IRoutingRulesetForm } from './utils/types';

import FormBody from './FormBody';
import { Container, FormContent, StyledFormNavigation } from './styled';

interface IForm {
  onBack: () => void;
  onSubmit: (
    values: IRoutingRulesetForm,
    helpers: FormikHelpers<IRoutingRulesetForm>
  ) => void;
  isNew?: boolean;
  initialValues: IRoutingRulesetForm;
}

const RoutingRulesetForm = ({ onSubmit, onBack, initialValues, isNew }: IForm) => {
  const { t } = useTranslation('translation', { keyPrefix: 'routingRuleset.form' });

  const { isLoading: isLoadingScope } = useGetMerchantsScope();

  if (isLoadingScope) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Container>
        <FormikHeader
          name='name'
          onBack={onBack}
          backText={t('back')}
          newNameText={t('unnamed')}
          namePlaceholder={t('name')}
          isNew={isNew}
        />
        <FormContent>
          <StyledFormNavigation
            navigationList={NAVIGATION_LIST}
            keyPrefix='routingRuleset.form.sections'
          />
          <FormBody />
        </FormContent>
      </Container>
    </Formik>
  );
};

export default appReactMemo(RoutingRulesetForm);
