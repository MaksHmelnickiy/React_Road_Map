import React from 'react';
import { useTranslation } from 'react-i18next';

import FormikDatePicker from 'components/Form/FormikDatePicker';
import FormikInput from 'components/Form/FormikInput';
import { DECIMAL_REG_EXP } from 'constants/common';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { StyledSection, TripleColumn } from '../../styled';

import CountryRow from './CountryRow';

const Clients = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'routingRuleset.form' });

  const datePickerConfig = React.useMemo(
    () => ({
      settingsConfig: { hideTime: true },
    }),
    []
  );

  return (
    <StyledSection keyPrefix='routingRuleset.form.sections' sectionKey='clients'>
      <CountryRow
        sectionName='customer'
        name='country'
        label={t(`fields.filterByRegisteredCountry`)}
      />
      <CountryRow
        sectionName='customer'
        name='countryGroup'
        label={t(`fields.filterByRegisteredCountryGroup`)}
      />
      <CountryRow sectionName='customer' name='ip' label={t(`fields.filterByClientIp`)} />
      <TripleColumn>
        <FormikInput
          name='customer.daysFromReg'
          label={t(`fields.minimumDaysFromRegistration`)}
          regExp={DECIMAL_REG_EXP}
          placeholder='0'
        />
        <FormikDatePicker
          name='customer.regBeforeDate'
          label={t(`fields.registeredBefore`)}
          placeholder='0'
          variant='datepicker'
          sizeVariant='sm'
          inputMask='dd/MM/yyy'
          valueMask='yyyy-MM-dd'
          settingsConfig={datePickerConfig.settingsConfig}
          endIcon={<ICONS_MAP.Calendar />}
          iconSize={16}
        />
        <FormikInput
          name='customer.daysFromFtd'
          label={t(`fields.minimumDaysFromFtd`)}
          regExp={DECIMAL_REG_EXP}
          placeholder='0'
        />
      </TripleColumn>
    </StyledSection>
  );
};

export default appReactMemo(Clients);
