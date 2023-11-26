import { buttonClasses, paginationClasses } from '@private/components';
import { DataGrid, dataGridClasses } from '@private/data-grid';
import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled, { css, keyframes } from 'styled-components';

import { getAbsoluteLoaderTheme } from 'components/AbsoluteLoader';

const prefix = ['components', 'dataGrid'];

const skeletonAnimation = keyframes`
  0% {
    background: ${getPrefixedVar(prefix, 'skeleton', 'bgStart')};
  }
  100% {
    background: ${getPrefixedVar(prefix, 'skeleton', 'bgEnd')};
  }
`;

export const StyledDataGrid = styled(DataGrid)`
  flex: 1 1 auto;
  overflow: hidden;

  ${dataGridClasses.gridWrapper} {
    ${getBorderBase([...prefix, 'container'])};
  }

  ${dataGridClasses.progressBar} {
    ${getAbsoluteLoaderTheme(['components', 'absoluteLoader'])};
  }

  ${dataGridClasses.skeleton} {
    ${getBorderBase([...prefix, 'skeleton'])};
    animation: ${skeletonAnimation} 1s linear infinite alternate;
  }

  ${dataGridClasses.topToolbarContainer}, ${dataGridClasses.bottomToolbarContainer} {
    margin-right: 0;
  }

  ${dataGridClasses.settingsButton} {
    width: 36px;
    height: 36px;

    svg {
      width: auto;
      height: auto;
    }
  }

  ${dataGridClasses.settingsButton}, ${dataGridClasses.bottomToolbarContainer} ${buttonClasses.button} {
    ${getBorderBase([...prefix, 'pagination', 'button', 'base'])};

    &:hover {
      color: ${getPrefixedVar(prefix, 'pagination', 'button', 'hover', 'text')};
      background: ${getPrefixedVar(prefix, 'pagination', 'button', 'hover', 'bg')};
    }

    &:active {
      color: ${getPrefixedVar(prefix, 'pagination', 'button', 'pressed', 'text')};
      background: ${getPrefixedVar(prefix, 'pagination', 'button', 'pressed', 'bg')};
    }
  }

  ${paginationClasses.prevButton}, ${paginationClasses.nexButton} {
    color: ${getPrefixedVar(prefix, 'pagination', 'button', 'base', 'text')};

    &[data-isdisabled='true'] {
      color: ${getPrefixedVar(prefix, 'pagination', 'button', 'disabled', 'text')};
      background: ${getPrefixedVar(prefix, 'pagination', 'button', 'disabled', 'bg')};
    }
  }

  ${paginationClasses.text} {
    color: ${getPrefixedVar(prefix, 'pagination', 'text')};
  }

  ${dataGridClasses.notFoundContainer} {
    padding: 100px 0;
  }

  ${dataGridClasses.headerRowContainer} {
    background: ${getPrefixedVar(prefix, 'headerCell', 'bg')};
  }

  ${dataGridClasses.flexRow}[data-variant='odd'] {
    background: ${getPrefixedVar(prefix, 'rowCell', 'container', 'odd')};
  }

  ${dataGridClasses.flexRow}[data-variant='even'] {
    background: ${getPrefixedVar(prefix, 'rowCell', 'container', 'even')};
  }
` as typeof DataGrid;

export const TableSettings = styled.div<{ $isHidden: boolean }>`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  ${({ $isHidden }) =>
    $isHidden &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`;

export const SettingsColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
