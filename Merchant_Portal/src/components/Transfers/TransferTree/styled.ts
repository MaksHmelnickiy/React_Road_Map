import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import { TransferListHeader, transferListHeaderClasses } from '@private/transfers';
import styled from 'styled-components';

const prefix = ['components', 'transferTree'];

export const Container = styled.div`
  position: relative;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 35px;
    border-left: ${getPrefixedVar([...prefix, 'body', 'connectLineWidth'])} dashed
      ${getPrefixedVar([...prefix, 'body', 'connectLine'])};
    z-index: 0;
  }
`;

export const StyledListHeader = styled(TransferListHeader)`
  background: ${getPrefixedVar([...prefix, 'header', 'bg'])};
  ${getBorderBase([...prefix, 'header'])};

  ${transferListHeaderClasses.backgroundImage} {
    color: ${getPrefixedVar([...prefix, 'header', 'circle'])};
  }

  ${transferListHeaderClasses.icon} {
    color: ${getPrefixedVar([...prefix, 'header', 'icon'])};
  }

  ${transferListHeaderClasses.icon} {
    ${getFontBase([...prefix, 'header', 'title'])};
  }

  ${transferListHeaderClasses.title} {
    ${getFontBase([...prefix, 'header', 'title'])};
  }

  ${transferListHeaderClasses.subTitle} {
    ${getFontBase([...prefix, 'header', 'subtitle'])};
  }
`;
