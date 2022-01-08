import { createStore, Store, useStore as useVuexStore } from 'vuex';
import login from './login/login';
import system from './main/system/system';
import dashboard from './main/analysis/dashboard';
import { IRootState, IRootWithModule } from './types';
import { getPageListData } from '@/service/main/system/system';
const store = createStore<IRootState>({
  state() {
    return {
      name: 'x',
      age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    };
  },
  mutations: {
    changeEntireDepartmnet(state, list) {
      state.entireDepartment = list;
    },
    changeEntireRole(state, list) {
      state.entireRole = list;
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list;
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
      const menuResult = await getPageListData('/menu/list', {});
      const menulist = menuResult.list;
      commit('changeEntireMenu', menulist);
    }
  },
  modules: {
    login,
    system,
    dashboard
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
