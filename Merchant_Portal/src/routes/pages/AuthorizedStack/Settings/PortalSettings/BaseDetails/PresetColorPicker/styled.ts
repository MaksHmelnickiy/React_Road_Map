import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Accordion from 'components/Accordion';
import ColorPicker from 'components/Pickers/ColorPickerPopover/ColorPicker';
import Typography from 'components/Typography';
import { ICONS_MAP } from 'constants/icons';

const prefix = ['settings', 'sidebar', 'presets', 'colorPicker'];

export const AccordionContainer = styled(Accordion)`
  padding: 0 18px;

  &:not(:last-child) {
    border-bottom-style: solid;
    ${getBorderBase(prefix)}
  }
`;

export const AccordionTitle = styled(Typography)`
  padding: 25px 0;
  color: ${getPrefixedVar(prefix, 'title')};
`;

export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const AccordionIcon = styled(ICONS_MAP.ArrowDown)<{ $isOpen: boolean }>`
  color: ${getPrefixedVar(prefix, 'icon')};
  height: 20px;
  min-width: 24px;
  transition: all 0.3s ease-out;
  transform: ${({ $isOpen }) => `rotate(${$isOpen ? 360 : 270}deg)`};
`;

export const StyledColorPickerContent = styled(ColorPicker)`
  padding: 0px 10px 25px;
`;
