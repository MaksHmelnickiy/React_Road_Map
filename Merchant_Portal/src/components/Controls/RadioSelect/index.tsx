import React from 'react';
import { useTranslation } from 'react-i18next';

import { IRadioSelectProps } from '@private/components';

import { appReactMemo } from 'hocs';

import StyledRadioSelect from './styled';

const RadiosSelect = ({ data, ...rest }: IRadioSelectProps) => {
  const { t, i18n } = useTranslation();

  const withTranslation = React.useMemo(() => {
    return data.map((item) => ({
      ...item,
      label: item.label && i18n.exists(item.label) ? t(item.label as never) : item.label,
    }));
  }, [data]);

  return <StyledRadioSelect {...rest} data={withTranslation} />;
};

export default appReactMemo(RadiosSelect);
