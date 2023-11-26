import { columnsFilterTheme } from 'components/Grids/DataGrid/ColumnsSettings/theme';
import { headerCellTheme } from 'components/Grids/DataGrid/HeaderCell/theme';
import { multiItemsCellTheme } from 'components/Grids/DataGrid/MultiItemsCell/theme';
import { rowCellTheme } from 'components/Grids/DataGrid/RowCell/theme';
import { baseThemeValues } from 'constants/common';

export const dataGridTheme = {
  headerCell: headerCellTheme,
  rowCell: rowCellTheme,
  columnsFilter: columnsFilterTheme,
  itemsPerPage: 'palette.tertiary.60',
  multiItemsCell: multiItemsCellTheme,
  container: {
    borderRadius: '10px',
    borderWidth: '0px',
    borderColor: 'palette.transparent',
  },
  skeleton: {
    borderRadius: '10px',
    borderWidth: '0px',
    borderColor: 'palette.transparent',
    bgStart: 'palette.surface.4',
    bgEnd: 'palette.surface.3',
  },
  pagination: {
    text: 'palette.tertiary.60',
    button: {
      base: {
        borderRadius: '8px',
        borderWidth: '0px',
        borderColor: 'palette.transparent',
        text: 'palette.tertiary.30',
      },
      hover: {
        bg: 'palette.tertiary.5',
        text: 'palette.primary.90',
      },
      pressed: {
        bg: 'palette.tertiary.0',
        text: 'palette.primary.90',
      },
      disabled: {
        bg: 'palette.transparent',
        text: 'palette.neutral.10',
      },
    },
  },
  customPagination: {
    itemsCount: 'palette.tertiary.60',
    ellipsis: 'palette.tertiary.80',
    button: {
      base: {
        borderRadius: '6px',
        borderWidth: '0px',
        borderColor: 'palette.transparent',
        fontFamily: baseThemeValues.inherit,
        fontSize: '14px',
        fontWeight: 600,
        text: 'palette.tertiary.80',
        bg: 'palette.transparent',
      },
      hover: {
        bg: 'palette.surface.4',
      },
      pressed: {
        bg: 'palette.surface.5',
      },
      active: {
        bg: 'palette.primary.20',
        text: 'palette.primary.99',
      },
      disabled: {
        text: 'palette.neutral.20',
      },
    },
  },
};
