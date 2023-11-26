import React from 'react';
import { useTranslation } from 'react-i18next';

import { TAG_VARIANTS } from '@private/components';

import NoItemsFound from 'components/NoItemsFound';
import Tag from 'components/Tags/Tag';
import { appReactMemo } from 'hocs';

import InfoBlock from '../InfoBlock';

import { SectionData } from './styled';

interface IBlockTags {
  title: string;
  details: string[];
}

const BlockTags = ({ title, details }: IBlockTags): React.ReactElement => {
  const { t } = useTranslation();

  const renderContent = () => {
    if (!details.length) {
      return <NoItemsFound title={t('common.noItemsFound')} />;
    }

    return (
      <SectionData>
        {details.map((item, index) => (
          <Tag key={index} variant={TAG_VARIANTS.BLUE} label={item} />
        ))}
      </SectionData>
    );
  };

  return <InfoBlock title={title}>{renderContent() as React.ReactNode}</InfoBlock>;
};

export default appReactMemo(BlockTags);
