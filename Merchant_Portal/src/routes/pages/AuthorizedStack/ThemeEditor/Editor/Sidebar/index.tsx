import React from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { useSidebarContext } from '../Sidebars/SidebarsContext';

import ComponentsStylization from './ComponentsStylization';
import { STYLIZATION } from './constants';
import {
  Body,
  CloseButton,
  Container,
  Content,
  EditSelect,
  Header,
  SectionButton,
} from './styled';
import StylesStylization from './StylesStylization';

interface ISidebar {
  stylizationType: STYLIZATION;
  selectStylization: (type: STYLIZATION) => void;
}

const STYLIZATION_TYPES = {
  [STYLIZATION.STYLES]: <StylesStylization />,
  [STYLIZATION.COMPONENTS]: <ComponentsStylization />,
};

const Sidebar = ({ stylizationType, selectStylization }: ISidebar) => {
  const { t } = useTranslation();
  const { sidebarState, updateSidebarState } = useSidebarContext();

  const isLeftOpen = sidebarState.left;

  const selectStylizationType = (type: STYLIZATION) => () => {
    selectStylization(type);
  };

  const openHandler = React.useCallback(() => {
    updateSidebarState('left', !isLeftOpen);
  }, [isLeftOpen]);

  return (
    <Container $isOpen={isLeftOpen}>
      <Body>
        <Header>
          <EditSelect>
            {Object.keys(STYLIZATION_TYPES).map((type) => (
              <SectionButton
                key={type}
                $isActive={type === stylizationType}
                onClick={selectStylizationType(type as STYLIZATION)}
              >
                {t(type as never)}
              </SectionButton>
            ))}
          </EditSelect>
          <CloseButton
            variant='icon'
            size='xs'
            startIcon={<ICONS_MAP.DoubleArrows />}
            onClick={openHandler}
            $isOpen={isLeftOpen}
          />
        </Header>
        <Content $isOpen={isLeftOpen}>{STYLIZATION_TYPES[stylizationType]}</Content>
      </Body>
    </Container>
  );
};

export default appReactMemo(Sidebar);
