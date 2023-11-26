import React from 'react';
import { useTranslation } from 'react-i18next';

import { ITerminalLink } from 'api/terminalsLinks/types';
import Detail from 'components/Detail';
import { appReactMemo } from 'hocs';
import { SectionDataList } from 'routes/pages/AuthorizedStack/PspManagement/TerminalsLinks/TerminalLink/View/styled';
import { ViewBlockContainer, ViewBlockTitle } from 'routes/pages/AuthorizedStack/styled';

import useSettingsData from './useSettingsData';

interface IGeneralInfo {
  details?: ITerminalLink;
}

const TerminalSettings = ({ details }: IGeneralInfo) => {
  const { t } = useTranslation();

  const settingsData = useSettingsData(details);

  return (
    <ViewBlockContainer>
      <ViewBlockTitle variant='bold' size='xl'>
        {t('terminalLink.settings.title')}
      </ViewBlockTitle>
      <SectionDataList>
        {settingsData.map((info, index) => (
          <Detail
            key={index}
            title={info.key}
            text={info.link?.(details) || info.value}
            small
          />
        ))}
      </SectionDataList>
    </ViewBlockContainer>
  );
};

export default appReactMemo(TerminalSettings);
