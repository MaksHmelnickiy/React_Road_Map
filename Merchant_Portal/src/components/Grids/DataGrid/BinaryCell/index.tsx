import React from 'react';
import { useTranslation } from 'react-i18next';

import { appReactMemo } from 'hocs';

import { Container, Text } from '../RowCell/styled';

interface TBinaryCellData<T> {
  item: T;
  dataKey?: keyof T;
  rowIndex: number;
  className?: string;
  center?: boolean;
}

const BinaryCell = <T,>({
  dataKey,
  item,
  rowIndex,
  className,
  center,
}: TBinaryCellData<T>): React.ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'common' });

  const cellData = dataKey && item?.[dataKey];

  return (
    <Container className={className} $index={rowIndex} $center={center}>
      <Text>{cellData ? t('yes') : t('no')}</Text>
    </Container>
  );
};

export default appReactMemo(BinaryCell);
