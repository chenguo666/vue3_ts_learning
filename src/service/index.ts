// service 统一出口
import HYRequest from './request';
import { BASE_URL, TIME_OUT } from './request/config';
export default new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = '';
      if (token) {
        // config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    }
  }
});
