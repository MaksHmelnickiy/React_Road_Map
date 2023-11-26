import React from 'react';
import { MutateOptions } from 'react-query/types/core/types';

import {
  ICashierPaymentMethod,
  IPaymentMethodPayload,
} from 'api/cashierPaymentMethods/types';
import { useCreatePaymentMethod } from 'queries/cashierPaymentMethods';
import { QueryError } from 'utils/types';

import PaymentMethodForm from '../Form';
import { initialValues } from '../Form/helpers';

const CreatePaymentMethod = () => {
  const { mutate: createPaymentMethod } = useCreatePaymentMethod();

  const onCreate = React.useCallback(
    (
      values: IPaymentMethodPayload,
      options?: MutateOptions<ICashierPaymentMethod, QueryError, IPaymentMethodPayload>
    ) => {
      createPaymentMethod(values, options);
    },
    []
  );

  return <PaymentMethodForm onSave={onCreate} initialValues={initialValues} isNew />;
};

export default CreatePaymentMethod;
