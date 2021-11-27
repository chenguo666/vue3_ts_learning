import axios, { AxiosResponse } from 'axios';
console.log('xxxxxxx');
// axios的实例
axios
  .get('http://123.207.32.32:8000/home/multidata')
  .then((res: AxiosResponse<any>) => {
    console.log(res);
  });
//多个请求 一起返回
axios
  .all([
    axios.get('https://httpbin.org/get'),
    axios.get('https://httpbin.org/get')
  ])
  .then((res) => {
    console.log(res);
  });
// 拦截器 fn1 请求发生成功时 fn2请求发生失败的时候
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log(err);
  }
);
// 服务器正常返回
axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    console.log(err);
  }
);
// console.log(process.env.NODE_ENV);
console.log(process.env.VUE_APP_BASE_NAME);
