export enum SESSION_KEYS {
  IS_INITILIZED = '@session/isInitilized',
  TOKEN = '@session/token',
  SESSION = '@session/currentSession',
  IS_LOGGED_IN = '@session/isLoggedIn',
}

export const SESSION_CONFIG = {
  INTERVAL_OFFSET: 2 * 60 * 1000, // the offset before the expiration of the token for the ticker to try to refresh
  EXPIRATION_OFFSET: 15 * 1000, // the offset before the expiration of the token for
  // the outcoming request to consider the token invalid (milliseconds)
  RETRIES_LOGGED_IN: 1, // how many times the refresh request will retry if the user logged in
  RETRIES_LOGGED_OUT: 0, // how many times the refresh request will retry if the user logged out
  PENDING_TIMEOUT: 30 * 1000, // the timeout for the pending request to wait for the current token refresh that is already in proggress
  PENDING_TICKER_STEP: 50, // the frequency of checkout for the pending refresh to be finished,
};
