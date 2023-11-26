import { getFontBase } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const Preview = styled(Typography)<{
  fontFamily: string;
}>`
  max-height: 128px;
  height: 128px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ fontFamily }) => fontFamily};
  ${getFontBase(['themeEditor', 'sidebar', 'typography', 'preview'])}
`;
