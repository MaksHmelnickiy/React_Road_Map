import { Tab as TabBase, Tabs as TabsBase } from '@private/components';
import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import { ThemedElement } from 'utils/types';

export const getTabTheme = (themePrefix: string[]) => {
  return css`
    ${getFontBase([...themePrefix, 'inactive', 'base'])};
    background: ${getPrefixedVar(themePrefix, 'inactive', 'base', 'bg')};

    &:before {
      background: ${getPrefixedVar(themePrefix, 'inactive', 'base', 'underline')};
    }

    &:hover {
      ${getFontBase([...themePrefix, 'inactive', 'hover'])};
      background: ${getPrefixedVar(themePrefix, 'inactive', 'hover', 'bg')};

      &:before {
        background: ${getPrefixedVar(themePrefix, 'inactive', 'hover', 'underline')};
      }
    }

    &:active {
      ${getFontBase([...themePrefix, 'inactive', 'pressed'])};
      background: ${getPrefixedVar(themePrefix, 'inactive', 'pressed', 'pressed')};

      &:before {
        background: ${getPrefixedVar(themePrefix, 'inactive', 'pressed', 'underline')};
      }
    }

    &[aria-selected='true'] {
      ${getFontBase([...themePrefix, 'active', 'base'])};
      background: ${getPrefixedVar(themePrefix, 'active', 'base', 'bg')};

      &:before {
        background: ${getPrefixedVar(themePrefix, 'active', 'pressed', 'underline')};
      }

      &:hover {
        ${getFontBase([...themePrefix, 'active', 'hover'])};
        background: ${getPrefixedVar(themePrefix, 'active', 'hover', 'bg')};

        &:before {
          background: ${getPrefixedVar(themePrefix, 'active', 'hover', 'underline')};
        }
      }

      &:active {
        ${getFontBase([...themePrefix, 'active', 'pressed'])};
        background: ${getPrefixedVar(themePrefix, 'active', 'pressed', 'bg')};

        &:before {
          background: ${getPrefixedVar(themePrefix, 'active', 'pressed', 'underline')};
        }
      }
    }
  `;
};

export const Tabs = styled(TabsBase)<ThemedElement>`
  border-bottom-style: solid;
  ${getBorderBase(['components', 'tabs'])}
`;

export const Tab = styled(TabBase)<ThemedElement>`
  height: 48px;
  padding: 10px 24px;

  ${({ themePrefix = ['components', 'tab'] }: ThemedElement) => getTabTheme(themePrefix)}
`;
