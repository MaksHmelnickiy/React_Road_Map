import React from 'react';

import { appReactMemo } from 'hocs';

import { Label, Value } from './styled';

interface IPreselectedField {
  label?: string;
  value?: string | null;
}

const PreselectedField = ({ label, value }: IPreselectedField) => {
  return (
    <div>
      <Label size='xs' variant='bold'>
        {label}
      </Label>
      <Value size='sm'>{value}</Value>
    </div>
  );
};

export default appReactMemo(PreselectedField);
