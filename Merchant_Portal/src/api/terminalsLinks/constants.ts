export enum TERMINALS_LINKS_KEYS {
  ALL = 'all-terminals-links',
  TERMINAL_LINK = 'terminal-link',
  TERMINAL_LINK_LIMITS = 'terminal-link-limits',
  TERMINAL_LINK_LIST = 'terminal-link-list',
  TERMINAL_LINKS_LIMITS = 'terminals-links-limits',
  TERMINAL_LINKS_PARAMETERS = 'terminal-links-parameters',
  TERMINAL_LINKS_GROUP = 'terminal-links-group',
  TERMINAL_LINKS_GROUP_LIMITS = 'terminal-links-group-limits',
  TERMINAL_LINKS_GROUPS_LIST = 'terminal-links-groups-list',
}

export const INITIAL_OFF_COLUMNS_TERMINAL_LINKS = [
  'webhooksEnabled',
  'motoEnabled',
  'exitIFrame',
  'recurringEnabled',
  'trusted',
  'limitsEnabled',
];

export const INITIAL_OFF_COLUMNS_TERMINAL_LINKS_LIMITS = [
  'lastUpdated',
  'merchant',
  'merchantId',
  'merchantTerminalName',
  'merchantTerminalId',
  'bankName',
  'bankId',
  'paymentMethod',
];

export const INITIAL_OFF_COLUMNS_TERMINAL_LINKS_PARAMETERS = [
  'paramId',
  'paymentMethod',
  'bankName',
  'terminalLinkId',
  'merchantTerminalName',
  'merchantName',
];

export const INITIAL_OFF_COLUMNS_TERMINAL_LINKS_GROUPS = ['merchant.name'];
