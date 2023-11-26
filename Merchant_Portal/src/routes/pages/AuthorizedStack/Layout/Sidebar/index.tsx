import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMatch } from 'react-router-dom';

import Accordion from 'components/Accordion';
import Tooltip from 'components/Tooltip';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';
import { TCheckPermission, useRBAC } from 'hooks/useRBAC';
import { useConfirmModal } from 'modals';
import { useAuthentication } from 'queries/session';
import { IRoutesConfigItem, ROUTES_CONFIG } from 'routes/config';
import { setSidebarState } from 'store/userConfiguration';

import AccordionItem from './Accordion/AccordionItem';
import NavAccordionHeader from './Accordion/NavAccordionHeader';

import { SidebarProvider, useSidebarContext } from './SideBarContext';
import {
  Container,
  Content,
  IconWrapper,
  LinkItem,
  LogoutMessage,
  NavigationItem,
  NavigationList,
  OpenButton,
  Text,
} from './styled';

interface INavItem extends Omit<IRoutesConfigItem, 'component' | 'path'> {
  onClick?: () => void;
  path?: string;
}

const NavItem = (props: INavItem) => {
  const { t } = useTranslation();

  const { path, breadcrumb, intlKey, navBarIcon, isParentFolder, children, onClick } =
    props;

  const intlName = typeof breadcrumb === 'string' ? breadcrumb : intlKey;

  const { isOpenBar } = useSidebarContext();

  const tooltipProps = {
    component: t(intlName as never),
    disabled: isOpenBar,
    placement: 'right' as const,
    openDelay: 300,
    immediateAnimation: true,
  };

  if (children?.length && isParentFolder) {
    return (
      <Accordion
        header={(props) => (
          <NavAccordionHeader
            {...props}
            tooltipProps={tooltipProps}
            path={path}
            navBarIcon={navBarIcon}
            intlName={intlName}
          />
        )}
      >
        {children.map((config) => (
          <AccordionItem key={config.path} {...config} isOpenBar={isOpenBar} />
        ))}
      </Accordion>
    );
  }

  const navContent = (
    <>
      <IconWrapper>{navBarIcon}</IconWrapper>
      <Text>{t((breadcrumb || intlKey) as never)}</Text>
    </>
  );

  if (!path) {
    return (
      <Tooltip {...tooltipProps}>
        <NavigationItem onClick={onClick} $isOpenBar={isOpenBar}>
          {navContent}
        </NavigationItem>
      </Tooltip>
    );
  }

  return (
    <Tooltip {...tooltipProps}>
      <LinkItem to={path} $isActive={!!useMatch(path)} $isOpenBar={isOpenBar}>
        {navContent}
      </LinkItem>
    </Tooltip>
  );
};

interface IGetMenu extends IRoutesConfigItem {
  checkPermission: TCheckPermission;
}

const getMenu = ({
  permissions,
  permissionType,
  checkPermission,
  ...rest
}: IGetMenu): React.ReactElement | React.ReactElement[] | null => {
  const enabled = checkPermission({ list: permissions, conditionType: permissionType });

  const { children, navBarIcon } = rest;

  if (permissions && !enabled) {
    return null;
  }

  if (!navBarIcon && children) {
    return children.map((subRoute) =>
      getMenu({ ...subRoute, checkPermission })
    ) as React.ReactElement[];
  }

  if (navBarIcon) {
    return <NavItem key={rest.path} {...rest} />;
  }

  return null;
};

const Sidebar = () => {
  const { t } = useTranslation();

  const { logout } = useAuthentication();
  const { checkPermission } = useRBAC();

  const [showConfirmModal] = useConfirmModal();

  const { isOpenBar } = useAppSelector((state) => state.userConfiguration);

  const dispatch = useAppDispatch();

  const openHandler = React.useCallback(() => {
    dispatch(setSidebarState(!isOpenBar));
  }, [isOpenBar]);

  const onLogout = React.useCallback(() => {
    showConfirmModal({
      title: t('logout.title'),
      message: (
        <LogoutMessage variant='bold' size='lg'>
          {t('logout.message')}
        </LogoutMessage>
      ),
      onConfirm: logout,
    });
  }, []);

  const contextValue = React.useMemo(
    () => ({
      isOpenBar: !!isOpenBar,
    }),
    [isOpenBar]
  );

  return (
    <Container $isOpen={!!isOpenBar}>
      <OpenButton
        variant='icon'
        startIcon={<ICONS_MAP.MinimalRightArrow />}
        $isOpen={!!isOpenBar}
        iconSize={14}
        onClick={openHandler}
      />
      <Content>
        <NavigationList>
          <SidebarProvider value={contextValue}>
            {ROUTES_CONFIG.map((route) => getMenu({ ...route, checkPermission }))}
          </SidebarProvider>
        </NavigationList>
        <NavItem
          onClick={onLogout}
          navBarIcon={<ICONS_MAP.Logout />}
          intlKey='logout.title'
        />
      </Content>
    </Container>
  );
};

export default appReactMemo(Sidebar);
