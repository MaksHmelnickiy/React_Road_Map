import React from 'react';

import { appReactMemo } from 'hocs';

import { DetailsWrapper, SectionHeader, SectionTitle } from './styled';

interface IInfoBlock {
  title: string;
  children?: React.ReactNode;
}

const InfoBlock = ({ title, children }: IInfoBlock) => {
  return (
    <DetailsWrapper>
      <SectionHeader>
        <SectionTitle variant='bold' size='xl'>
          {title}
        </SectionTitle>
      </SectionHeader>
      {children}
    </DetailsWrapper>
  );
};

export default appReactMemo(InfoBlock);
