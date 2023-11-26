import styled from 'styled-components';

import Button from 'components/Button';
import AutocompleteSelect from 'components/Controls/AutocompleteSelect';
import Checkbox from 'components/Controls/Checkbox';
import Input from 'components/Controls/Input';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 50px;
  max-width: 700px;
  margin-top: 65px;
`;

export const PreviewButton = styled(Button)`
  flex: 1 1 125px;
  max-width: 138px;
`;

export const PreviewCheckbox = styled(Checkbox)`
  flex: 1 1 110px;
`;

export const PreviewInput = styled(Input)`
  flex: 1 1 300px;
`;

export const PreviewAutocomplete = styled(AutocompleteSelect)`
  flex: 1 1 300px;
  max-width: 326px;
`;
