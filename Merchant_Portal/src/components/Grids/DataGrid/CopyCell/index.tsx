import React from 'react';
import { useTranslation } from 'react-i18next';

import Link from 'components/Link';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { copyToClipBoard } from 'utils/common';

import { Container, CopyButton, TextWrapper } from './style';

interface ICopyCell<T> {
  text: string;
  item: T;
  enableFullText?: boolean;
  onClick?: (item: T) => void;
  to?: string;
}

const TEXT_LENGTH = 10;

const CopyCell = <T,>({ text, onClick, item, to, enableFullText }: ICopyCell<T>) => {
  const { t } = useTranslation();
  const onRowClick = React.useCallback(() => {
    return onClick?.(item);
  }, [text]);

  const normalizeText = React.useMemo(() => {
    if (text.length <= TEXT_LENGTH || enableFullText) {
      return text;
    }
    return `${text.slice(0, 5)}...${text.slice(-5)}`;
  }, [text, enableFullText]);

  const onCopy = React.useCallback(() => copyToClipBoard(text), []);

  if (!text) {
    return <>-</>;
  }

  return (
    <Container>
      <CopyButton
        variant='icon'
        startIcon={<ICONS_MAP.Copy />}
        iconSize={14}
        onClick={onCopy}
        tooltipText={t('common.copied')}
      />
      {to ? (
        <Link to={to}>{normalizeText}</Link>
      ) : (
        <TextWrapper
          onClick={onRowClick}
          $isClickable={!!onClick}
          $isEllipsis={!!enableFullText}
        >
          {normalizeText}
        </TextWrapper>
      )}
    </Container>
  );
};

export default appReactMemo(CopyCell);
