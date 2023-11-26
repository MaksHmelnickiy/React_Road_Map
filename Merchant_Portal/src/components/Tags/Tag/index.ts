import { ITagProps, Tag, TAG_VARIANTS, tagClasses } from '@private/components';
import { getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import { ThemedElement } from 'utils/types';

export default styled(Tag)<ThemedElement<ITagProps>>`
  ${tagClasses.text} {
    line-height: 133%;
  }

  ${({ themePrefix, variant = TAG_VARIANTS.SUCCESS }) => {
    const prefix = themePrefix || ['components', 'tag', variant];

    return css`
      background: ${getPrefixedVar(prefix, 'bg')};

      ${tagClasses.text} {
        max-width: none;
        ${getFontBase(prefix)}
      }
    `;
  }}
`;
