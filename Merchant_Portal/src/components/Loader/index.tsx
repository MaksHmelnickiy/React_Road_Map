import React from 'react';

import { appReactMemo } from 'hocs';

import animationData from './lf20_ggqg4aoo.json';
import { Container, StyledPlayer } from './styled';

export interface ILoaderProps {
  size?: number;
  className?: string;
}

const Loader = ({ size = 34, className }: ILoaderProps): React.ReactElement => (
  <Container data-testid='loader' className={className} width={size} height={size}>
    <StyledPlayer autoplay loop src={animationData} size={size} />
  </Container>
);

export default appReactMemo(Loader);
