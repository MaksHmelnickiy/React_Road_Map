import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useLocation, useNavigate } from 'react-router-dom';

import { FormikHelpers } from 'formik';

import { useCreateTerminalLink } from 'queries/terminalsLinks';
import { ROUTES } from 'routes/config/constants';
import { getFormErrors } from 'utils/common';
import { QueryError } from 'utils/types';

import { initialValues, ITerminalLinkForm } from './Form/helpers';

import TerminalLinkForm from './Form';

const TERMINAL_LINK_ROUTE = ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS;

const CreateTerminalLink = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const { mutate: createTerminalLink } = useCreateTerminalLink();

  const onBack = React.useCallback(() => {
    const terminalLinkPath = TERMINAL_LINK_ROUTE.PATH;
    if (location.state === terminalLinkPath) {
      navigate(-1);
    } else {
      navigate(terminalLinkPath);
    }
  }, []);

  const onSubmit = React.useCallback(
    (values: ITerminalLinkForm, helpers: FormikHelpers<ITerminalLinkForm>) => {
      const { merchantId: _merchantId, bankId: _bankId, ...valuesPayload } = values;

      createTerminalLink(valuesPayload, {
        onError: (resp: QueryError) => {
          helpers.setErrors(
            getFormErrors({ getTranslation: t, errors: resp?.response?.data?.errors })
          );
        },
        onSuccess: (response) => {
          const { PATH, PARAMS } = TERMINAL_LINK_ROUTE.SUB_PATH.TERMINAL_LINK;
          const navigatePath = generatePath(PATH, { [PARAMS.ID]: response.id });

          navigate(navigatePath);
        },
        onSettled: () => {
          helpers.setSubmitting(false);
        },
      });
    },
    []
  );

  return (
    <TerminalLinkForm initialValues={initialValues} onBack={onBack} onSubmit={onSubmit} />
  );
};

export default CreateTerminalLink;
