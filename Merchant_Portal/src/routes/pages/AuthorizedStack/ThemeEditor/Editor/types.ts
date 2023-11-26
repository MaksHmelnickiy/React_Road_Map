import { PAGE_TYPES_KEYS } from '@private/payment';

export enum VIEW_MODE {
  MOBILE,
  DESKTOP,
}

export interface IViewSettings {
  page: PAGE_TYPES_KEYS;
  mode: VIEW_MODE;
  showLogo: boolean;
}

export type changeSettingCallback = <
  O extends IViewSettings,
  V extends keyof IViewSettings
>(
  key: keyof O,
  value: O[V]
) => void;
