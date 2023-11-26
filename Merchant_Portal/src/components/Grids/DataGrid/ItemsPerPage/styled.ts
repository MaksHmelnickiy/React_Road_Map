import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import AutocompleteSelect from '../../../Controls/AutocompleteSelect';
import Typography from '../../../Typography';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled(Typography)`
  color: ${getPrefixedVar(['components', 'dataGrid', 'itemsPerPage'])};
  margin-right: 16px;
  white-space: nowrap;
`;

export const StyledAutoCompleteSelect = styled(AutocompleteSelect)`
  width: 86px;
`;

export const itemsPerPageClasses = {
  perPageContainer: Container,
  text: Text,
  select: StyledAutoCompleteSelect,
};
