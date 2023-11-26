import { Link } from 'react-router-dom';

import { getFontBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['components', 'breadCrumb'];

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
`;

export const Active = styled(Link)`
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease;

  ${getFontBase([...prefix, 'backLink'])}

  &:hover {
    text-decoration: underline;
  }

  &:active {
    text-decoration: underline;
  }
`;

export const Disabled = styled(Typography)`
  display: flex;
  color: ${getPrefixedVar(prefix, 'disabledLink')};
`;

export const IconWrapper = styled.div`
  margin: 0 11px;

  svg {
    position: relative;
    top: 2px;
    width: 6px;
    color: ${getPrefixedVar(prefix, 'disabledLink')};
  }
`;
