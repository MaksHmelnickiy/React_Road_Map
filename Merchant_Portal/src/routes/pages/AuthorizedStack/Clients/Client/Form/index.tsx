import React from 'react';

import { Form, Formik, FormikHelpers } from 'formik';

import { IClientForm } from 'api/clients/types';
import Navigation from 'components/Form/FormNavigation';
import { appReactMemo } from 'hocs';
import { PageContainer } from 'routes/pages/AuthorizedStack/styled';

import Additional from './Blocks/Additional';
import ClientInfo from './Blocks/ClientInfo';
import General from './Blocks/General';

import Header from './Header';
import { defaultValues, NAVIGATION_LIST } from './helpers';
import { PageBody, SectionList } from './styled';

interface IClientFormInfo {
  initialValues?: IClientForm;
  onSubmit: (values: IClientForm, helpers: FormikHelpers<IClientForm>) => void;
  onBack: () => void;
  isNew?: boolean;
}

const ClientForm = ({
  initialValues = defaultValues,
  onSubmit,
  onBack,
  isNew,
}: IClientFormInfo) => {
  return (
    <PageContainer>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Header onBack={onBack} isNew={isNew} />
          <PageBody>
            <Navigation
              navigationList={NAVIGATION_LIST}
              keyPrefix='client.form.sections'
            />
            <SectionList>
              <General isNew={isNew} />
              <ClientInfo />
              <Additional />
            </SectionList>
          </PageBody>
        </Form>
      </Formik>
    </PageContainer>
  );
};

export default appReactMemo(ClientForm);
