import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { TSelectValues } from '@private/components';

import { PER_PAGE_OPTIONS } from 'constants/common';
import { appReactMemo } from 'hocs';

import { Container, StyledAutoCompleteSelect, Text } from './styled';

interface IItemsPerPage {
  value?: number;
  onChange?: (page: number) => void;
  className?: string;
}

const ItemsPerPage: React.FC<IItemsPerPage> = ({ value = 10, onChange, className }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'common.pagination' });

  const onSelectValue = useCallback(
    (value: TSelectValues | TSelectValues[]) => {
      onChange?.(value as number);
    },
    [onChange]
  );

  return (
    <Container className={className}>
      <Text size='sm' variant='bold'>
        {t('itemsPerPage')}
      </Text>
      <StyledAutoCompleteSelect
        options={PER_PAGE_OPTIONS}
        value={value}
        onChange={onSelectValue}
        selectOnly
        enableRemoveButton={false}
      />
    </Container>
  );
};

export default appReactMemo(ItemsPerPage);
