import React from 'react';

import { Form, Formik, FormikHelpers } from 'formik';

import { ILimitForm } from 'api/cashierLimits/types';
import { appReactMemo } from 'hocs';
import { PageContainer } from 'routes/pages/AuthorizedStack/styled';

import General from './Block/General';
import Payment from './Block/Payment';
import Transaction from './Block/Transaction';

import Header from './Header';
import { defaultValues } from './helpers';
import { PageBody, SectionList } from './styled';

interface ILimitFormInfo {
  initialValues?: ILimitForm;
  onSubmit: (values: ILimitForm, helpers: FormikHelpers<ILimitForm>) => void;
  onBack: () => void;
  isNew?: boolean;
}

const LimitForm = ({
  initialValues = defaultValues,
  onSubmit,
  onBack,
  isNew,
}: ILimitFormInfo) => {
  return (
    <PageContainer>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Header onBack={onBack} isNew={isNew} />
          <PageBody>
            <SectionList>
              <General isNew={isNew} />
              <Payment />
              <Transaction />
            </SectionList>
          </PageBody>
        </Form>
      </Formik>
    </PageContainer>
  );
};

export default appReactMemo(LimitForm);
