import React from 'react';
import { useTranslation } from 'react-i18next';

import BreadCrumb from 'components/BreadCrumb';
import Button from 'components/Button';
import TransferTree from 'components/Transfers/TransferTree';
import {
  ISelectedTreeOption,
  ITransferTreeData,
} from 'components/Transfers/TransferTree/types';
import { appReactMemo } from 'hocs';

import { Actions, Body, Container, Header, Title } from './styled';

export interface ITransferItem<T extends string> {
  key: string;
  iconHeader?: React.FunctionComponent;
  dataListName: string;
  selectDataText: string;
  treeData?: ITransferTreeData<T>;
}

interface ITransferPage<T extends string> {
  title: string;
  transfer: ITransferItem<T>;
  onSave: (selected: ISelectedTreeOption[]) => void;
  onBack: () => void;
}

const TransferPage = <T extends string>({
  transfer,
  title,
  onSave,
  onBack,
}: ITransferPage<T>) => {
  const { t } = useTranslation('translation', { keyPrefix: 'common.transferPage' });

  const { treeData, dataListName, selectDataText, iconHeader } = transfer;

  const selectedItems = React.useRef<ISelectedTreeOption[]>(
    treeData?.initialSelected || []
  ); // state to save selected items to save it on save button click

  const onFinishSave = React.useCallback(() => {
    onSave(selectedItems.current);
  }, [selectedItems.current, onSave]);

  const onChange = React.useCallback((selectedTreeItems: ISelectedTreeOption[]) => {
    selectedItems.current = selectedTreeItems;
  }, []);

  return (
    <Container>
      <Header>
        <div>
          <Title as='h3'>{title}</Title>
          <BreadCrumb />
        </div>
        <Actions>
          <Button variant='outlined' onClick={onBack}>
            {t('cancel')}
          </Button>
          <Button variant='primary' onClick={onFinishSave}>
            {t('assign')}
          </Button>
        </Actions>
      </Header>
      <Body>
        <TransferTree
          {...treeData}
          onChange={onChange}
          iconHeader={iconHeader}
          dataListName={dataListName}
          selectDataText={selectDataText}
        />
      </Body>
    </Container>
  );
};

export default appReactMemo(TransferPage);
