import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const Container = styled.div<{ $notInput?: boolean }>`
  display: flex;
  align-items: center;
  background: ${getPrefixedVar(['components', 'fieldWrapper', 'bg'])};
  border-radius: ${getPrefixedVar(['components', 'fieldWrapper', 'borderRadius'])};
  padding: ${({ $notInput }) => ($notInput ? '20px 24px' : '20px 24px 4px')};

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar(['components', 'fieldWrapper', 'title'])};
`;

export const Label = styled.div<{ $centered?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 0 0 35%;
  align-self: ${({ $centered }) => ($centered ? 'center' : 'flex-start')};
`;

export const Content = styled.div`
  flex: 1 1 auto;
`;
