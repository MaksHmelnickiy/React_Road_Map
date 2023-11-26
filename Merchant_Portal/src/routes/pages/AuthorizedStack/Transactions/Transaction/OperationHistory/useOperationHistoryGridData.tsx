import React from 'react';
import { useTranslation } from 'react-i18next';

import { TAG_VARIANTS } from '@private/components';
import { IColumn, UNITS } from '@private/data-grid';

import {
  OPERATION_STATE,
  OPERATION_STATE_TAG,
  TRANSACTIONS_STATE_VARIANTS,
} from 'api/transactions/contants';
import { IOperationHistory } from 'api/transactions/types';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Status from 'components/Tags/Status';
import { TStatus } from 'components/Tags/Status/styled';
import Tag from 'components/Tags/Tag';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { getFormattedDate } from 'utils/common';
import { IUseGridDataResult } from 'utils/types';

const getTransactionStatusVariant = (value: string): TStatus => {
  const existedVariant = TRANSACTIONS_STATE_VARIANTS[value] as TStatus;
  return existedVariant || 'primary';
};

export const useOperationHistoryGridData = (
  data?: IOperationHistory[]
): IUseGridDataResult<IOperationHistory> => {
  const { t } = useTranslation();
  const getDictionaryNaming = useGetDictionaryNaming();

  const operationHistoryColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'id',
        title: t('transaction.operationHistory.columns.id'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{params.item.id}</RowCell>;
        },
      },
      {
        dataKey: 'operationType',
        title: t('transaction.operationHistory.columns.operationType'),
        minWidth: 220,
        width: {
          unit: UNITS.PERCENT,
          value: 15,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell center {...params} />;
        },
        renderRowCell: (params) => {
          const { operationType } = params.item;
          const text = getDictionaryNaming('operationType', operationType);
          return (
            <RowCell center {...params}>
              <Tag variant={TAG_VARIANTS.PRIMARY} label={text} />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'operationState',
        title: t('transaction.operationHistory.columns.operationState'),
        minWidth: 220,
        width: {
          unit: UNITS.PERCENT,
          value: 15,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell center {...params} />;
        },
        renderRowCell: (params) => {
          const { operationState } = params.item;
          const tagVariant = OPERATION_STATE_TAG[
            operationState.toLowerCase() as OPERATION_STATE
          ] as TStatus;
          const text = getDictionaryNaming('operationState', operationState);
          return (
            <RowCell center {...params}>
              <Status variant={tagVariant}>{text}</Status>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'transactionState',
        title: t('transaction.operationHistory.columns.transactionState'),
        minWidth: 220,
        width: {
          unit: UNITS.PERCENT,
          value: 15,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell center {...params} />;
        },
        renderRowCell: (params) => {
          const { transactionState } = params.item;
          const variant = getTransactionStatusVariant(transactionState);
          const text = getDictionaryNaming('transactionState', transactionState);
          return (
            <RowCell center {...params}>
              <Status variant={variant}>{text}</Status>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'description',
        title: t('transaction.operationHistory.columns.description'),
        minWidth: 210,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{params.item.description}</RowCell>;
        },
      },
      {
        dataKey: 'resultCode',
        title: t('transaction.operationHistory.columns.resultCode'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{params.item.resultCode}</RowCell>;
        },
      },
      {
        dataKey: 'bankMessage',
        title: t('transaction.operationHistory.columns.bankMessage'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{params.item.bankMessage}</RowCell>;
        },
      },
      {
        dataKey: 'executionTime',
        title: t('transaction.operationHistory.columns.executionTime'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>{getFormattedDate(params.item.executionTime)}</RowCell>
          );
        },
      },
      {
        dataKey: 'created',
        title: t('transaction.operationHistory.columns.created'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{getFormattedDate(params.item.created)}</RowCell>;
        },
      },
    ] as IColumn<IOperationHistory>[];
  }, []);

  return !data ? [] : operationHistoryColumns;
};
