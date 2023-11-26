import { inputClasses, tagClasses } from '@private/components';
import { dataGridClasses } from '@private/data-grid';
import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Button from 'components/Button';
import SearchInput from 'components/Controls/SearchInput';
import DataGrid from 'components/Grids/DataGrid';
import { rowCellClasses } from 'components/Grids/DataGrid/RowCell/styled';
import Status from 'components/Tags/Status';
import Tag from 'components/Tags/Tag';
import Typography from 'components/Typography';

import HeaderCell from '../Grids/DataGrid/HeaderCell';
import RowCell from '../Grids/DataGrid/RowCell';

const prefix = ['components', 'previewApp'];

export const Container = styled.div`
  max-width: 956px;
  max-height: 354px;
  border-style: solid;
  ${getBorderBase([...prefix, 'container'])}
  background: ${getPrefixedVar(prefix, 'container', 'bg')};
  overflow: hidden;
`;

export const Header = styled.div`
  max-height: 38px;
  padding: 7px 12px;
  background: ${getPrefixedVar(prefix, 'header', 'bg')};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const LogoTitle = styled.div`
  ${getFontBase([...prefix, 'header', 'logo'])}
`;

export const Main = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  position: relative;
  padding: 24px 0;
  flex: 0 0 165px;
  background: ${getPrefixedVar(prefix, 'sidebar', 'bg')};
`;

export const OpenButton = styled.div`
  position: absolute;
  right: -11px;
  top: 16px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;

  ${getBorderBase([...prefix, 'sidebar', 'controlButton'])}
  ${getFontBase([...prefix, 'sidebar', 'controlButton'])}
  background: ${getPrefixedVar(prefix, 'sidebar', 'controlButton', 'bg')};
`;

export const NavItem = styled.div<{ $isActive?: boolean }>`
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 150%;
  border-left-style: solid;
  padding: 15px 10px;

  ${({ $isActive }) =>
    $isActive
      ? css`
          ${getFontBase([...prefix, 'sidebar', 'navItem', 'active'])};
          ${getBorderBase([...prefix, 'sidebar', 'navItem', 'active'])};
          background: ${getPrefixedVar(prefix, 'sidebar', 'navItem', 'active', 'bg')};
        `
      : css`
          ${getFontBase([...prefix, 'sidebar', 'navItem', 'base'])};
          ${getBorderBase([...prefix, 'sidebar', 'navItem', 'base'])};
          background: ${getPrefixedVar(prefix, 'sidebar', 'navItem', 'base', 'bg')};
        `};
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  svg {
    width: 13px;
    height: 13px;
  }
`;

export const Content = styled.div`
  max-width: calc(100% - 165px);
  flex: 1 1 auto;
  padding: 14px 18px;
  background: ${getPrefixedVar(prefix, 'content', 'bg')};
`;

export const Title = styled.div`
  line-height: 150%;
  ${getFontBase([...prefix, 'content', 'title'])};
`;

export const Filtration = styled.div`
  margin-top: 21px;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  pointer-events: none;
`;

export const CustomButton = styled(Button)`
  pointer-events: none;
  min-height: 30px;
  line-height: 141%;
  padding: 0px 14px;

  ${getFontBase([...prefix, 'content', 'button'])};
`;

export const Select = styled(CustomButton)`
  background: ${getPrefixedVar(prefix, 'content', 'select', 'bg')};
  border-radius: ${getPrefixedVar(prefix, 'content', 'select', 'borderRadius')};
`;

export const StyledSearchInput = styled(SearchInput)`
  pointer-events: none;

  ${inputClasses.input} {
    height: 30px;
  }

  ${inputClasses.labelPlaceholder} {
    font-size: ${getPrefixedVar(prefix, 'content', 'filters', 'searchInput', 'fontSize')};
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  border-bottom-style: solid;
  ${getBorderBase([...prefix, 'content', 'filters', 'tabs'])}
`;

export const Tab = styled.div<{ $isActive?: boolean }>`
  line-height: 150%;
  border-bottom-style: solid;
  padding: 7px 15px;

  ${({ $isActive }) =>
    $isActive
      ? css`
          ${getFontBase([...prefix, 'content', 'filters', 'tabs', 'tab', 'active'])};
          ${getBorderBase([...prefix, 'content', 'filters', 'tabs', 'tab', 'active'])};
        `
      : css`
          ${getFontBase([...prefix, 'content', 'filters', 'tabs', 'tab', 'base'])};
          ${getBorderBase([...prefix, 'content', 'filters', 'tabs', 'tab', 'base'])};
        `}
`;

export const Table = styled.div`
  margin-top: 16px;
`;

export const StyledDataGrid = styled(DataGrid)`
  ${dataGridClasses.gridWrapper} {
    overflow: hidden;
  }
` as typeof DataGrid;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const PerPage = styled(Typography)`
  font-size: ${getPrefixedVar(prefix, 'content', 'perPage', 'fontSize')};
  color: ${getPrefixedVar(prefix, 'content', 'perPage', 'text')};
  margin-right: 5px;
`;

export const GridHeaderCell = styled(HeaderCell)`
  min-height: 36px;
  padding: 10px;
  line-height: 143%;
  border-bottom-style: solid;
  white-space: nowrap;
  ${getFontBase([...prefix, 'content', 'table', 'headerCell'])};
  ${getBorderBase([...prefix, 'content', 'table', 'headerCell'])};
  background: ${getPrefixedVar(prefix, 'content', 'table', 'headerCell', 'bg')};
` as typeof HeaderCell;

export const GridRowCell = styled(RowCell)<{ rowIndex: number }>`
  line-height: 143%;
  min-width: 90px;
  padding: 10px;
  
  ${getBorderBase([...prefix, 'content', 'table', 'rowCell'])};
  background: ${({ rowIndex }) =>
    getPrefixedVar(
      rowIndex && rowIndex % 2 !== 0
        ? [...prefix, 'content', 'table', 'rowCell', 'odd']
        : [...prefix, 'content', 'table', 'rowCell', 'even']
    )};
  
  ${rowCellClasses.text} {
    display: flex;
    align-items: center;
    column-gap: 5px;
    ${getFontBase([...prefix, 'content', 'table', 'rowCell'])};
  }
};
` as typeof RowCell;

export const GridTag = styled(Tag)`
  min-height: 15px;
  padding: 0 5px;

  ${tagClasses.text} {
    font-size: ${getPrefixedVar(prefix, 'content', 'table', 'tag', 'fontSize')};
  }
`;

export const GridStatus = styled(Status)`
  font-size: ${getPrefixedVar(prefix, 'content', 'table', 'status', 'fontSize')};
  padding-left: 10px;

  &:after {
    width: 4px;
    height: 4px;
  }
`;
