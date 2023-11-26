import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import FormikCheckbox from 'components/Form/FormikCheckbox';

export const ScheduleItemContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr 4fr;
  column-gap: 16px;
`;

export const Error = styled.div`
  color: ${getPrefixedVar(['routingRuleset', 'form', 'error'])};
  margin-top: 2px;
  min-height: 17px;
`;

export const StyledFormikCheckbox = styled(FormikCheckbox)`
  margin-top: 20px;
`;
