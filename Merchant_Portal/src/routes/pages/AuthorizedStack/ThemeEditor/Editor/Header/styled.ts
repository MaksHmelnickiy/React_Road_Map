import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Button from 'components/Button';
import Typography from 'components/Typography';

export const EDITOR_HEADER_HEIGHT = 64;

export const Container = styled.header`
  flex: 0 0 ${EDITOR_HEADER_HEIGHT}px;
  max-height: ${EDITOR_HEADER_HEIGHT}px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  background: ${getPrefixedVar(['themeEditor', 'header', 'container'])};
`;

export const BreadCrumb = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: ${getPrefixedVar(['themeEditor', 'header', 'breadCrumb', 'item'])};
`;

export const CrumbItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const ArrowContainer = styled.div`
  padding: 0 10px;
`;

export const Crumb = styled(Typography)`
  max-width: 450px;
`;

export const EditButton = styled(Button)`
  color: ${getPrefixedVar(['themeEditor', 'header', 'breadCrumb', 'item'])};

  svg {
    transform: translate(2px, -2px);
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
