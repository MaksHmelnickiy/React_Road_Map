import { radioSelectClasses } from '@private/components';
import styled from 'styled-components';

import Input from '../../Controls/Input';
import RadioSelect from '../../Controls/RadioSelect';

export const StyledRadioSelect = styled(RadioSelect)`
  padding-top: 25px;

  ${radioSelectClasses.radioGroup} {
    column-gap: 40px;
  }
`;

export const StyledInput = styled(Input)`
  padding-top: 25px;

  ${radioSelectClasses.radioGroup} {
    column-gap: 40px;
  }
`;
