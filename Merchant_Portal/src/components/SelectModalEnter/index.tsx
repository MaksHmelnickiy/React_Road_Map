import React from 'react';

import { TAG_VARIANTS, Tags } from '@private/components';

import Button from 'components/Button';
import FieldWrapper from 'components/Form/FieldWrapper';
import Tag from 'components/Tags/Tag';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { Container, SelectedList, SelectText } from './styled';

interface ISelectModalEnter {
  title: string;
  selectTitle: string;
  selectedList: string[];
  isEdit?: boolean;
  onClick: () => void;
}

const SelectModalEnter = ({
  title,
  selectTitle,
  selectedList,
  isEdit,
  onClick,
}: ISelectModalEnter) => {
  const count = selectedList.length;

  return (
    <FieldWrapper
      title={title}
      notInput
      centered
      component={
        count ? (
          <Tag label={count.toString()} variant={TAG_VARIANTS.PRIMARY} />
        ) : undefined
      }
    >
      <Container>
        <SelectedList>
          {count ? (
            <Tags>
              {selectedList.map((tag, index) => (
                <Tag key={`${tag}-${index}`} variant={TAG_VARIANTS.BLUE} label={tag} />
              ))}
            </Tags>
          ) : (
            <SelectText variant='regular' size='md'>
              {selectTitle}
            </SelectText>
          )}
        </SelectedList>
        <Button
          variant='icon'
          iconSize={20}
          startIcon={isEdit ? <ICONS_MAP.Edit /> : <ICONS_MAP.PlusCircle />}
          onClick={onClick}
        />
      </Container>
    </FieldWrapper>
  );
};

export default appReactMemo(SelectModalEnter);
