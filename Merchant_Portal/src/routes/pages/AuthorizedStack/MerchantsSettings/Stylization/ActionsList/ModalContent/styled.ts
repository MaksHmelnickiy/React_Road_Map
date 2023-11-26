import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export type TModalVariant = 'apply' | 'delete';

export const Preview = styled.div`
  position: relative;
  max-width: 370px;
  height: 250px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;

  & > * {
    position: absolute;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    max-width: 100%;
  }
`;

export const Message = styled(Typography)<{ modalVariant: TModalVariant }>`
  max-width: 360px;
  color: ${getPrefixedVar(['stylization', 'modals', 'message'])};
  margin: 0 auto;
  text-align: center;
  margin-top: 24px;
`;
