import React from 'react';

import { ITag, TAG_VARIANTS } from '@private/components';

import Button from 'components/Button';
import Loader from 'components/Loader';
import Tag from 'components/Tags/Tag';
import {
  Container,
  ErrorMessage,
  Header,
  SelectText,
  StyledTags,
  Title,
} from 'components/Transfers/TransferEnter/styled';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

export interface ITransferEnterProps {
  title: string;
  selectTitle?: string;
  tagList?: ITag[];
  onOpen?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  errorMessage?: string | string[];
}

const TransferEnter = ({
  title,
  selectTitle,
  tagList,
  onOpen,
  disabled,
  isLoading,
  errorMessage,
}: ITransferEnterProps) => {
  const renderBody = () => {
    if (tagList?.length) {
      return (
        <StyledTags>
          {tagList.map((tag, index) => (
            <Tag
              key={`${index}-${tag.label}`}
              variant={tag.variant || TAG_VARIANTS.BLUE}
              {...tag}
            />
          ))}
        </StyledTags>
      );
    }

    if (selectTitle) {
      return (
        <SelectText variant='regular' size='md'>
          {selectTitle}
        </SelectText>
      );
    }
  };

  return (
    <Container disabled={disabled}>
      <div>
        <Header>
          <Title variant='regular' size='xl'>
            {title}
          </Title>
          {!!tagList?.length && (
            <Tag label={tagList.length.toString()} variant={TAG_VARIANTS.PRIMARY} />
          )}
        </Header>
        {renderBody()}
        {!!errorMessage && (
          <ErrorMessage variant='regular' size='sm'>
            {errorMessage}
          </ErrorMessage>
        )}
      </div>
      {onOpen && (
        <Button
          variant='icon'
          startIcon={!isLoading ? <ICONS_MAP.MinimalRightArrow /> : undefined}
          onClick={onOpen}
          iconSize={13}
          disabled={isLoading}
        >
          {isLoading && <Loader size={20} />}
        </Button>
      )}
    </Container>
  );
};

export default appReactMemo(TransferEnter);
