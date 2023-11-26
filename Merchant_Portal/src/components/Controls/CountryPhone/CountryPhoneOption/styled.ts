import { getFontBase } from '@private/payment';
import styled from 'styled-components';

import CountryFlag from 'components/CountryFlag';

export type TSizes = 'lg' | 'sm';

const prefix = ['components', 'countryPhone'];

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CountryIcon = styled(CountryFlag)`
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CountryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CountryName = styled.div<{ size: TSizes }>`
  ${({ size }) => getFontBase([...prefix, size, 'option', 'countryName'])};
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 190px;
  overflow: hidden;
`;

export const CountryPrefix = styled.div<{ size: TSizes }>`
  ${({ size }) => getFontBase([...prefix, size, 'option', 'countryPrefix'])};
  white-space: nowrap;
`;
