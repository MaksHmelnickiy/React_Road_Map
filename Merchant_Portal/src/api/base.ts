import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: global.CONFIG.API_URL,
  timeout: 60 * 1000,
  timeoutErrorMessage: 'notifications.longResponse',
});

export const axiosAuthInstance = axios.create({
  baseURL: global.CONFIG.AUTH_URL,
  timeout: 60 * 1000,
  timeoutErrorMessage: 'notifications.longResponse',
});

export const customizationInstance = axios.create({
  baseURL: global.CONFIG.CUSTOMIZATION_SERVICE_URL,
  timeout: 60 * 1000,
  timeoutErrorMessage: 'notifications.longResponse',
});

export default axiosInstance;
