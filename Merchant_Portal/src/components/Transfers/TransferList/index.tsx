import React from 'react';
import { useTranslation } from 'react-i18next';

import { ITransferListProps } from '@private/transfers';

import NoItemsFound from 'components/NoItemsFound';
import { appReactMemo } from 'hocs';

import { StyledTransferList } from './styled';

interface ITransferList extends ITransferListProps {
  dataListName?: string;
}

const TransferList = ({ dataListName, ...props }: ITransferList) => {
  const { t } = useTranslation('translation', { keyPrefix: 'common.transferList' });

  const textConfig = React.useMemo(
    () => ({
      dataListName,
      leftColumn: {
        all: t('all'),
        available: t('available'),
      },
      rightColumn: {
        list: t('list'),
        selected: t('selected'),
        assigned: t('assigned'),
      },
    }),
    [dataListName]
  );

  const renderNoResults = React.useCallback((variant: 'total' | 'selected') => {
    return (
      <NoItemsFound
        title={
          variant === 'total'
            ? t('listEmpty')
            : `${t('noAssignedItems')} ${dataListName || t('items')}`
        }
        subtitle={
          variant === 'total'
            ? undefined
            : `${t('check')} ${dataListName || t('items')} ${t('checkInColumn')}`
        }
      />
    );
  }, []);

  return (
    <StyledTransferList
      {...props}
      customNoItemsResult={renderNoResults}
      textConfig={textConfig}
    />
  );
};

export default appReactMemo(TransferList);
