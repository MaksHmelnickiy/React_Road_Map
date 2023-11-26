import React, { MouseEvent } from 'react';

import Typography from 'components/Typography';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { ArrowButton, BlockHeader } from './styled';

interface IAccordionTitle {
  title: React.ReactNode;
  isOpen: boolean;
  openHandler?: () => void;
  onButtonClick?: () => void;
  onTitleClick?: () => void;
  isActive?: boolean;
}

const AccordionTitle = ({
  title,
  openHandler,
  onButtonClick,
  onTitleClick,
  isOpen,
  isActive,
}: IAccordionTitle) => {
  const buttonClickHandler = (e: MouseEvent) => {
    if (openHandler) {
      return;
    }
    e.stopPropagation();
    onButtonClick?.();
  };

  const titleClickHandler = () => {
    if (openHandler) {
      return openHandler();
    }
    onTitleClick?.();
  };

  return (
    <BlockHeader $isOpen={isOpen} onClick={titleClickHandler} $isActive={isActive}>
      <ArrowButton
        variant='icon'
        size='sm'
        startIcon={<ICONS_MAP.FullArrowDown />}
        iconSize={12}
        $isOpen={isOpen}
        onClick={buttonClickHandler}
      />
      <Typography variant='bold' size='sm'>
        {title}
      </Typography>
    </BlockHeader>
  );
};

export default appReactMemo(AccordionTitle);
