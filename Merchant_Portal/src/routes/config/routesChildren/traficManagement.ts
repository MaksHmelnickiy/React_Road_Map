import React from 'react';
import { Outlet } from 'react-router-dom';

import { PERMISSIONS } from 'api/auth/constants';
import { ROUTES } from 'routes/config/constants';
import { IRoutesConfigItem } from 'routes/config/index';

const RoutingRuleset = React.lazy(
  () => import('routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset')
);
// const CreateRoutingRuleset = React.lazy(
//   () => import('routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Create')
// );

const CountryGroups = React.lazy(
  () => import('routes/pages/AuthorizedStack/TrafficManagement/CountryGroups')
);
export const TRAFFIC_MANAGEMENT_CHILDREN: IRoutesConfigItem[] = [
  {
    component: Outlet,
    path: ROUTES.TRAFFIC_MANAGEMENT.SUB_PATH.ROUTING_RULESET.PATH,
    breadcrumb: 'routingRuleset.title',
    permissions: [PERMISSIONS.CAN_VIEW_RULESETS],
    isSubFolder: true,
    children: [
      {
        component: RoutingRuleset,
        path: ROUTES.TRAFFIC_MANAGEMENT.SUB_PATH.ROUTING_RULESET.PATH,
        permissions: [PERMISSIONS.CAN_VIEW_RULESETS],
      },
      // {
      //   component: CreateRoutingRuleset,
      //   path: ROUTES.TRAFFIC_MANAGEMENT.SUB_PATH.ROUTING_RULESET.SUB_PATH.CREATE,
      //   permissions: [PERMISSIONS.CAN_CREATE_RULESET],
      // },
    ],
  },
  {
    component: Outlet,
    path: ROUTES.TRAFFIC_MANAGEMENT.SUB_PATH.COUNTRY_GROUPS.PATH,
    url: ROUTES.TRAFFIC_MANAGEMENT.SUB_PATH.COUNTRY_GROUPS.PATH,
    breadcrumb: 'countryGroups.title',
    permissions: [PERMISSIONS.CAN_VIEW_COUNTRY_GROUPS],
    isSubFolder: true,
    children: [
      {
        component: CountryGroups,
        path: ROUTES.TRAFFIC_MANAGEMENT.SUB_PATH.COUNTRY_GROUPS.PATH,
        permissions: [PERMISSIONS.CAN_VIEW_COUNTRY_GROUPS],
      },
    ],
  },
];
