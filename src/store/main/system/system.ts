import { Module } from 'vuex';
import { ISystemState } from './types';
import { IRootState } from '@/store/types';
import { getPageListData } from '@/service/main/system/system';
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    };
  },
  mutations: {
    changeusersList(state, usersList: any[]) {
      state.usersList = usersList;
    },
    changeuserCount(state, userCount: number) {
      state.userCount = userCount;
    },
    changeroleList(state, roleList: any[]) {
      state.roleList = roleList;
    },
    changeroleCount(state, roleCount: number) {
      state.roleCount = roleCount;
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
        // switch (pageName) {
        //   case 'User':
        //     return state.userList;
        //   case 'Role':
        //     return state.roleList;
        //   default:
        //     break;
        // }
      };
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log(payload);
      const pageName = payload.pageName;
      const pageUrl = `/${pageName}/list`;
      // let pageUrl = '';
      // switch (pageName) {
      //   case 'User':
      //     pageUrl = '/users/list';
      //     break;
      //   case 'Role':
      //     pageUrl = '/role/list';
      //     break;
      //   default:
      //     break;
      // }
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);

      // console.log(pageResult);
      const { list, totalCount } = pageResult;
      // console.log(list, totalCount);

      commit(`change${pageName}List`, list);
      commit(`change${pageName}Count`, totalCount);
    }
  }
};
export default systemModule;
