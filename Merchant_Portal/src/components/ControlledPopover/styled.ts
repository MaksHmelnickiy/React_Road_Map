import { tooltipClasses } from '@private/components';
import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Popover from 'components/Popover';

import Button from '../Button';

export const StyledPopover = styled(Popover)`
  ${tooltipClasses.message} {
    width: 320px;
    background: ${getPrefixedVar(['components', 'controlledPopover', 'bg'])};
  }
`;

export const MessageContainer = styled.div`
  min-width: 240px;
  padding: 12px 16px 20px;
`;

export const CloseButton = styled(Button)`
  margin-left: auto;
  min-width: 20px;
  min-height: 20px;
`;
