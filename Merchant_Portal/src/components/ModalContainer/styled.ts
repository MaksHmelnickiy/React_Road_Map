import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import AbsoluteLoader from 'components/AbsoluteLoader';
import Typography from 'components/Typography';
import { ThemedElement } from 'utils/types';

export const StyledAbsoluteLoader = styled(AbsoluteLoader)`
  position: absolute;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px 5px;
  border-bottom-style: solid;
`;

export const Title = styled(Typography)``;

export const Content = styled.div`
  flex: 1 1 auto;
  padding: 24px;
`;

export const FooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 24px;
  border-top-style: solid;
  column-gap: 16px;

  & > * {
    flex: 0 0 120px;
  }
`;

export const modalContainerClasses = {
  absoluteLoader: StyledAbsoluteLoader,
  header: HeaderStyled,
  content: Content,
  title: Title,
  footer: FooterStyled,
};

export const Container = styled.div<ThemedElement<{ width?: number }>>`
  max-height: 90vh;
  position: relative;
  width: 520px;
  overflow: auto;
  border-style: solid;
  transition: all 1s;

  ${({ themePrefix = ['components', 'modalContainer'] }) => css`
    ${getBorderBase([...themePrefix, 'container'])};
    background: ${getPrefixedVar(themePrefix, 'container', 'bg')};
    box-shadow: 0px 4px 22px ${getPrefixedVar(themePrefix, 'container', 'boxShadow')};

    ${Title} {
      color: ${getPrefixedVar(themePrefix, 'header', 'title')};
    }

    ${HeaderStyled} {
      ${getBorderBase([...themePrefix, 'header'])};
    }

    ${FooterStyled} {
      ${getBorderBase([...themePrefix, 'footer'])};
    }
  `}
`;
