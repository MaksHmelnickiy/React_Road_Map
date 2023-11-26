import styled from 'styled-components';

import Typography from 'components/Typography';

export const Container = styled.div`
  margin-top: 50px;
  height: 108px;
  display: flex;
  align-items: center;
`;

export const Color = styled.div<{ color: string }>`
  padding: 10px;
  height: 108px;
  min-width: 46px;
  width: 100%;
  max-width: 61px;
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
  background: ${({ color }) => color};
  transition: all 0.3s ease;
`;

export const Numbers = styled(Typography)<{ light: boolean }>`
  color: ${({ light }) => (light ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 0%)')};
`;
