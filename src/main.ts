import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './service/axios_demo';
import hyRequest from './service';

createApp(App).use(store).use(router).use(ElementPlus).mount('#app');
hyRequest.request({
  url: '/home/multidate',
  method: 'GET'
});
