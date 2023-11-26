import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import BlockDetail from 'components/Blocks/BlockDetail';
import BlockTags from 'components/Blocks/BlockTags';
import BreadCrumb from 'components/BreadCrumb';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Typography from 'components/Typography';
import { ICONS_MAP } from 'constants/icons';
import { useGetUser } from 'queries/users';
import { ROUTES } from 'routes/config/constants';
import { ViewContainer, ViewTitleWrapper } from 'routes/pages/AuthorizedStack/styled';
import { LoaderContainer } from 'routes/styled';

import { ButtonContainer, HeaderContainer } from './styled';
import useGeneralInfoData from './useGeneralInfoData';

const User = () => {
  const { t } = useTranslation();
  const { id = '' } = useParams();
  const navigate = useNavigate();

  const { data: user, isLoading } = useGetUser(id);

  const editUser = React.useCallback(() => {
    const { PATH, PARAMS } = ROUTES.USERS.SUB_PATH.EDIT;
    const clientPath = generatePath(PATH, { [PARAMS.ID]: id });

    navigate(clientPath);
  }, []);

  const generalInfo = useGeneralInfoData(user);

  const organization = React.useMemo(() => {
    return user?.roleScope?.merchants?.map((merchant) => merchant.name) || [];
  }, [user?.roleScope?.merchants]);

  const merchants = React.useMemo(() => {
    const merchants: string[] = [];

    user?.roleScope?.merchants?.forEach((organization) => {
      organization.merchantTerminals.forEach((merchant) => {
        merchants.push(merchant.name);
      });
    });

    return merchants || [];
  }, [user?.roleScope?.merchants]);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <ViewContainer>
      <HeaderContainer>
        <div>
          <ViewTitleWrapper>
            <Typography as='h3'>{`${t('users.user')}: `}</Typography>
            <Typography variant='regular' size='xxl'>
              {user?.login}
            </Typography>
          </ViewTitleWrapper>
          <BreadCrumb />
        </div>
        <ButtonContainer>
          <Button variant='outlined' onClick={editUser} startIcon={<ICONS_MAP.Edit />}>
            {t('common.edit')}
          </Button>
        </ButtonContainer>
      </HeaderContainer>
      <BlockDetail title={t('user.settings.title')} details={generalInfo} />
      <BlockTags title={t('user.role')} details={user?.role || []} />
      {!user?.roleScope.fullAccess && (
        <>
          <BlockTags title={t('user.organization')} details={organization} />
          <BlockTags title={t('user.merchant')} details={merchants} />
        </>
      )}
    </ViewContainer>
  );
};

export default User;
