import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import BreadCrumb from 'components/BreadCrumb';
import { appReactMemo } from 'hocs';
import { ViewTitle } from 'routes/pages/AuthorizedStack/styled';

import { ViewContainer } from '../styled';

import GeneralInfo from './GeneralInfo';
import Limits from './Limits';

const TerminalLinkGroup = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'terminalLinkGroup' });
  const { id } = useParams();

  return (
    <ViewContainer>
      <div>
        <ViewTitle>{t('title')}</ViewTitle>
        <BreadCrumb />
      </div>
      <GeneralInfo id={id as string} />
      <Limits id={id as string} />
    </ViewContainer>
  );
};

export default appReactMemo(TerminalLinkGroup);
