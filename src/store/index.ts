import { createStore, Store, useStore as useVuexStore } from 'vuex';
import login from './login/login';
import { IRootState, IRootWithModule } from './types';
const store = createStore<IRootState>({
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
export function setupStore() {
  store.dispatch('login/loadLocalLogin');
}
export function useStore(): Store<IRootWithModule> {
  return useVuexStore();
}
export default store;
