import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import ModalContainer from 'components/ModalContainer';
import { modalContainerClasses } from 'components/ModalContainer/styled';
import NoItemsFound from 'components/NoItemsFound';
import Typography from 'components/Typography';

export const StyledModalContainer = styled(ModalContainer)`
  height: 506px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${modalContainerClasses.content} {
    padding: 10px 24px 24px;
    display: flex;
    flex-direction: column;
    height: 0;
  }
`;

export const Body = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 210px;
  overflow-y: auto;
`;

export const SelectContainer = styled.div`
  margin-bottom: 14px;
`;

export const StyledNoItemsFound = styled(NoItemsFound)`
  height: 100%;
  max-width: 100%;
  justify-content: center;
`;

export const ListItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled(Typography)`
  color: ${getPrefixedVar(['users', 'form', 'modalRoleItem'])};
`;
