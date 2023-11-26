import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import SearchInput from 'components/Controls/SearchInput';
import Typography from 'components/Typography';

export const PageContainer = styled.div`
  width: 100%;
  padding: 24px 18px 24px 32px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  scrollbar-gutter: stable;
  flex: 1 1 auto;
  scroll-behavior: smooth;
`;

export const ViewContainer = styled(PageContainer)`
  row-gap: 30px;
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
`;

export const PageTitle = styled(Typography).attrs(() => ({
  as: 'h1',
}))`
  color: ${getPrefixedVar(['gridView', 'title'])};
`;

export const ViewTitle = styled(Typography).attrs(() => ({
  as: 'h3',
}))`
  color: ${getPrefixedVar(['gistView', 'title'])};
`;

export const ViewTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: ${getPrefixedVar(['gistView', 'title'])};
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
  margin-bottom: 32px;
`;

export const GridSearch = styled(SearchInput)`
  width: 30vw;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

const prefix = ['gistView', 'block'];

export const ViewBlockContainer = styled.div`
  padding: 16px;
  background: ${getPrefixedVar(prefix, 'bg')};
  border-radius: ${getPrefixedVar(prefix, 'borderRadius')};
`;

export const ViewBlockTitle = styled(Typography)`
  padding: 0 14px 10px;
  color: ${getPrefixedVar(prefix, 'title')};
`;
