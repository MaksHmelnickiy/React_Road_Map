import React from 'react';

import { Form, Formik, FormikHelpers } from 'formik';

import { appReactMemo } from 'hocs';
import { PageContainer } from 'routes/pages/AuthorizedStack/styled';

import Feature from './Feature';
import General from './General';
import Header from './Header';
import { ITerminalLinkForm } from './helpers';
import { PageBody, SectionList } from './styled';

interface ITerminalLinkFormInfo {
  initialValues: ITerminalLinkForm;
  onSubmit: (
    values: ITerminalLinkForm,
    helpers: FormikHelpers<ITerminalLinkForm>
  ) => void;
  onBack: () => void;
}

const TerminalLinkForm = ({ initialValues, onSubmit, onBack }: ITerminalLinkFormInfo) => {
  return (
    <PageContainer>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Header onBack={onBack} />
          <PageBody>
            <SectionList>
              <General />
              <Feature />
            </SectionList>
          </PageBody>
        </Form>
      </Formik>
    </PageContainer>
  );
};

export default appReactMemo(TerminalLinkForm);
