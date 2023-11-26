import { radioSelectClasses } from '@private/components';
import styled from 'styled-components';

import FormikRadioSelect from 'components/Form/FormikRadioSelect';
import FormikSwitch from 'components/Form/FormikSwitch';

export const PageBody = styled.div`
  display: grid;
  align-items: start;
  max-width: 960px;
  margin: 0 auto;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-gap: 4px 30px;
`;

export const DoubleColumn = styled(FormContainer)`
  grid-template-columns: 1fr 1fr;
`;

export const RadioBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 26px;
  padding-bottom: 20px;
`;

export const RadioSelect = styled(FormikRadioSelect)`
  ${radioSelectClasses.radioGroup} {
    column-gap: 32px;
  }
`;

export const SectionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const StyledFormikSwitch = styled(FormikSwitch)`
  flex-direction: row-reverse;
`;
