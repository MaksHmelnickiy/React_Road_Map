import React from 'react';
import { useTranslation } from 'react-i18next';

import { useFormikContext } from 'formik';

import { IAccordionHeaderProps } from 'components/Accordion';
import { appReactMemo } from 'hocs';

import { AddBlock, StyledSwitch, TimeHint, TwoThirdsColumnSplit } from '../../../styled';
import { IRoutingRulesetForm } from '../../../utils/types';

const Header = ({ contentHeight, openHandler }: IAccordionHeaderProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'routingRuleset.form' });

  const { setFieldValue } = useFormikContext<IRoutingRulesetForm>();

  const onEnableSchedule = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      openHandler(checked);
      setFieldValue('schedule.periodsByDays', checked ? {} : null, false);
    },
    []
  );

  return (
    <TwoThirdsColumnSplit>
      <StyledSwitch
        name='schedule.enabled'
        label={t(`fields.schedule`)}
        onChange={onEnableSchedule}
      />
      <AddBlock $isVisible={!!contentHeight}>
        <TimeHint variant='bold' size='sm'>
          {t('timeHint')}
        </TimeHint>
      </AddBlock>
    </TwoThirdsColumnSplit>
  );
};

export default appReactMemo(Header);
