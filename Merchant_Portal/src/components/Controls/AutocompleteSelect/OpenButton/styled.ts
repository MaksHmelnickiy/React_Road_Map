import { getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Button from 'components/Button';
import { ThemedElement } from 'utils/types';

interface IButtonProps {
  $isOpen?: boolean;
  inputReadOnly?: boolean;
}

export const StyledButton = styled(Button)<ThemedElement<IButtonProps>>`
  width: 24px;
  min-width: 24px;
  min-height: 24px;
  cursor: ${({ inputReadOnly }) => (inputReadOnly ? 'default' : 'pointer')};

  ${({ $isOpen, loading }) =>
    $isOpen &&
    !loading &&
    css`
      transform: scaleY(-1);
    `}

  ${({ themePrefix = ['components', 'autocompleteSelect', 'lg'] }) =>
    css`
      color: ${getPrefixedVar(themePrefix, 'openArrowColor')};
    `}
`;
