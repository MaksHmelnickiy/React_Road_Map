import { radioSelectClasses } from '@private/components';
import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import RadioSelect from 'components/Controls/RadioSelect';
import Typography from 'components/Typography';

const prefix = ['terminalLinks', 'groupEdit'];

export const ItemsList = styled.div`
  flex: 1 1 auto;
  overflow: hidden auto;
  scrollbar-gutter: stable;
`;

export const EnableAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 10px;
  padding: 16px 25px 16px 20px;

  background: ${getPrefixedVar(prefix, 'enableAll', 'bg')};
`;

export const AllTitle = styled(Typography)`
  color: ${getPrefixedVar(prefix, 'enableAll', 'title')};
`;

export const StyledRadioSelect = styled(RadioSelect)`
  padding-top: 35px;

  ${radioSelectClasses.radioGroup} {
    column-gap: 40px;
  }
`;
