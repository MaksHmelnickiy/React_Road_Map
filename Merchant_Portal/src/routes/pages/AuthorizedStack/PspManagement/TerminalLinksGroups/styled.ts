import styled from 'styled-components';

import DataGrid from 'components/Grids/DataGrid';

import { PageContainer } from '../../styled';

export const SectionDataList = styled.div`
  column-count: 4;
`;

export const ViewContainer = styled(PageContainer)`
  row-gap: 40px;
`;

export const LimitsDataGrid = styled(DataGrid)`
  height: 500px;
` as typeof DataGrid;

export const Filters = styled.div`
  display: flex;
`;
