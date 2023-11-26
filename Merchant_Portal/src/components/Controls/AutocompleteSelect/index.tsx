import React from 'react';
import { useTranslation } from 'react-i18next';

import Loader from 'components/Loader';
import { appReactMemo } from 'hocs';

import OpenButton from './OpenButton';
import { IAutocompleteSelect, StyledLg, StyledSm } from './styled';

const AutocompleteSelect = ({
  options,
  errorMessage,
  fullVisibleOption = true,
  disableUnselect = true,
  size = 'lg',
  enableRemoveButton = true,
  inputReadOnly = true,
  ...props
}: IAutocompleteSelect) => {
  const { t, i18n } = useTranslation();

  const withTranslation = React.useMemo(() => {
    return options.map((item) => ({
      ...item,
      label: item.label && i18n.exists(item.label) ? t(item.label as never) : item.label,
    }));
  }, [options, t]);

  const errorWithTranslation = errorMessage && t(errorMessage as never);

  const Component = size === 'lg' ? StyledLg : StyledSm; // because styled-components 6 doesn't remove unused classes.
  // so when we change the page autocomplete select override other select with different sizes.
  // so we need to add additional class to identify size

  return (
    <Component
      {...props}
      disableUnselect={disableUnselect}
      fullVisibleOption={fullVisibleOption}
      options={withTranslation}
      errorMessage={errorWithTranslation}
      renderDropdownButton={(props) => <OpenButton {...props} />}
      estimateItemSize={size === 'sm' ? 33 : 49}
      loader={<Loader size={25} />}
      loadingText={t('common.loadingItems')}
      enableRemoveButton={enableRemoveButton && !!props.value}
      inputReadOnly={inputReadOnly && !!props.value}
      highlightSearch
    />
  );
};

export default appReactMemo(AutocompleteSelect);
