import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import {
  TransferList,
  transferListClasses,
  transferListHeaderClasses,
} from '@private/transfers';
import styled, { css } from 'styled-components';

import { getBaseButtonProps, getButtonTheme } from 'components/Button/styled';
import { getCheckboxTheme } from 'components/Controls/Checkbox';
import { getInputTheme } from 'components/Controls/Input/styled';

const prefix = ['components', 'transferList'];

const getHeaderTheme = (side: string) => {
  return css`
    ${transferListHeaderClasses.container} {
      background: ${getPrefixedVar([...prefix, 'header', side, 'bg'])};
      ${getBorderBase([...prefix, 'header', side])};
    }

    ${transferListHeaderClasses.backgroundImage} {
      color: ${getPrefixedVar([...prefix, 'header', side, 'circle'])};
    }

    ${transferListHeaderClasses.icon} {
      color: ${getPrefixedVar([...prefix, 'header', side, 'icon'])};
    }

    ${transferListHeaderClasses.icon} {
      ${getFontBase([...prefix, 'header', side, 'title'])};
    }

    ${transferListHeaderClasses.title} {
      ${getFontBase([...prefix, 'header', side, 'title'])};
    }

    ${transferListHeaderClasses.subTitle} {
      ${getFontBase([...prefix, 'header', side, 'subtitle'])};
    }
  `;
};

export const StyledTransferList = styled(TransferList)`
  min-height: 600px;

  ${transferListClasses.buttonsContainer} {
    padding-left: 84px;
    padding-right: 84px;

    &:after {
      border-color: ${getPrefixedVar([...prefix, 'body', 'separateLine'])};
    }
  }

  ${transferListClasses.moveButton} {
    width: 74px;
    height: 74px;

    &[data-is-active='true'] {
      ${getBaseButtonProps([...prefix, 'body', 'moveButton', 'active'])}
    }

    ${getButtonTheme([...prefix, 'body', 'moveButton'])}

    &:first-child {
      margin-bottom: 48px;
    }
  }

  ${transferListClasses.mainCheckbox} {
    ${getCheckboxTheme()}
  }

  ${transferListClasses.searchInput} {
    margin-top: 20px;

    ${getInputTheme()}
  }

  ${transferListClasses.columnContainer} {
    &:after {
      border-color: ${getPrefixedVar([...prefix, 'body', 'connectLine'])};
    }

    &:first-child {
      ${getHeaderTheme('left')}
    }

    &:last-child {
      ${getHeaderTheme('right')}
    }
  }

  ${transferListClasses.columnBody} {
    height: calc(100% - 95px);
    padding: 16px 10px;
    background: ${getPrefixedVar([...prefix, 'body', 'bg'])};
  }

  ${transferListClasses.itemCheckbox} {
    ${getCheckboxTheme()}
  }

  ${transferListClasses.itemLabel} {
    transition: all 0.3s ease;
    ${getFontBase([...prefix, 'body', 'item', 'base'])};
  }

  ${transferListClasses.itemBody} {
    background: ${getPrefixedVar([...prefix, 'body', 'item', 'base', 'bg'])};

    &:hover {
      background: ${getPrefixedVar([...prefix, 'body', 'item', 'hover', 'bg'])};

      ${transferListClasses.itemLabel} {
        ${getFontBase([...prefix, 'body', 'item', 'hover'])};
      }
    }

    &:active {
      background: ${getPrefixedVar([...prefix, 'body', 'item', 'pressed', 'bg'])};

      ${transferListClasses.itemLabel} {
        ${getFontBase([...prefix, 'body', 'item', 'pressed'])};
      }
    }
  }
`;
