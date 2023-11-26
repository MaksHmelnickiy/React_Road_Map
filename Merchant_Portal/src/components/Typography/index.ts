import { getFontBase } from '@private/payment';
import styled from 'styled-components';

import { ThemedElement } from 'utils/types';

import Text, { ITypography } from './Text';

export default styled(Text)<ThemedElement<ITypography>>`
  margin: 0;
  padding: 0;
  line-height: 140%;
  letter-spacing: 0.01em;

  ${({ themePrefix, as = 'p', size = 'lg', variant = 'bold' }) => {
    if (themePrefix) {
      return getFontBase(themePrefix);
    }

    if (as === 'p') {
      const prefix = ['components', 'typography', 'p', variant, size];
      return getFontBase(prefix);
    }

    const prefix = ['components', 'typography', as as string];
    return getFontBase(prefix);
  }}
`;
