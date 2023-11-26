import React from 'react';
import { useTranslation } from 'react-i18next';

import Section from 'components/Form/FormSection';
import { BINARY_OPTIONS, BINARY_REVERSE_MAPPING } from 'constants/common';
import { appReactMemo } from 'hocs';

import { NAVIGATION_OPTIONS, RADIO_FIELDS } from '../helpers';
import { RadioBlock, RadioSelect } from '../styled';

const Feature = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'terminalLink.form.fields' });

  return (
    <Section
      sectionKey={NAVIGATION_OPTIONS.FEATURE}
      keyPrefix='terminalLink.form.sections'
    >
      <RadioBlock>
        {RADIO_FIELDS.map((filed) => (
          <RadioSelect
            key={filed}
            label={t(`${filed}` as never)}
            name={filed}
            data={BINARY_OPTIONS}
            mapping={BINARY_REVERSE_MAPPING}
          />
        ))}
      </RadioBlock>
    </Section>
  );
};

export default appReactMemo(Feature);
