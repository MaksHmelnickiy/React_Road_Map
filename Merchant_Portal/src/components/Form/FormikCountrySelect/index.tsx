import React from 'react';

import CountryOption from 'components/Form/FormikCountrySelect/CountryOption';
import { appReactMemo } from 'hocs';
import { useGetDictionaries } from 'queries/data';
import { getFormattedCountry } from 'utils/common';

import FormikSelect, { IFormikSelect } from '../FormikSelect';

const FormikCountrySelect = (props: Omit<IFormikSelect, 'options'>) => {
  const { size } = props;
  const { data } = useGetDictionaries();

  const countryOptions = React.useMemo(() => {
    const countriesOptions =
      data?.countryCode.map((countryCode) => {
        return {
          value: countryCode,
          component: <CountryOption countryCode={countryCode} size={size} />,
          label: getFormattedCountry(countryCode),
        };
      }) || [];

    return countriesOptions.sort((a, b) => {
      if (a.label < b.label) {
        return -1;
      }
      if (a.label > b.label) {
        return 1;
      }
      return 0;
    });
  }, [size, data?.countryCode]);

  return (
    <FormikSelect
      {...props}
      enableRemoveButton
      options={countryOptions}
      fullVisibleOption={false}
    />
  );
};

export default appReactMemo(FormikCountrySelect);
