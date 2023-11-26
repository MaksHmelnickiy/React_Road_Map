export const ROUTES = {
  NOT_FOUND: {
    PATH: '/not-found',
  },
  PERMISSION_DENIED: {
    PATH: '/403',
  },
  SOMETHING_WRONG: {
    PATH: '/something-wrong',
  },
  HOME: {
    PATH: '/',
  },
  SIGN_IN: {
    PATH: '/login',
  },
  FORGOT_PASSWORD: {
    PATH: '/forgot-password',
  },
  SET_PASSWORD: {
    PATH: '/password/set',
  },
  TRANSACTIONS: {
    PATH: '/transactions',
    SUB_PATH: {
      VIEW: {
        PATH: '/transactions/:id',
        PARAMS: {
          ID: 'id',
        },
      },
    },
  },
  USERS: {
    PATH: '/users',
    SUB_PATH: {
      USER: {
        PATH: '/users/:id',
        PARAMS: {
          ID: 'id',
        },
      },
      EDIT: {
        PATH: '/users/:id/edit',
        PARAMS: {
          ID: 'id',
        },
      },
      CREATE: '/users/new',
    },
  },
  CLIENTS: {
    PATH: '/clients',
    SUB_PATH: {
      CLIENT: {
        PATH: '/clients/:id',
        PARAMS: {
          ID: 'id',
        },
        SUB_PATH: {
          MANUAL_TRANSACTION: {
            PATH: '/clients/:id/manual-transaction',
            PARAMS: {
              ID: 'id',
            },
          },
        },
      },
      CREATE: '/clients/new',
      EDIT: {
        PATH: '/clients/:id/edit',
        PARAMS: {
          ID: 'id',
        },
      },
      MANUAL_TRANSACTION: {
        PATH: '/clients/manual-transaction',
      },
    },
  },
  PSP_MANAGEMENT: {
    PATH: '/psp-management',
    SUB_PATH: {
      PSP: {
        PATH: '/psp-management/psp',
        SUB_PATH: {
          VIEW: {
            PATH: '/psp-management/psp/:id',
            PARAMS: {
              ID: 'id',
            },
          },
        },
      },
      TERMINALS: {
        PATH: '/psp-management/terminals',
        SUB_PATH: {
          TERMINAL: {
            PATH: '/psp-management/terminals/:id',
            PARAMS: {
              ID: 'id',
            },
          },
        },
      },
      TERMINALS_LINKS: {
        PATH: '/psp-management/terminals-links',
        SUB_PATH: {
          TERMINAL_LINK: {
            PATH: '/psp-management/terminals-links/:id',
            PARAMS: {
              ID: 'id',
            },
          },
          CREATE: '/psp-management/terminals-links/new',
        },
      },
      TERMINAL_LINKS_GROUPS: {
        PATH: '/psp-management/terminal-links-groups',
        SUB_PATH: {
          TERMINAL_LINKS_GROUP: {
            PATH: '/psp-management/terminal-links-groups/:id',
            PARAMS: {
              ID: 'id',
            },
          },
        },
      },
      TERMINALS_LINKS_LIMITS: {
        PATH: '/psp-management/terminals-links-limits',
      },
      TERMINAL_LINKS_PARAMETERS: {
        PATH: '/psp-management/terminal-links-parameters',
      },
    },
  },
  MERCHANTS: {
    PATH: '/merchants',
    SUB_PATH: {
      MERCHANT: {
        PATH: '/merchants/:id/',
        PARAMS: {
          ID: 'id',
        },
        SUB_PATH: {
          STYLIZATION: {
            PATH: '/merchants/:id/stylization',
            PARAMS: {
              ID: 'id',
            },
            SUB_PATH: {
              THEME: {
                PATH: '/merchants/:id/stylization/theme',
                SUB_PATH: {
                  CREATE: {
                    PATH: '/merchants/:id/stylization/theme/new',
                    PARAMS: {
                      ID: 'id',
                    },
                  },
                  EDIT: {
                    PATH: '/merchants/:id/stylization/theme/:themeId',
                    PARAMS: {
                      THEME_ID: 'themeId',
                      ID: 'id',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  MERCHANTS_SETTINGS: {
    PATH: '/merchants-settings',
    SUB_PATH: {
      CASHIER_SETTINGS: {
        PATH: '/merchants-settings/cashier-settings',
      },
      CASHIER_LIMITS: {
        PATH: '/merchants-settings/cashier-limits',
        SUB_PATH: {
          CREATE_LIMIT: {
            PATH: '/merchants-settings/cashier-limits/new',
          },
          EDIT_LIMIT: {
            PATH: '/merchants-settings/cashier-limits/:id/edit/',
            PARAMS: {
              ID: 'id',
            },
          },
        },
      },
      PAYMENT_METHODS: {
        PATH: '/merchants-settings/payment-methods',
        SUB_PATH: {
          CREATE: '/merchants-settings/payment-methods/new',
          EDIT: {
            PATH: '/merchants-settings/payment-methods/:id',
            PARAMS: {
              ID: 'id',
            },
          },
        },
      },
    },
  },
  TRAFFIC_MANAGEMENT: {
    PATH: '/traffic-management',
    SUB_PATH: {
      ROUTING_RULESET: {
        PATH: '/traffic-management/routing-ruleset',
        SUB_PATH: {
          CREATE: '/traffic-management/routing-ruleset/new',
          EDIT: {
            PATH: '/traffic-management/routing-ruleset/:id/edit',
            PARAMS: {
              ID: 'id',
            },
          },
        },
      },
      COUNTRY_GROUPS: {
        PATH: '/traffic-management/country-groups',
      },
    },
  },
  SETTINGS: {
    PATH: '/settings',
    SUB_PATH: {
      ROLES_AND_PERMISSIONS: {
        PATH: '/settings/roles-and-permissions',
        SUB_PATH: {
          CREATE: '/settings/roles-and-permissions/roles/new',
        },
      },
      PORTAL_SETTINGS: {
        PATH: '/settings/portal-settings',
      },
    },
  },
};
