export enum MERCHANTS_KEYS {
  ALL = 'merchants',
  MERCHANT = 'merchant',
  MERCHANTS_NAMES = 'merchants_names',
  MERCHANTS_SCOPE = 'merchants_scope',
  MERCHANT_ROUTING_RULESETS = 'merchant-routing-rulesets',
  MERCHANT_CASHIER_PAYMENT_METHODS = 'merchant-cashier-payment-methods',
  MERCHANT_COUNTRY_GROUPS = 'merchant-country-groups',
}

export const INITIAL_OFF_COLUMNS_MERCHANTS = [
  'enableCashier',
  'enableCascading',
  'useRoutingPriority',
  'useCardToken',
  'preMemorisedRouting',
];
