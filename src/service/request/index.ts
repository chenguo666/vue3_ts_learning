import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { HYRequestInterceptors, HYRequestConfig } from './types';
import { ElLoading, ILoadingInstance } from 'element-plus';
// import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type';
class HYRequest {
  instance: AxiosInstance;
  showLoading: boolean;
  interceptors?: HYRequestInterceptors;
  loading?: ILoadingInstance;

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? false;
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('请求成功');
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...'
          });
        }
        return config;
      },
      (err) => {
        console.log('请求失败');
        ElLoading;
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (response) => {
        this.loading?.close();
        const data = response.data;
        if (data.returnCode === '-1001') {
          console.log('请求失败');
        } else {
          return data;
        }
      },
      (err) => {
        this.loading?.close();
        if (err.response.status === 404) {
          console.log('404');
        }
        // switch (key) {
        //   case value:

        //     break;

        //   default:
        //     break;
        // }
        return err;
      }
    );
  }
  request<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((reslove, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      if (config.showLoading === false) {
        this.showLoading = false;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          console.log(res);
          this.showLoading = true;
          reslove(res);
        })
        .catch((err) => {
          this.showLoading = false;
          reject(err);
        });
    });
  }
  get<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }
  post<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }
  delete<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }
  patch<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}
export default HYRequest;
