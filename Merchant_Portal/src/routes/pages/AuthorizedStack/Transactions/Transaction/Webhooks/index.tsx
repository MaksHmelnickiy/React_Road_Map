import React from 'react';
import { useParams } from 'react-router-dom';

import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { appReactMemo } from 'hocs';
import { useGetTransactionWebhooks } from 'queries/transactions';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';

import { Container } from './styled';
import { useWebhooksGridData } from './useWebhooksGridData';

const Webhooks = () => {
  const { id } = useParams();

  const { data, isLoading, refetch } = useGetTransactionWebhooks(id);

  const transactionsColumns = useWebhooksGridData(data?.listWebhooks);

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
        data={data?.listWebhooks || []}
        columns={transactionsColumns}
        total={data?.listWebhooks.length}
        pagination={pagination}
        pageKey={ROUTES.TRANSACTIONS.SUB_PATH.VIEW.PATH}
        refetch={refetch}
      />
    </Container>
  );
};

export default appReactMemo(Webhooks);
