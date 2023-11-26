import { inputClasses } from '@private/components';
import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Input from 'components/Controls/Input';

const prefix = ['components', 'colorPickerInput'];

export const PickerInput = styled(Input)`
  justify-content: space-between;

  &,
  &:hover {
    ${inputClasses.label} {
      color: ${getPrefixedVar(prefix, 'label', 'text')};
      font-weight: ${getPrefixedVar(prefix, 'label', 'fontWeight')};
    }
  }

  ${inputClasses.body} {
    max-width: 125px;
  }

  &:hover ${inputClasses.input}:not(:read-only) {
    ${getFontBase([...prefix, 'input', 'hover'])}
    ${getBorderBase([...prefix, 'input', 'hover'])}
    background: ${getPrefixedVar(prefix, 'input', 'hover', 'bg')};
  }

  ${inputClasses.input} {
    height: 32px;
    padding: 6px 8px;

    ${getFontBase([...prefix, 'input', 'base'])}
    ${getBorderBase([...prefix, 'input', 'base'])}
    background: ${getPrefixedVar(prefix, 'input', 'base', 'bg')};
    text-transform: uppercase;

    &:not(:read-only):focus {
      ${getFontBase([...prefix, 'input', 'active'])}
      ${getBorderBase([...prefix, 'input', 'active'])}
      background: ${getPrefixedVar(prefix, 'input', 'active', 'bg')};
    }
  }
`;
