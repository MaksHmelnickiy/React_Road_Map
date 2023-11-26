import React from 'react';

import { IHsl } from 'utils/themeHelpers';

interface IUseInputRevertValue {
  conditionCallback: (prevValue: string, hsl?: IHsl) => void;
  hsl?: IHsl;
}

export const useInputRevertValue = ({ conditionCallback, hsl }: IUseInputRevertValue) => {
  const prevValue = React.useRef('');
  const prevHsl = React.useRef<IHsl>();

  const onFocus = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      prevValue.current = e.target.value;
      prevHsl.current = hsl;
    },
    [hsl]
  );

  const onBlur = React.useCallback(() => {
    conditionCallback(prevValue.current, prevHsl.current);
    prevValue.current = '';
  }, [conditionCallback]);

  return { onFocus, onBlur };
};
