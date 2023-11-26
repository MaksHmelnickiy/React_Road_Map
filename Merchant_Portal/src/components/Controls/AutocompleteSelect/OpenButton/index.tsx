import { ISelectRenderButtonProps } from '@private/components';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { StyledButton } from './styled';

const OpenButton = ({
  loading,
  isOpen,
  readonly: _,
  ...props
}: ISelectRenderButtonProps) => {
  return (
    <StyledButton
      {...props}
      variant='icon'
      iconSize={24}
      $isOpen={isOpen}
      startIcon={loading ? undefined : <ICONS_MAP.ArrowDown />}
    />
  );
};

export default appReactMemo(OpenButton);
