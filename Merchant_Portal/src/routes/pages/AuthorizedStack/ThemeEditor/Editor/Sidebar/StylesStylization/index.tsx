import React from 'react';

import { appReactMemo } from 'hocs';

import Palette from './Palette';
import Typographies from './Typographies';

const StylesStylization = () => {
  return (
    <>
      <Palette />
      <Typographies />
    </>
  );
};

export default appReactMemo(StylesStylization);
