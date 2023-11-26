import { tooltipClasses } from '@private/components';
import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Popover from 'components/Popover';
import Typography from 'components/Typography';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar(['stylization', 'header', 'title'])};
`;

export const ThemeList = styled.div`
  flex: 1 1 auto;
  margin-top: 32px;
`;

export const ActionsPopover = styled(Popover)`
  ${tooltipClasses.message} {
    padding: 8px 0;
    min-width: 260px;
  }
`;
