import { HighlightedText, highlightedTextClasses } from '@private/components';
import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

export default styled(HighlightedText)`
  ${highlightedTextClasses.highlighted} {
    background: ${getPrefixedVar(['components', 'highlightedText', 'highlighted'])};
  }
`;
