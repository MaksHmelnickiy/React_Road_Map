export enum PERMISSIONS {
  VIEW_EMAILS = 'view.emails',
  VIEW_PHONE_NUMBERS = 'view.phone.numbers',

  CAN_VIEW_TRANSACTIONS = 'view.transactions',
  CAN_VIEW_SINGLE_TRANSACTION = 'view.single.transaction',
  CAN_UPDATE_SINGLE_TRANSACTION = 'update.single.transaction',
  CAN_CREATE_MANUAL_TRANSACTION = 'create.manual.transaction',

  CAN_VIEW_CLIENTS = 'view.clients',
  CAN_VIEW_SINGLE_CLIENT = 'view.single.client',
  CAN_CREATE_CLIENT = 'create.client',
  CAN_UPDATE_CLIENT = 'update.client',
  CAN_BLOCK_CLIENT = 'block.client',

  CAN_VIEW_PSPS = 'view.banks',
  CAN_VIEW_SINGLE_PSP = 'view.single.bank',
  CAN_UPDATE_PSP = 'update.bank',
  CAN_CREATE_PSP = 'create.bank',

  CAN_VIEW_PSP_TERMINALS = 'view.bank.terminals',
  CAN_VIEW_SINGLE_PSP_TERMINAL = 'view.single.bank.terminal',
  CAN_UPDATE_PSP_TERMINAL = 'update.bank.terminal',
  CAN_CREATE_PSP_TERMINAL = 'create.bank.terminal',

  CAN_VIEW_TERMINAL_LINKS = 'view.terminal.links',
  CAN_VIEW_SINGLE_TERMINAL_LINK = 'view.single.terminal.link',
  CAN_UPDATE_TERMINAL_LINK = 'update.terminal.link',
  CAN_CREATE_TERMINAL_LINK = 'create.terminal.link',
  CAN_VIEW_DESCRIPTIONS_TERMINAL_LINK = 'view.descriptions.terminal.link',
  CAN_VIEW_TERMINAL_LINKS_LIMITS = 'view.terminal.links.limits',
  CAN_VIEW_TERMINAL_LINKS_GROUPS = 'view.terminal.links.group',

  CAN_VIEW_MERCHANTS = 'view.merchant.terminals',
  CAN_VIEW_SINGLE_MERCHANT = 'view.single.merchant.terminal',
  CAN_UPDATE_MERCHANT = 'update.merchant.terminal',
  CAN_CREATE_MERCHANT = 'create.merchant.terminal',

  CAN_VIEW_RULESETS = 'view.rulesets',
  CAN_VIEW_SINGLE_RULESET = 'view.single.ruleset',
  CAN_UPDATE_RULESET = 'update.ruleset',
  CAN_CREATE_RULESET = 'create.ruleset',

  CAN_VIEW_CASHIER_PAYMENT_METHODS = 'view.cashier.payment.methods',
  CAN_VIEW_SINGLE_CASHIER_PAYMENT_METHOD = 'view.single.cashier.payment.method',
  CAN_UPDATE_CASHIER_PAYMENT_METHOD = 'update.cashier.payment.method',
  CAN_CREATE_CASHIER_PAYMENT_METHOD = 'create.cashier.payment.method',

  CAN_VIEW_CASHIER_PAYMENT_LIMITS = 'view.cashier.limits',
  CAN_VIEW_SINGLE_CASHIER_PAYMENT_LIMIT = 'view.single.cashier.limit',
  CAN_UPDATE_CASHIER_PAYMENT_LIMIT = 'update.cashier.limit',
  CAN_CREATE_CASHIER_PAYMENT_LIMIT = 'create.cashier.limit',

  CAN_VIEW_COUNTRY_GROUPS = 'view.country.groups',

  CAN_VIEW_CASHIER_SETTINGS = 'view.cashier.settings',
  CAN_VIEW_SINGLE_CASHIER_SETTING = 'view.single.cashier.setting',
  CAN_UPDATE_CASHIER_SETTING = 'update.cashier.setting',
  CAN_CREATE_CASHIER_SETTING = 'create.cashier.setting',

  CAN_CHANGE_MP_STYLIZATION = 'update.merchant.portal.stylization',

  CAN_VIEW_PAYMENT_PAGE_STYLIZATIONS = 'view.payment.page.stylizations',
  CAN_CREATE_PAYMENT_PAGE_STYLIZATION = 'create.payment.page.stylization',
  CAN_CHANGE_PAYMENT_PAGE_STYLIZATION = 'update.payment.page.stylization',
  CAN_COPY_PAYMENT_PAGE_STYLIZATION = 'copy.payment.page.stylization',
  CAN_DELETE_PAYMENT_PAGE_STYLIZATION = 'delete.payment.page.stylization',
  CAN_SET_ACTIVE_PAYMENT_PAGE_STYLIZATION = 'set.active.payment.page.stylization',
  CAN_CHANGE_PAYMENT_METHODS_PAGE = 'update.payment.methods.page.stylization',
  CAN_CHANGE_TRANSACTIONS_STATUS_PAGE = 'update.transaction.status.page.stylization',

  CAN_VIEW_USERS = 'view.users',
  CAN_VIEW_SINGLE_USER = 'view.single.user',
  CAN_CREATE_USER = 'create.user',
  CAN_UPDATE_USER = 'update.user',
  CAN_BLOCK_USER = 'block.user',

  CAN_VIEW_DETAILED_ROLE_SCOPE = 'view.detailed.role.scope',

  VIEW_ORGANIZATIONS = 'view.organizations',
  VIEW_SINGLE_ORGANIZATION = 'view.single.organization',
  CREATE_ORGANIZATION = 'create.organization',
  UPDATE_ORGANIZATION = 'update.organization',

  VIEW_LEGAL_ENTITIES = 'view.legal.entities',
  VIEW_SINGLE_LEGAL_ENTITY = 'view.single.legal.entity',
  CREATE_LEGAL_ENTITY = 'create.legal.entity',
  UPDATE_LEGAL_ENTITY = 'update.legal.entity',

  VIEW_ROLES = 'view.roles',
  CREATE_ROLE = 'create.role',
  UPDATE_ROLE = 'update.role',

  VIEW_PERMISSIONS = 'view.permissions',
}
