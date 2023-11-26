import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

export const HEADER_HEIGHT = 64;

export const Container = styled.header`
  flex: 0 0 ${HEADER_HEIGHT}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background: ${getPrefixedVar(['header', 'container'])};
`;

export const BrandWrapper = styled.div`
  cursor: pointer;
`;
