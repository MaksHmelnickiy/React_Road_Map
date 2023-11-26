import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from '../Typography';

export const Container = styled.div<{ $isSmall?: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: ${({ $isSmall }) => ($isSmall ? '8px 16px' : '16px')};
`;

export const TextContainer = styled.div`
  break-inside: avoid-column;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${getPrefixedVar(['components', 'detail', 'icon'])};
  min-width: 24px;
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar(['components', 'detail', 'title'])};
`;

export const Text = styled(Typography)`
  color: ${getPrefixedVar(['components', 'detail', 'text'])};
  word-break: break-word;
`;
