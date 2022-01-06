import { createStore, Store, useStore as useVuexStore } from 'vuex';
import login from './login/login';
import system from './main/system/system';
import { IRootState, IRootWithModule } from './types';
import { getPageListData } from '@/service/main/system/system';
const store = createStore<IRootState>({
  state() {
    return {
      name: 'x',
      age: 18,
      entireDepartment: [],
      entireRole: []
    };
  },
  mutations: {
    changeEntireDepartmnet(state, list) {
      state.entireDepartment = list;
    },
    changeEntireRole(state, list) {
      state.entireRole = list;
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const listde = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      });

      commit('changeEntireDepartmnet', listde.list);
      const listro = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      });
      commit('changeEntireRole', listro.list);
      console.log(listde.list, listro.list);
    }
  },
  modules: {
    login,
    system
  }
});
export function setupStore() {
  store.dispatch('login/loadLocalLogin');
  // store.dispatch('getInitialDataAction');
}
export function useStore(): Store<IRootWithModule> {
  return useVuexStore();
}
export default store;
