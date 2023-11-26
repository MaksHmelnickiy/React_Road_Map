import React from 'react';

import { appReactMemo } from 'hocs';

import Detail from '../../Detail';
import InfoBlock from '../InfoBlock';

import { DividerLine, SectionData } from './styled';

interface IElementInfo {
  key: string;
  value?: string | number;
  icon?: () => React.ReactElement;
  link?: () => React.ReactNode;
}

interface IBlockDetail {
  title: string;
  details: IElementInfo[][];
  columnsCount?: number;
}

const BlockDetail = ({
  title,
  details,
  columnsCount = 4,
}: IBlockDetail): React.ReactElement => {
  return (
    <InfoBlock title={title}>
      {details.map((elementInfo, index) => (
        <React.Fragment key={index}>
          <SectionData $columns={columnsCount}>
            {elementInfo.map((info, index) => {
              const { key, value, link, icon } = info;

              return (
                <Detail
                  key={key + index}
                  title={key}
                  text={link?.() || value?.toString().trim()}
                  icon={icon?.()}
                  enabledIcon={elementInfo.filter((item) => item.icon).length > 0}
                  small
                />
              );
            })}
          </SectionData>
          {index !== details.length - 1 && <DividerLine />}
        </React.Fragment>
      ))}
    </InfoBlock>
  );
};

export default appReactMemo(BlockDetail);
