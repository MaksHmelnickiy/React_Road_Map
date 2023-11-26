import React from 'react';

import { ICONS_MAP } from 'constants/icons';

import { IconContainer, ISwitchProps, StyledSwitch } from './styled';

const Switch = (props: ISwitchProps) => {
  const renderIcon = (isChecked: boolean) => {
    if (isChecked) {
      return (
        <IconContainer>
          <ICONS_MAP.Check />
        </IconContainer>
      );
    }

    return (
      <IconContainer>
        <ICONS_MAP.Close />
      </IconContainer>
    );
  };

  return <StyledSwitch {...props} renderIcon={renderIcon} />;
};

export default Switch;
