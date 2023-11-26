import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useLocation, useNavigate, useParams } from 'react-router-dom';

import { FormikHelpers } from 'formik';

import { ILimitForm } from 'api/cashierLimits/types';
import Loader from 'components/Loader';
import { useEditLimit, useGetLimitGeneralInfo } from 'queries/cashierLimits';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';
import { getFormErrors } from 'utils/common';
import { QueryError } from 'utils/types';

import LimitForm from './Form';

const EditLimit = () => {
  const { t } = useTranslation();
  const { id = '' } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const { data: cashierLimitInfo, isLoading: isLoadingDetails } =
    useGetLimitGeneralInfo(id);

  const onBack = React.useCallback(() => {
    if (location.state === ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.PATH) {
      navigate(-1);
    } else {
      navigate(ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.PATH);
    }
  }, []);

  const { mutate: editLimit } = useEditLimit();

  const onSubmit = React.useCallback(
    (payload: ILimitForm, helpers: FormikHelpers<ILimitForm>) => {
      editLimit(
        { id, payload },
        {
          onError: (resp: QueryError) => {
            helpers.setErrors(
              getFormErrors({ getTranslation: t, errors: resp?.response?.data?.errors })
            );
          },
          onSuccess: (response) => {
            const { PATH } = ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS;
            const navigatePath = generatePath(PATH, {
              [PATH]: response.id.toString(),
            });

            navigate(navigatePath);
          },
          onSettled: () => {
            helpers.setSubmitting(false);
          },
        }
      );
    },
    []
  );

  const initialData = React.useMemo((): ILimitForm => {
    return {
      merchantTerminalId: cashierLimitInfo?.merchantTerminalId || null,
      paymentMethod: cashierLimitInfo?.paymentMethod || null,
      operation: cashierLimitInfo?.operation || null,
      country: cashierLimitInfo?.countryCode || null,
      currency: cashierLimitInfo?.currency || null,
      minAmount: cashierLimitInfo?.minAmount || null,
      maxAmount: cashierLimitInfo?.maxAmount || null,
    };
  }, [cashierLimitInfo]);

  if (isLoadingDetails) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return <LimitForm onBack={onBack} initialValues={initialData} onSubmit={onSubmit} />;
};

export default EditLimit;
