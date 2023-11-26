import React from 'react';
import { useParams } from 'react-router-dom';

import BreadCrumb from 'components/BreadCrumb';
import Loader from 'components/Loader';
import { appReactMemo } from 'hocs';
import { useGetTerminalLink } from 'queries/terminalsLinks';
import { ViewContainer, ViewTitle } from 'routes/pages/AuthorizedStack/styled';
import { LoaderContainer } from 'routes/styled';

import Limits from './Limits';
import Parameters from './Parameters';
import Settings from './Settings';

const TerminalLink = () => {
  const { id } = useParams();

  const { data: terminalLinkInfo, isLoading } = useGetTerminalLink(id);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <ViewContainer>
      <div>
        <ViewTitle>{id}</ViewTitle>
        <BreadCrumb />
      </div>
      <Settings details={terminalLinkInfo} />
      <Parameters details={terminalLinkInfo?.parameters} />
      <Limits id={id} />
    </ViewContainer>
  );
};

export default appReactMemo(TerminalLink);
