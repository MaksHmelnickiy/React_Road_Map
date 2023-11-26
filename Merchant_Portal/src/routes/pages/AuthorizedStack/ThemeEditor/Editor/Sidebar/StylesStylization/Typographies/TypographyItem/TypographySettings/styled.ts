import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import { ITypographyBase } from '../../types';

const prefix = ['themeEditor', 'sidebar', 'typography', 'preview'];

export const Preview = styled.div<{
  typography: ITypographyBase;
  mainFontFamily: string;
}>`
  max-height: 128px;
  height: 128px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ typography: { fontFamily }, mainFontFamily }) =>
    fontFamily === 'inherit' ? mainFontFamily : fontFamily};
  font-weight: ${({ typography: { fontWeight } }) => fontWeight};
  font-size: ${({ typography: { fontSize } }) => fontSize};
  line-height: 133%;
  color: ${getPrefixedVar([...prefix, 'text'])};
`;

export const FontSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
