import { Module } from 'vuex';
import { ISystemState } from './types';
import { IRootState } from '@/store/types';
import { getPageListData } from '@/service/main/system/system';
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    };
  },
  mutations: {
    changeusersList(state, usersList: any[]) {
      state.usersList = usersList;
    },
    changeusersCount(state, usersCount: number) {
      state.usersCount = usersCount;
    },
    changeroleList(state, roleList: any[]) {
      state.roleList = roleList;
    },
    changeroleCount(state, roleCount: number) {
      state.roleCount = roleCount;
    },
    changegoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList;
    },
    changegoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount;
    },
    changemenuList(state, menuList: any[]) {
      state.menuList = menuList;
    },
    changemenuCount(state, menuCount: number) {
      state.menuCount = menuCount;
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log(payload);
      const pageName = payload.pageName;
      const pageUrl = `/${pageName}/list`;
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
