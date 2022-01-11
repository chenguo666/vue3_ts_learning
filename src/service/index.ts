import HYRequest from './request';
import { API_BASE_URL, TIME_OUT } from './request/config';
import localCache from '../utils/cache';

const hyRequest = new HYRequest({
  // baseURL: API_BASE_URL,
  // baseURL: '/api',
  baseURL: 'http://152.136.185.210:4000/',
  timeout: TIME_OUT,
  interceptorHooks: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token');
      if (token) {
        if (!config?.headers) {
          throw new Error(
            `Expected 'config' and 'config.headers' not to be undefined`
          );
        }
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res.data;
    },
    responseInterceptorCatch: (err) => {
      return err;
    }
  }
});

export default hyRequest;
