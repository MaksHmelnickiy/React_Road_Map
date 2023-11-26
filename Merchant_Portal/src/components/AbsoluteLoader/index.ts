import { AbsoluteLoader, absoluteLoaderClasses } from '@private/components';
import { getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import { ThemedElement } from 'utils/types';

export const getAbsoluteLoaderTheme = (prefix: string[]) => {
  return css`
    background: ${getPrefixedVar(prefix, 'bg')};

    ${absoluteLoaderClasses.firstProgress} {
      background: ${getPrefixedVar(prefix, 'firstLine')};
    }
    ${absoluteLoaderClasses.secondProgress} {
      background: ${getPrefixedVar(prefix, 'secondLine')};
    }
  `;
};

export default styled(AbsoluteLoader)<ThemedElement>`
  ${({ themePrefix = ['components', 'absoluteLoader'] }: ThemedElement) =>
    getAbsoluteLoaderTheme(themePrefix)}
`;
