import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import './service/axios_demo';
// import hyRequest from './service';
import 'normalize.css';
import './assets/css/index.less';
import { setupStore } from '@/store';

const app = createApp(App);
app.use(store).use(router).use(ElementPlus);
setupStore();
app.mount('#app');
// interface DataType {
//   data: any;
//   returnCode: string;
//   success: boolean;
// }
// hyRequest
//   .request<DataType>({
//     url: '/home/multidate',
//     method: 'GET'
//   })
//   .then((res) => {
//     console.log(res);
//   });
// hyRequest
//   .get<DataType>({
//     url: '/home/multidate'
//   })
//   .then((res) => {
//     console.log(res);
//   });
