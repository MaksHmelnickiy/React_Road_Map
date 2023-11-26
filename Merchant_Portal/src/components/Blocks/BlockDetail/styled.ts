import styled from 'styled-components';

import Divider from 'components/Divider';

export const SectionData = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
`;

export const DividerLine = styled(Divider).attrs(() => ({
  themePrefix: ['components', 'blockDetail', 'divider'],
}))``;
