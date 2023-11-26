import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { ITooltipProps } from '@private/components';
import { useUpdateEffect } from '@private/hooks';

import { IAccordionHeaderProps } from 'components/Accordion';
import Tooltip from 'components/Tooltip';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { useSidebarContext } from '../SideBarContext';
import { AccordionContent, AccordionHeader, IconWrapper, Text } from '../styled';

interface IAccordionHeader extends IAccordionHeaderProps {
  tooltipProps: Omit<ITooltipProps, 'children'>;
  path?: string;
  navBarIcon?: React.ReactElement;
  intlName?: string;
}

const NavAccordionHeader = ({
  tooltipProps,
  path,
  navBarIcon,
  intlName,
  isOpen,
  openHandler,
}: IAccordionHeader) => {
  const { t } = useTranslation();

  const { pathname } = useLocation();
  const { isOpenBar } = useSidebarContext();

  useUpdateEffect(() => {
    if (!isOpenBar) {
      openHandler(false);
    }
  }, [isOpenBar]);

  const openAccordionHandler = () => {
    if (isOpenBar) {
      openHandler();
    }
  };

  return (
    <Tooltip {...tooltipProps}>
      <AccordionHeader
        onClick={openAccordionHandler}
        $isOpen={isOpen}
        $isActive={!!path && pathname.startsWith(path)}
        $isOpenBar={isOpenBar}
      >
        <AccordionContent $isOpenBar={isOpenBar}>
          <IconWrapper>{navBarIcon}</IconWrapper>
          <Text>{t(intlName as never)}</Text>
        </AccordionContent>
        <IconWrapper $isOpen={isOpen}>
          <ICONS_MAP.ArrowDown />
        </IconWrapper>
      </AccordionHeader>
    </Tooltip>
  );
};

export default appReactMemo(NavAccordionHeader);
