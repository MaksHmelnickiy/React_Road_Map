import { matchRoutes, useLocation } from 'react-router-dom';

import { IRoutesConfigItem, ROUTES_CONFIG } from 'routes/config';

export interface IBreadCrumb {
  url: string;
  breadcrumb: string;
}

export const useBreadCrumbs = (): IBreadCrumb[] => {
  const location = useLocation();

  const matchedUrls = matchRoutes(ROUTES_CONFIG, location.pathname);

  return (
    matchedUrls
      ?.filter(
        (match) =>
          (match.route as IRoutesConfigItem)?.breadcrumb &&
          (match.route as IRoutesConfigItem)?.url
      )
      ?.map((item) => {
        const route = item.route as IRoutesConfigItem;

        const breadcrumbString =
          typeof route.breadcrumb === 'function'
            ? route.breadcrumb(item.params)
            : route.breadcrumb;
        const urlString =
          typeof route.url === 'function' ? route.url(item.params) : route.url;
        return {
          breadcrumb: breadcrumbString || '',
          url: urlString || '',
        };
      }) || []
  );
};
