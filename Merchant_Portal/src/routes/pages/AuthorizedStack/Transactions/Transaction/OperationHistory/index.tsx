import React from 'react';
import { useParams } from 'react-router-dom';

import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { appReactMemo } from 'hocs';
import { useGetTransactionOperationHistory } from 'queries/transactions';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';

import { Container } from './styled';
import { useOperationHistoryGridData } from './useOperationHistoryGridData';

const OperationHistory = () => {
  const { id = '' } = useParams();

  const { data, isLoading, refetch } = useGetTransactionOperationHistory(id);

  const transactionsColumns = useOperationHistoryGridData(data?.operationHistory);

  const pagination = React.useMemo(() => {
    return {
      isDefaultGridPagination: true,
    };
  }, []);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <Container>
      <DataGrid
        data={data?.operationHistory || []}
        columns={transactionsColumns}
        total={data?.operationHistory.length}
        pagination={pagination}
        pageKey={ROUTES.TRANSACTIONS.SUB_PATH.VIEW.PATH}
        refetch={refetch}
      />
    </Container>
  );
};

export default appReactMemo(OperationHistory);
