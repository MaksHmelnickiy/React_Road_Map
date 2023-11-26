import { CircularProgress } from '@private/components';
import { NOTIF_TYPES } from '@private/notifications';
import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Button from 'components/Button';
import Typography from 'components/Typography';
import { ThemedElement } from 'utils/types';

interface IBaseProps {
  type: NOTIF_TYPES;
}

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const IconContainer = styled.div`
  flex: 0 0 50px;
`;

export const Content = styled.div`
  flex: 1 1 auto;
  padding-right: 14px;
`;

export const Title = styled.div``;

export const Message = styled(Typography)``;

export const CloseButton = styled(Button)`
  min-height: 20px;
  min-width: 20px;
  padding: 0;
`;

export const LoaderBox = styled.div`
  position: relative;
`;

export const BackCircularProgress = styled(CircularProgress).attrs({
  value: 100,
  size: 28,
  variant: 'determinate',
})`
  position: absolute;
  top: 5px;
  left: 7px;
`;

export const FrontCircularProgress = styled(CircularProgress).attrs({
  size: 28,
  variant: 'indeterminate',
})`
  position: absolute;
  top: 5px;
  left: 7px;
`;

export const Container = styled.div<ThemedElement<IBaseProps>>`
  position: relative;
  padding: 12px 15px 12px 10px;
  min-height: 70px;
  border-style: solid;

  ${({ themePrefix, type = NOTIF_TYPES.INFO }) => {
    const prefix = themePrefix || ['components', 'notification', type];

    return css`
      ${getBorderBase(prefix)};
      background: ${getPrefixedVar(prefix, 'bg')};
      box-shadow: 0px 4px 22px ${getPrefixedVar(prefix, 'boxShadow')};

      ${Title} {
        ${getFontBase([...prefix, 'title'])};
      }

      ${Message} {
        color: ${getPrefixedVar(prefix, 'message')};
      }

      ${BackCircularProgress} {
        color: ${getPrefixedVar(prefix, 'loader', 'back')};
      }

      ${FrontCircularProgress} {
        color: ${getPrefixedVar(prefix, 'loader', 'front')};
      }
    `;
  }}
`;
