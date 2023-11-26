import React from 'react';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { Message, Preview, TModalVariant } from './styled';

interface IDeleteModalContent {
  message: string;
  variant: TModalVariant;
  preview: string;
}

const DeleteModalContent = ({ message, variant, preview }: IDeleteModalContent) => {
  return (
    <>
      <Preview>
        {preview ? <img src={preview} alt='Theme preview' /> : <ICONS_MAP.Preview />}
      </Preview>
      <Message variant='bold' size='lg' modalVariant={variant}>
        {message}
      </Message>
    </>
  );
};

export default appReactMemo(DeleteModalContent);
