import React from 'react';
import { useTranslation } from 'react-i18next';

import { ISearchInputProps } from '@private/components';

import { StyledSearchInput } from 'components/Controls/SearchInput/styled';
import { appReactMemo } from 'hocs';

const SearchInput = (props: ISearchInputProps) => {
  const { t } = useTranslation();

  return <StyledSearchInput label={t('common.filters.globalSearch')} {...props} />;
};

export default appReactMemo(SearchInput);
