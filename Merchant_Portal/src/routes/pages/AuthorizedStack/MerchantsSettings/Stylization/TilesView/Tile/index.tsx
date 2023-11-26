import React from 'react';
import { useTranslation } from 'react-i18next';

import { PERMISSIONS } from 'api/auth/constants';
import { ITheme } from 'api/merchantTerminalThemes/types';
import RBAC from 'components/RBAC';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import ActionsList from '../../ActionsList';
import { ActionsPopover } from '../../styled';

import {
  ActionsButton,
  Container,
  FitContainer,
  Footer,
  Name,
  Preview,
  StyledStatus,
} from './styled';

interface ITile {
  theme: ITheme;
  isActive: boolean;
  maxThemesReached: boolean;
  merchantId: string;
}

const Tile = ({ theme, isActive, maxThemesReached, merchantId }: ITile) => {
  const { t } = useTranslation('translation', { keyPrefix: 'common' });

  const { name, preview, isSystem } = theme;

  return (
    <Container>
      <Preview>
        <FitContainer>
          {preview ? <img src={preview} alt='Theme preview' /> : <ICONS_MAP.Preview />}
        </FitContainer>
      </Preview>
      <Footer $isActive={isActive}>
        <div>
          <Name variant='bold' size='lg'>
            {`${name}${isSystem ? ` (${t('default')})` : ''}`}
          </Name>
          <StyledStatus variant={isActive ? 'success' : 'neutral'}>
            {isActive ? t('status.active') : t('status.inactive')}
          </StyledStatus>
        </div>
        <RBAC
          list={[
            PERMISSIONS.CAN_SET_ACTIVE_PAYMENT_PAGE_STYLIZATION,
            PERMISSIONS.CAN_CHANGE_PAYMENT_PAGE_STYLIZATION,
            PERMISSIONS.CAN_COPY_PAYMENT_PAGE_STYLIZATION,
            PERMISSIONS.CAN_DELETE_PAYMENT_PAGE_STYLIZATION,
          ]}
          conditionType='OR'
        >
          <ActionsPopover
            disableInteractive
            immediateAnimation
            component={
              <ActionsList
                theme={theme}
                isSystem={theme.isSystem}
                isActive={isActive}
                maxThemesReached={maxThemesReached}
                merchantId={merchantId}
              />
            }
            placement='bottom-end'
            positionGap={0}
          >
            <ActionsButton
              variant='icon'
              iconSize={16}
              startIcon={<ICONS_MAP.More />}
              enableShowFocus
            />
          </ActionsPopover>
        </RBAC>
      </Footer>
    </Container>
  );
};

export default appReactMemo(Tile);
