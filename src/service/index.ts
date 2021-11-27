// service 统一出口
import HYRequest from './request';
import { BASE_URL, TIME_OUT } from './request/config';
export default new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});
