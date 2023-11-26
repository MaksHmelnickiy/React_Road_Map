import { getPrefixedVar } from '@private/payment';
import { Form } from 'formik';
import styled, { css } from 'styled-components';

import FormikSwitch from 'components/Form/FormikSwitch';
import FormikSwitchInput from 'components/Form/FormikSwitchInput';
import FormNavigation from 'components/Form/FormNavigation';
import Section from 'components/Form/FormSection';
import { Body as SectionBody } from 'components/Form/FormSection/styled';
import Typography from 'components/Typography';

const prefix = ['routingRuleset', 'form'];

export const Container = styled(Form)`
  flex: 1 1 auto;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background: black;
  height: 50px;
`;

export const EnabledSwitch = styled(FormikSwitch)`
  flex-direction: row-reverse;
  column-gap: 24px;
`;

export const FormContent = styled.div`
  height: calc(100% - 70px);
  display: flex;
  align-items: flex-start;
  column-gap: 40px;
  padding: 32px;
`;

export const StyledFormNavigation = styled(FormNavigation)`
  min-width: 190px;
`;

export const Sections = styled.div`
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const gridView = css`
  display: grid;
  grid-auto-rows: auto;
  grid-column-gap: 24px;
  align-items: start;
  grid-row-gap: 10px;
`;

export const DoubleColumn = styled.div`
  ${gridView};
  grid-template-columns: repeat(2, 1fr);
`;

export const TripleColumn = styled.div`
  ${gridView};
  grid-template-columns: repeat(3, 1fr);
`;

export const FourColumnSplit = styled.div`
  ${gridView};
  grid-template-columns: repeat(4, 1fr);
`;

export const TwoThirdsColumnSplit = styled.div`
  ${gridView};
  grid-template-columns: 1fr 2fr;
`;

export const ScheduleContainer = styled.div`
  ${gridView};
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: 1fr 1fr;
  gap: 12px 35px;

  @media (min-width: 1200px) {
    max-width: 730px;
  }
`;

export const StyledSwitch = styled(FormikSwitchInput)`
  margin-top: 25px;
`;

export const StyledSection = styled(Section)`
  ${SectionBody} {
    display: grid;
    grid-auto-rows: auto;
    grid-row-gap: 10px;
  }
`;

export const AddBlock = styled.div<{ $isVisible: boolean }>`
  display: flex;
  opacity: 0;
  visibility: hidden;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: 3px;
  transition: all 0.3s ease;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const TimeHint = styled(Typography)`
  margin-top: 33px;
  color: ${getPrefixedVar(prefix, 'timeHint')};
`;
