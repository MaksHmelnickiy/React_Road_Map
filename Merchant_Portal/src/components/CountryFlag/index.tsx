import React from 'react';

import { FLAGS_MAP } from 'constants/countryFlags';
import { appReactMemo } from 'hocs';

import { FlagImg } from './styled';

interface ICountryFlag {
  countryCode: string;
  className?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

const Flag = ({ countryCode, fullWidth, fullHeight, className }: ICountryFlag) => {
  const flagSrc = FLAGS_MAP[countryCode as keyof typeof FLAGS_MAP];

  if (!flagSrc) {
    return null;
  }

  return (
    <div className={className}>
      <FlagImg
        src={flagSrc}
        alt={countryCode}
        loading='lazy'
        $fullWidth={fullWidth}
        $fullHeight={fullHeight}
      />
    </div>
  );
};

export default appReactMemo(Flag);
