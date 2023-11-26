import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import PeriodInputs from 'components/Controls/PeriodInputs';
import { TimeFields } from 'components/Controls/PeriodInputs/styled';
import Typography from 'components/Typography';

export const Label = styled(Typography)`
  color: ${getPrefixedVar(['routingRuleset', 'form', 'label'])};
`;

export const StyledPeriodInputs = styled(PeriodInputs)`
  ${TimeFields} {
    max-width: 200px;
  }
`;

export const Error = styled(Typography)`
  color: ${getPrefixedVar(['routingRuleset', 'form', 'error'])};
  margin-top: 2px;
  min-height: 17px;
`;
