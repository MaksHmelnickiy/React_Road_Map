import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import { PERMISSIONS } from 'api/auth/constants';
import { MAX_THEMES_COUNT } from 'api/merchantTerminalThemes/constants';
import { getSortedThemes } from 'api/merchantTerminalThemes/normalizers';
import Button from 'components/Button';
import Loader from 'components/Loader';
import RBAC from 'components/RBAC';
import { ICONS_MAP } from 'constants/icons';
import { useGetMerchantThemes } from 'queries/merchantTerminalThemes';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';

import { PageContainer } from '../../styled';

import GridView from './GridView';
import { Actions, Header, ThemeList, Title } from './styled';
import TilesView from './TilesView';

const Stylization = () => {
  const { id = '' } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation('translation', { keyPrefix: 'stylization' });

  const [isTiles, _setIsTiles] = React.useState(true);

  const { data: merchant, isLoading } = useGetMerchantThemes(id);

  // const onViewChange = (variant: boolean) => () => {
  //   setIsTiles(variant);
  // };

  const onCreateNew = React.useCallback(() => {
    const { PATH, PARAMS } =
      ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION.SUB_PATH.THEME.SUB_PATH
        .CREATE;
    const createPath = generatePath(PATH, {
      [PARAMS.ID]: id,
    });
    navigate(createPath);
  }, []);

  const themes = React.useMemo(() => {
    const { themes, activeTheme } = merchant || {};
    return themes && activeTheme ? getSortedThemes(themes, activeTheme) : [];
  }, [merchant]);

  const customThemesCount = React.useMemo(() => {
    const themesCount = themes.length;
    const systemCount = themes.reduce(
      (prev, item) => (item.isSystem ? prev + 1 : prev),
      0
    );

    return themesCount - systemCount;
  }, [themes]);

  const maxThemesReached = customThemesCount === MAX_THEMES_COUNT;

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <PageContainer>
      <Header>
        <Title as='h1'>{t('title')}</Title>
        <Actions>
          {/* <Button */}
          {/*  variant='icon' */}
          {/*  startIcon={<ICONS_MAP.List />} */}
          {/*  isActive={!isTiles} */}
          {/*  iconSize={18} */}
          {/*  onClick={onViewChange(false)} */}
          {/* /> */}
          {/* <Button */}
          {/*  variant='icon' */}
          {/*  startIcon={<ICONS_MAP.Tiles />} */}
          {/*  isActive={isTiles} */}
          {/*  iconSize={18} */}
          {/*  onClick={onViewChange(true)} */}
          {/* /> */}
          {!maxThemesReached && (
            <RBAC list={[PERMISSIONS.CAN_CREATE_PAYMENT_PAGE_STYLIZATION]}>
              <Button
                variant='outlined'
                startIcon={<ICONS_MAP.Plus />}
                iconSize={16}
                onClick={onCreateNew}
              >
                {t('create')}
              </Button>
            </RBAC>
          )}
        </Actions>
      </Header>
      <ThemeList>
        {isTiles ? (
          <TilesView
            themes={themes}
            activeTheme={merchant?.activeTheme}
            maxThemesReached={maxThemesReached}
            merchantId={id}
          />
        ) : (
          <GridView
            themes={themes}
            activeTheme={merchant?.activeTheme}
            maxThemesReached={maxThemesReached}
            merchantId={id}
          />
        )}
      </ThemeList>
    </PageContainer>
  );
};

export default Stylization;
