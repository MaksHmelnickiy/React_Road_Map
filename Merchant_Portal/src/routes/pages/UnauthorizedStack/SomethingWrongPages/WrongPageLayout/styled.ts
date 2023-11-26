import { getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Button from 'components/Button';
import Typography from 'components/Typography';
import { AppContainer } from 'routes/styled';
import { ThemedElement } from 'utils/types';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  align-self: center;
`;

export const Body = styled.div`
  flex: 0 1 380px;
`;

export const CustomButton = styled(Button)`
  margin: 0 auto;
`;

export const Title = styled(Typography)<ThemedElement>`
  padding: 40px 0 8px 0;
`;

export const Text = styled(Typography)<ThemedElement>`
  text-align: center;
  margin-bottom: 32px;
`;

export const Wrapper = styled(AppContainer)<ThemedElement>`
  flex: 1 1 auto;
  overflow: hidden;
  min-height: auto;

  ${({ themePrefix = ['components', 'wrongPage'] }: ThemedElement) => {
    return css`
      ${Title} {
        color: ${getPrefixedVar(themePrefix, 'title')};
      }

      ${Text} {
        color: ${getPrefixedVar(themePrefix, 'message')};
      }
    `;
  }}
`;

export const OptionalButtons = styled.div<{ $isDouble: boolean }>`
  display: grid;
  grid-template-columns: ${({ $isDouble }) => ($isDouble ? '1fr 1fr' : '50%')};
  justify-content: center;
  column-gap: 20px;

  & > * {
    min-width: 100%;
    padding: 0 10px;
  }
`;
