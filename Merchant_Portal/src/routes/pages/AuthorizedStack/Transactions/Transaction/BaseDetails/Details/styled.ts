import styled from 'styled-components';

import Divider from 'components/Divider';

import { ViewBlockContainer } from '../../../../styled';

export const Container = styled(ViewBlockContainer)`
  flex: 0 0 50%;
`;

export const DividerLine = styled(Divider).attrs(() => ({
  $themePrefix: ['transactions', 'view', 'divider'],
}))``;
