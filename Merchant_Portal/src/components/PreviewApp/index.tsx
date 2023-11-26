import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  gridDataContent,
  navBarContent,
  tabsContent,
} from 'components/PreviewApp/content';
import { ICONS_MAP } from 'constants/icons';

import {
  Container,
  Content,
  CustomButton,
  Filters,
  Filtration,
  Header,
  Logo,
  LogoTitle,
  Main,
  NavContent,
  NavItem,
  OpenButton,
  PerPage,
  Select,
  Sidebar,
  StyledDataGrid,
  StyledSearchInput,
  Tab,
  Table,
  Tabs,
  Title,
  TopBar,
} from './styled';
import { useTransactionsGridData } from './useTransactionsGridData';

const PreviewApp = () => {
  const { t } = useTranslation();

  const transactionColumns = useTransactionsGridData();

  const pagination = React.useMemo(() => {
    return {
      isDefaultGridPagination: true,
    };
  }, []);

  return (
    <Container>
      <Header>
        <Logo>
          <ICONS_MAP.Logo width={22} height={22} />
          <LogoTitle>{t('logo')}</LogoTitle>
        </Logo>
      </Header>
      <Main>
        <Sidebar>
          <OpenButton>
            <ICONS_MAP.MinimalLeftArrow width={5} height={9} />
          </OpenButton>
          {navBarContent.map(({ name, icon, isActive, hasSubFolders }) => (
            <NavItem key={name} $isActive={isActive}>
              <NavContent>
                {icon}
                {name}
              </NavContent>
              {hasSubFolders && <ICONS_MAP.ArrowDown width={13} />}
            </NavItem>
          ))}
        </Sidebar>
        <Content>
          <Title>{t('transactions.title')}</Title>
          <Filtration>
            <Filters>
              <StyledSearchInput
                label={t('common.filters.globalSearch')}
                startIconSize={13}
                endIconSize={12}
              />
              <CustomButton
                variant='outlined'
                endIcon={<ICONS_MAP.Filters />}
                iconSize={12}
              >
                {t('common.filters.filterLabel')}
              </CustomButton>
            </Filters>
            <Tabs>
              {tabsContent.map((tab, index) => (
                <Tab key={index} $isActive={!index}>
                  {t(tab as never)}
                </Tab>
              ))}
            </Tabs>
          </Filtration>
          <Table>
            <StyledDataGrid
              data={gridDataContent || []}
              columns={transactionColumns}
              total={gridDataContent.length}
              pagination={pagination}
              headerHeight={36}
              rowHeight={() => 36}
              notVirtualized
              isBottomToolbar={false}
              defaultMinWidthColumn={80}
              components={{
                TopToolbar: () => (
                  <TopBar>
                    <PerPage>{t('common.pagination.itemsPerPage')}</PerPage>
                    <Select
                      variant='icon'
                      endIcon={<ICONS_MAP.ArrowDown />}
                      iconSize={12}
                    >
                      10
                    </Select>
                    <CustomButton
                      variant='icon'
                      endIcon={<ICONS_MAP.Settings />}
                      iconSize={18}
                    />
                    <CustomButton
                      variant='outlined'
                      startIcon={<ICONS_MAP.ArrowCircle />}
                      iconSize={14}
                    >
                      {t('common.refresh')}
                    </CustomButton>
                  </TopBar>
                ),
              }}
            />
          </Table>
        </Content>
      </Main>
    </Container>
  );
};

export default PreviewApp;
