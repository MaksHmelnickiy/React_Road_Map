import { UseQueryResult } from 'react-query';

import api from 'api';
import { CASHIER_SETTINGS_KEYS } from 'api/cashierSettings/constants';
import { ICashierSettings } from 'api/cashierSettings/types';
import { getAllEntities } from 'queries/utils';
import { IAllPageFilters, IPageType } from 'utils/types';

export const useGetCashierSettings = (
  pageFilters: IAllPageFilters
): UseQueryResult<IPageType<ICashierSettings>> =>
  getAllEntities<ICashierSettings>({
    pageFilters,
    queryKey: CASHIER_SETTINGS_KEYS.ALL,
    getAllEntitiesFunc: api.cashierSettings.getAllCashierSettings,
  });
