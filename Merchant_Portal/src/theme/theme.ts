import { scrollbarTheme } from 'components/Scrollbar/theme';
import { headerTheme } from 'routes/pages/AuthorizedStack/Layout/Header/theme';
import { navigationBarTheme } from 'routes/pages/AuthorizedStack/Layout/Sidebar/theme';
import { motoFormTheme } from 'routes/pages/AuthorizedStack/ManualTransaction/theme';
import { paymentMethodFormTheme } from 'routes/pages/AuthorizedStack/MerchantsSettings/PaymentMethods/PaymentMethod/Form/theme';
import { stylizationTheme } from 'routes/pages/AuthorizedStack/MerchantsSettings/Stylization/theme';
import { terminalLinkGroupEditTheme } from 'routes/pages/AuthorizedStack/PspManagement/TerminalsLinks/GroupEdit/theme';
import { settingsTheme } from 'routes/pages/AuthorizedStack/Settings/PortalSettings/theme';
import { createRoleTheme } from 'routes/pages/AuthorizedStack/Settings/RolesAndPermissions/Role/Form/theme';
import { gistViewTheme, gridViewTheme } from 'routes/pages/AuthorizedStack/theme';
import { themeEditorTheme } from 'routes/pages/AuthorizedStack/ThemeEditor/Editor/theme';
import { countryGroupsTheme } from 'routes/pages/AuthorizedStack/TrafficManagement/CountryGroups/theme';
import { rulesetFormThem } from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/theme';
import { routingRulesetGroupEditTheme } from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/GroupEdit/theme';
import { transactionTheme } from 'routes/pages/AuthorizedStack/Transactions/Transaction/theme';
import { userFormTheme } from 'routes/pages/AuthorizedStack/Users/User/Form/theme';
import { authenticationTheme } from 'routes/pages/UnauthorizedStack/Authentication/theme';
import { COMPONENTS_DEFAULT_THEMES, COMPONENTS_NAMES } from 'theme/constants';

export enum APP_THEMES {
  DEFAULT_DARK = 'T_001',
}

export const THEMES = {
  [APP_THEMES.DEFAULT_DARK]: {
    main: {
      font: 'Inter, Arial, sans-serif',
      bg: 'palette.surface.1',
      scrollbar: scrollbarTheme,
    },
    components: COMPONENTS_DEFAULT_THEMES,

    authentication: authenticationTheme,

    navigationBar: navigationBarTheme,
    header: headerTheme,

    gridView: gridViewTheme,
    gistView: gistViewTheme,

    transactions: {
      view: transactionTheme,
    },

    users: {
      form: userFormTheme,
    },

    clients: {
      form: {
        confirmModal: { title: 'palette.primary.99' },
      },
    },

    terminalLinks: {
      groupEdit: terminalLinkGroupEditTheme,
    },

    countryGroups: {
      grid: countryGroupsTheme,
    },

    // TODO
    merchantSettings: {
      paymentMethods: {
        form: paymentMethodFormTheme,
      },
    },

    routingRuleset: {
      form: rulesetFormThem,
      groupEdit: routingRulesetGroupEditTheme,
    },

    rolesPermissions: {
      role: {
        form: createRoleTheme,
      },
    },

    motoForm: motoFormTheme,
    stylization: stylizationTheme,
    themeEditor: themeEditorTheme,
    settings: settingsTheme,

    wrongPages: {
      maintenance: COMPONENTS_NAMES.WRONG_PAGE,
      notFound: COMPONENTS_NAMES.WRONG_PAGE,
      somethingWrong: COMPONENTS_NAMES.WRONG_PAGE,
      accessForbidden: COMPONENTS_NAMES.WRONG_PAGE,
      permissionDenied: COMPONENTS_NAMES.WRONG_PAGE,
    },
  },
};
