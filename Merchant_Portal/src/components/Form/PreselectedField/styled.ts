import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const Label = styled(Typography)`
  color: ${getPrefixedVar(['components', 'presetedField', 'label'])};
  padding-top: 3px;
`;

export const Value = styled(Typography)`
  color: ${getPrefixedVar(['components', 'presetedField', 'text'])};
  margin-top: 10px;
`;
