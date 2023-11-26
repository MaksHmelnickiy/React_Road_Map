import React from 'react';

import { ICustomBottomToolbarProps } from '@private/data-grid';
import { useUpdateEffect } from '@private/hooks';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { Button, Container, Ellipsis, Pagination, PaginationInfo } from './styled';

const BottomToolbar = ({ pagination }: ICustomBottomToolbarProps) => {
  const {
    pageNavigation: { perPage, total, onChange, currentPage, textConfig },
  } = pagination;
  const totalPages = Math.ceil(total / perPage);

  const createPagesArray = () => {
    const range = { start: 1, stop: totalPages };

    if (totalPages <= 6) {
      range.start = 2;
      range.stop = totalPages - 1;
    } else if (currentPage < 4) {
      range.start = 2;
      range.stop = 5;
    } else if (currentPage >= 4 && currentPage <= totalPages - 5) {
      range.start = currentPage;
      range.stop = currentPage + 2;
    } else if (currentPage > totalPages - 5) {
      range.start = totalPages - 4;
      range.stop = totalPages - 1;
    }

    const result = [
      1,
      ...Array.from(
        { length: range.stop - range.start + 1 },
        (value, index) => range.start + index
      ),
    ];

    if (totalPages !== 1 && totalPages !== 0) result.push(totalPages);

    return result;
  };

  const [pages, setPages] = React.useState<number[]>(createPagesArray);

  useUpdateEffect(() => {
    setPages(createPagesArray());
  }, [currentPage, total, perPage]);

  const onChangePage = (newPage: number) => () => {
    if (onChange && newPage > 0 && newPage <= totalPages) {
      onChange(newPage - 1);
    }
  };

  const getPaginationText = React.useMemo(() => {
    const pageFrom = total ? currentPage * perPage + 1 : 0;
    const pageTo = currentPage * perPage + perPage;

    return `${pageFrom} ${textConfig?.to} ${pageTo >= total ? total : pageTo} ${
      textConfig?.of
    } ${total} ${textConfig?.entries}`;
  }, [total, currentPage, perPage]);

  return (
    <Container $isHidden={!total}>
      <PaginationInfo size='sm'>{getPaginationText}</PaginationInfo>
      <Pagination>
        <Button $disabled={currentPage === 0} onClick={onChangePage(currentPage)}>
          <ICONS_MAP.MinimalLeftArrow width={7} />
        </Button>
        {pages?.map((value, index) => {
          if (index === 0 || pages[index] - pages[index - 1] === 1) {
            return (
              <Button
                key={index}
                $isActive={currentPage + 1 === value}
                onClick={onChangePage(value)}
              >
                {value}
              </Button>
            );
          }
          return (
            <React.Fragment key={index}>
              <Ellipsis>...</Ellipsis>
              <Button $isActive={currentPage + 1 === value} onClick={onChangePage(value)}>
                {value}
              </Button>
            </React.Fragment>
          );
        })}
        <Button
          $disabled={currentPage + 1 === totalPages || totalPages === 0}
          onClick={onChangePage(currentPage + 2)}
        >
          <ICONS_MAP.MinimalRightArrow width={7} />
        </Button>
      </Pagination>
    </Container>
  );
};

export default appReactMemo(BottomToolbar);
