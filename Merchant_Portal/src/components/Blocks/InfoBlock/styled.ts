import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from '../../Typography';

const prefix = ['components', 'infoBlock'];

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  border-radius: ${getPrefixedVar([...prefix, 'detailsBlock', 'borderRadius'])};
  background-color: ${getPrefixedVar([...prefix, 'detailsBlock', 'bg'])};
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const SectionTitle = styled(Typography)`
  color: ${getPrefixedVar([...prefix, 'blockTitle'])};
`;
