import React from 'react';
import { useTranslation } from 'react-i18next';

import FormikInput from 'components/Form/FormikInput';
import { appReactMemo } from 'hocs';

import { FourColumnSplit, StyledSection } from '../../styled';
import { STATS_FIELDS } from '../../utils/constants';

const CustomerStats = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'routingRuleset.form' });

  return (
    <StyledSection keyPrefix='routingRuleset.form.sections' sectionKey='customerStats'>
      <FourColumnSplit>
        {STATS_FIELDS.map(({ name, regExp }) => (
          <FormikInput
            key={name}
            name={`stats.${name}`}
            label={t(`fields.${name}` as never)}
            regExp={regExp}
            placeholder='0'
          />
        ))}
      </FourColumnSplit>
    </StyledSection>
  );
};

export default appReactMemo(CustomerStats);
