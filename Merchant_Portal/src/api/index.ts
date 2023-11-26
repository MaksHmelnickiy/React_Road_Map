import cashierSettings from 'api/cashierSettings';

import auth from './auth';
import cashierLimits from './cashierLimits';
import cashierPaymentMethods from './cashierPaymentMethods';
import clients from './clients';
import countryGroups from './countryGroups';
import data from './data';
import manualTransaction from './manualTransaction';
import merchants from './merchants';
import merchantTerminalThemes from './merchantTerminalThemes';
import portalUser from './portalUser';
import psp from './psp';
import rolesPermissions from './rolesPermissions';
import routingRuleset from './routingRuleset';
import terminals from './terminals';
import terminalsLinks from './terminalsLinks';
import transactions from './transactions';
import users from './users';

export default {
  auth,
  data,
  transactions,
  merchantTerminalThemes,
  merchants,
  users,
  clients,
  psp,
  terminals,
  terminalsLinks,
  cashierSettings,
  manualTransaction,
  cashierPaymentMethods,
  routingRuleset,
  countryGroups,
  cashierLimits,
  portalUser,
  rolesPermissions,
};
