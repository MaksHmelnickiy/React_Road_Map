import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { FormikHelpers } from 'formik';

import { useCreateRoutingRuleset } from 'queries/routingRules';
import { ROUTES } from 'routes/config/constants';
import { IRoutingRulesetForm } from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/utils/types';
import { getFormErrors } from 'utils/common';
import { QueryError } from 'utils/types';

import { initialValues } from './Form/utils/constants';

import RoutingRulesetForm from './Form';

const CreateRoutingRuleset = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const { mutate: createRuleset } = useCreateRoutingRuleset();

  const onBack = React.useCallback(() => {
    const rulesetsPath = ROUTES.TRAFFIC_MANAGEMENT.SUB_PATH.ROUTING_RULESET.PATH;
    if (location.pathname === rulesetsPath) {
      navigate(-1);
    } else {
      navigate(rulesetsPath);
    }
  }, []);

  const onSubmit = React.useCallback(
    (values: IRoutingRulesetForm, helpers: FormikHelpers<IRoutingRulesetForm>) => {
      createRuleset(values, {
        onError: (resp: QueryError) => {
          helpers.setErrors(
            getFormErrors({ getTranslation: t, errors: resp?.response?.data?.errors })
          );
        },
        onSuccess: onBack,
        onSettled: () => {
          helpers.setSubmitting(false);
        },
      });
    },
    []
  );

  return (
    <RoutingRulesetForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      onBack={onBack}
      isNew
    />
  );
};

export default CreateRoutingRuleset;
