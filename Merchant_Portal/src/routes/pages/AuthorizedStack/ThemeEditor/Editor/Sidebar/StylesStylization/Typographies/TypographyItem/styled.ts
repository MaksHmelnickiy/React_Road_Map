import { autocompleteSelectClasses, tooltipClasses } from '@private/components';
import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import ControlledPopover from 'components/ControlledPopover';
import AutocompleteSelect from 'components/Controls/AutocompleteSelect';
import Typography from 'components/Typography';

const prefix = ['themeEditor', 'sidebar', 'typography'];

export const StyledControlledPopover = styled(ControlledPopover)`
  ${tooltipClasses.message} {
    width: 240px;
  }
`;

export const Container = styled.div<{ $isActive: boolean }>`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
  padding: 10px 24px;
  cursor: pointer;
  border-style: solid;
  color: ${getPrefixedVar(prefix, 'item', 'text')};
  ${getBorderBase([...prefix, 'item', 'container', 'base'])}
  transition: all 0.3s ease;

  ${({ $isActive }) =>
    $isActive &&
    css`
      border-color: ${getPrefixedVar(
        prefix,
        'item',
        'container',
        'active',
        'borderColor'
      )};
    `}
`;

export const Divider = styled.div`
  height: 1px;
  background: ${getPrefixedVar(prefix, 'item', 'divider')};
`;

export const PreviewTypography = styled.div<{
  fontFamily?: string;
  fontWeight?: number | string;
}>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${getPrefixedVar(prefix, 'item', 'preview', 'fontSize')};
  color: ${getPrefixedVar(prefix, 'item', 'preview', 'text')};
  line-height: 143%;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
`;

export const Name = styled(Typography)`
  text-transform: capitalize;
`;

export const StyledAutocompleteSelect = styled(AutocompleteSelect)`
  ${autocompleteSelectClasses.inputWrapper} {
    background: ${getPrefixedVar(prefix, 'item', 'select', 'bg')};
    border-color: ${getPrefixedVar(prefix, 'item', 'select', 'borderColor')};
  }

  ${autocompleteSelectClasses.optionsContent} {
    &::-webkit-scrollbar {
      width: 8px;
      border: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border: 3px solid transparent;
      background-color: ${getPrefixedVar(prefix, 'item', 'select', 'scrollThumb')};
    }
  }
`;
