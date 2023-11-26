import { getFontBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

const prefix = ['components', 'dataGrid', 'rowCell'];

export const Container = styled.div<{
  $index?: number;
  $center?: boolean;
  $isPointer?: boolean;
}>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ $center }) => ($center ? 'center' : 'flex-start')};
  padding: 10px 16px;
  column-gap: 5px;
  ${getFontBase([...prefix, 'text'])}
  cursor: ${({ $isPointer }) => ($isPointer ? 'pointer' : 'auto')};
  background: ${({ $index }) =>
    getPrefixedVar(
      $index && $index % 2 !== 0
        ? [...prefix, 'container', 'odd']
        : [...prefix, 'container', 'even']
    )}
  };
`;

export const Text = styled.div<{ bold?: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-height: 20px;
`;

export const rowCellClasses = {
  text: Text,
};
