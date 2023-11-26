import React from 'react';
import { MutateOptions } from 'react-query/types/core/types';
import { Navigate, useParams } from 'react-router-dom';

import {
  ICashierPaymentMethod,
  IPaymentMethodPayload,
  IUpdatePaymentMethod,
} from 'api/cashierPaymentMethods/types';
import Loader from 'components/Loader';
import {
  useGetPaymentMethod,
  useUpdatePaymentMethod,
} from 'queries/cashierPaymentMethods';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';
import { QueryError } from 'utils/types';

import PaymentMethodForm from '../Form';
import { initialValues } from '../Form/helpers';

const CreatePaymentMethod = () => {
  const { id = '' } = useParams();

  const { data: paymentMethod, isLoading, isError } = useGetPaymentMethod(id);
  const { mutate: updatePaymentMethod } = useUpdatePaymentMethod();

  const initialData = React.useMemo(() => {
    if (isLoading) {
      return initialValues;
    }

    return {
      organization: null, // TODO
      merchant: paymentMethod!.merchantTerminalId || null,
      name: paymentMethod!.cashierPaymentMethodName || null,
      logo: paymentMethod!.logoData || null,
    };
  }, []);

  const onEdit = React.useCallback(
    (
      values: IPaymentMethodPayload,
      options?: MutateOptions<ICashierPaymentMethod, QueryError, IUpdatePaymentMethod>
    ) => {
      updatePaymentMethod({ id, payload: values }, options);
    },
    []
  );

  if (!id || isError) {
    return <Navigate to={ROUTES.MERCHANTS_SETTINGS.SUB_PATH.PAYMENT_METHODS.PATH} />;
  }

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <PaymentMethodForm
      onSave={onEdit}
      initialValues={initialData}
      methodCode={paymentMethod!.cashierPaymentMethodCode}
    />
  );
};

export default CreatePaymentMethod;
