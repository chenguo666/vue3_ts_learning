import { createStore } from 'vuex';
import login from './login/login';
import { IRootState } from './types';
export default createStore<IRootState>({
  state() {
    return {
      name: 'x',
      age: 18
    };
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
});
