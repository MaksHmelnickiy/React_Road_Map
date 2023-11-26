import { Tags } from '@private/components';
import { getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['components', 'transferEnter'];

export const Container = styled.div<{ disabled?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: ${getPrefixedVar([...prefix, 'bg'])};
  border-radius: ${getPrefixedVar([...prefix, 'borderRadius'])};
  transition: all 0.3s ease;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled(Typography)`
  position: relative;
  margin-right: 8px;
  color: ${getPrefixedVar([...prefix, 'title'])};
`;

export const ErrorMessage = styled(Typography)`
  margin-top: 8px;
  color: ${getPrefixedVar([...prefix, 'errorMessage'])};
`;

export const SelectText = styled(Typography)`
  margin-top: 8px;
  color: ${getPrefixedVar([...prefix, 'subtitle'])};
`;

export const StyledTags = styled(Tags)`
  margin-top: 8px;
`;
