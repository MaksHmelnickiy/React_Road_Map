import React from 'react';

import { useUpdateEffect } from '@private/hooks';

import { ISelectedTreeOption } from 'components/Transfers/TransferTree/types';
import { appReactMemo } from 'hocs';

import TransferPage, { ITransferItem } from '../TransferPage';

import { ComponentContainer, Container } from './styled';

export interface ITransferComponentProps {
  openTransfer: (key: string) => void;
}

interface ITransferWrapper<T extends string> {
  children: (props: ITransferComponentProps) => React.ReactNode;
  data: ITransferItem<T>[];
  title: string;
}

const TransferWrapper = <T extends string>({
  data,
  title,
  children,
}: ITransferWrapper<T>) => {
  const [transfer, setTransfer] = React.useState<ITransferItem<T> | null>(null);

  useUpdateEffect(() => {
    if (transfer) {
      const transferItem = data.find((item) => item.key === transfer.key);
      if (transferItem) {
        setTransfer(transferItem);
      }
    }
  }, [data]);

  const openTransfer = React.useCallback(
    (key: string) => {
      const transferItem = data.find((item) => item.key === key);
      if (transferItem) {
        setTransfer(transferItem);
        window.scrollTo({ top: 0 });
      }
    },
    [data]
  );

  const closeTransfer = React.useCallback(() => {
    setTransfer(null);
  }, []);

  const onFinishManage = React.useCallback(
    (selectedItems: ISelectedTreeOption[]) => {
      transfer?.treeData?.onChange?.(selectedItems);
      closeTransfer();
    },
    [transfer?.treeData?.onChange]
  );

  return (
    <Container>
      {transfer && (
        <TransferPage
          title={title}
          transfer={transfer}
          onSave={onFinishManage}
          onBack={closeTransfer}
        />
      )}
      <ComponentContainer $isVisible={!transfer}>
        {children({ openTransfer })}
      </ComponentContainer>
    </Container>
  );
};

export default appReactMemo(TransferWrapper);
