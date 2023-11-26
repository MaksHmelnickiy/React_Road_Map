import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Button from 'components/Button';
import Status from 'components/Tags/Status';
import Typography from 'components/Typography';

export const Container = styled.div`
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Preview = styled.div`
  padding-top: 54%;
  position: relative;
  overflow: hidden;
`;

export const FitContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #292f4c;

  & > * {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: center;
  }
`;

export const Footer = styled.div<{ $isActive?: boolean }>`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 10px 12px 20px;

  background: ${({ $isActive }) =>
    getPrefixedVar(
      $isActive
        ? ['stylization', 'tiles', 'tile', 'active', 'bg']
        : ['stylization', 'tiles', 'tile', 'inactive', 'bg']
    )};
`;

export const Name = styled(Typography)`
  letter-spacing: 0.15px;
  color: ${getPrefixedVar(['stylization', 'tiles', 'tile', 'name'])};
`;

export const StyledStatus = styled(Status)`
  margin-top: 10px;
`;

export const ActionsButton = styled(Button)`
  margin-left: 16px;
`;
