import React from 'react';

import { useFormikContext } from 'formik';

import { CREDIT_CARD } from 'constants/common';
import { appReactMemo } from 'hocs';
import { useGetDictionaries } from 'queries/data';
import { useGetMerchant } from 'queries/merchants';
import Timer from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/FormBody/Sections/Timer';
import Transaction from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/FormBody/Sections/Transaction';

import { Sections } from '../styled';
import { IRoutingRulesetForm } from '../utils/types';

import Bin from './Sections/Bin';
import Clients from './Sections/Clients';
import CustomerStats from './Sections/CustomerStats';
import MainOptions from './Sections/MainOptions';
import NewRuleset from './Sections/NewRuleset';
import Schedule from './Sections/Schedule';

// interface IFormBody {
//   isNew?: boolean;
// }

const FormBody = () => {
  const {
    values: { merchantTerminalId, paymentMethod },
  } = useFormikContext<IRoutingRulesetForm>();

  const { data: appData } = useGetDictionaries();
  const { data: merchant } = useGetMerchant(merchantTerminalId);

  const statsEnabled = merchant?.merchantsFeatures?.useStatsForRouting;
  const timerEnabled = merchant?.merchantsFeatures?.preMemorisedRouting;
  const creditCardSelected = paymentMethod === CREDIT_CARD;

  const currencyOptions = React.useMemo(
    () =>
      appData?.currency?.map((currency) => ({ label: currency, value: currency })) || [],
    [appData?.currency]
  );

  return (
    <Sections>
      <NewRuleset />
      <MainOptions currencyOptions={currencyOptions} />
      <Transaction currencyOptions={currencyOptions} />
      <Clients />
      {creditCardSelected && <Bin />}
      <Schedule />
      {statsEnabled && <CustomerStats />}
      {timerEnabled && <Timer />}
    </Sections>
  );
};

export default appReactMemo(FormBody);
