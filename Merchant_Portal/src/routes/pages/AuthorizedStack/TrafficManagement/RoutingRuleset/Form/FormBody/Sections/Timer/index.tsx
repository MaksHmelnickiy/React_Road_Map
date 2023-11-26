import React from 'react';
import { useTranslation } from 'react-i18next';

import { useFormikContext } from 'formik';

import Accordion, { IAccordionHeaderProps } from 'components/Accordion';
import FormikInput from 'components/Form/FormikInput';
import { INTEGER_REG_EXP } from 'constants/common';
import { appReactMemo } from 'hocs';
import {
  StyledSection,
  StyledSwitch,
  TripleColumn,
} from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/styled';
import { IRoutingRulesetForm } from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/utils/types';

import Time from './Time';

const TimerHeader = ({ openHandler }: IAccordionHeaderProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'routingRuleset.form' });

  const onEnableTimer = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      openHandler(checked);
    },
    []
  );

  return (
    <TripleColumn>
      <StyledSwitch
        name='timer.enabled'
        label={t(`fields.enableTimer`)}
        onChange={onEnableTimer}
      />
    </TripleColumn>
  );
};

const Timer = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'routingRuleset.form' });

  const {
    values: { timer },
    setFieldValue,
  } = useFormikContext<IRoutingRulesetForm>();

  const { failedAttempts, processedAttempts, unlimitedProcessedAttempts } = timer || {};

  const onSwitchChange = <T,>(name: string, value: T) =>
    React.useCallback((e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setFieldValue(name, { enabled: checked, ...value }, false);
    }, []);

  const onFailedAttemptsChange = onSwitchChange('timer.failedAttempts', {
    retryCount: null,
    recoveryPeriod: null,
  });
  const onProcessedAttemptsChange = onSwitchChange('timer.processedAttempts', {
    retryCount: null,
  });
  const onUnlimitedProcessedAttemptsChange = onSwitchChange(
    'timer.unlimitedProcessedAttempts.validityPeriod',
    null
  );

  return (
    <StyledSection keyPrefix='routingRuleset.form.sections' sectionKey='timer'>
      <Accordion header={(props) => <TimerHeader {...props} />}>
        <TripleColumn>
          <StyledSwitch
            name='timer.failedAttempts.enabled'
            label={t(`fields.failedAttempts`)}
            onChange={onFailedAttemptsChange}
          />
          {failedAttempts?.enabled && (
            <>
              <FormikInput
                name='timer.failedAttempts.retryCount'
                label={t(`fields.amountInEur`)}
                regExp={INTEGER_REG_EXP}
                placeholder='0'
              />
              <Time
                name='timer.failedAttempts.recoveryPeriod'
                label={t(`fields.setRecoveryPeriod`)}
              />
            </>
          )}
        </TripleColumn>
        <TripleColumn>
          <StyledSwitch
            name='timer.processedAttempts.enabled'
            label={t(`fields.processedAttempts`)}
            onChange={onProcessedAttemptsChange}
          />
          {processedAttempts?.enabled && (
            <FormikInput
              name='timer.processedAttempts.retryCount'
              label={t(`fields.retryCount`)}
              regExp={INTEGER_REG_EXP}
              placeholder='0'
            />
          )}
        </TripleColumn>
        <TripleColumn>
          <StyledSwitch
            name='timer.unlimitedProcessedAttempts.enabled'
            label={t(`fields.unlimitedProcessedAttempts`)}
            onChange={onUnlimitedProcessedAttemptsChange}
          />
          {unlimitedProcessedAttempts?.enabled && (
            <Time
              name='timer.unlimitedProcessedAttempts.validityPeriod'
              label={t(`fields.validityPeriod`)}
            />
          )}
        </TripleColumn>
      </Accordion>
    </StyledSection>
  );
};

export default appReactMemo(Timer);
