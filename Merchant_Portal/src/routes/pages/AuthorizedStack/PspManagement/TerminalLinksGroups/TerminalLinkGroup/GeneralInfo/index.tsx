import React from 'react';
import { useTranslation } from 'react-i18next';

import BlockDetail from 'components/Blocks/BlockDetail';
import Loader from 'components/Loader';
import { appReactMemo } from 'hocs';
import { useGetDetailFields } from 'hooks/useGetDetailFields';
import { useGetTerminalLinkGroup } from 'queries/terminalsLinks';
import { ViewBlockContainer } from 'routes/pages/AuthorizedStack/styled';
import { LoaderContainer } from 'routes/styled';

interface IGeneralInfoProps {
  id: string;
}

const GeneralInfo = ({ id }: IGeneralInfoProps) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'terminalLinkGroup.generalInfo',
  });

  const { data, isLoading } = useGetTerminalLinkGroup(id);

  const generalInfo = useGetDetailFields({
    initPrefix: 'terminalLinkGroup.generalInfo',
    details: data,
  });

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <ViewBlockContainer>
      <BlockDetail title={t('title')} details={[generalInfo]} columnsCount={5} />
    </ViewBlockContainer>
  );
};

export default appReactMemo(GeneralInfo);
