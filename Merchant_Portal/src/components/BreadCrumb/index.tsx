import React from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { useBreadCrumbs } from 'hooks/useBreadcrumbs';

import { Active, Container, Disabled, IconWrapper } from './styled';

const BreadCrumb = () => {
  const { t, i18n } = useTranslation();
  const breadcrumbs = useBreadCrumbs();

  return (
    <Container data-testid='breadcrumbs'>
      {breadcrumbs.map(({ url, breadcrumb }, index) => {
        if (breadcrumbs.length - 1 === index) {
          return (
            <Disabled variant='regular' size='md' key={url}>
              {i18n.exists(breadcrumb) ? t(breadcrumb as never) : breadcrumb}
            </Disabled>
          );
        }

        return (
          <React.Fragment key={url}>
            <Active to={url}>{t(breadcrumb as never)}</Active>
            <IconWrapper>
              <ICONS_MAP.MinimalRightArrow />
            </IconWrapper>
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default appReactMemo(BreadCrumb);
