import { TSelectSizes } from '@private/components';
import { getFontBase } from '@private/payment';
import styled, { css } from 'styled-components';

import CountryFlag from 'components/CountryFlag';

export const Flag = styled(CountryFlag)`
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
`;

export const Name = styled.div<{ size?: TSelectSizes }>`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ size = 'lg' }) => css`
    ${getFontBase(['components', 'autocompleteSelect', size, 'options', 'base'])};
  `}
`;
