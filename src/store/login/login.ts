import { Module } from 'vuex';
import { ILoginState } from './types';
import { IRootState } from '../types';
import {
  accountLoginRequest,
  requestUserInfoByid,
  requestUserMenusByRoleid
} from '@/service/login/login';
import localCache from '@/utils/cache';
import { IAccount } from '@/service/login/types';
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menu';
import router from '@/router';
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenu: {},
      permissions: []
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenu: any) {
      state.userMenu = userMenu;
      // 映射 routes
      const routes = mapMenusToRoutes(userMenu);
      console.log('routes', routes);
      routes.forEach((route) => {
        router.addRoute('main', route);
      });
      // 获取按钮权限
      const permission = mapMenusToPermissions(userMenu);
      state.permissions = permission;
    }
  },
  actions: {
    async accountLoginActions({ commit, dispatch }, payload: IAccount) {
      console.log('执行accountLoginActions', payload);
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult;
      console.log(id, token);
      commit('changeToken', token);
      localCache.setCache('token', token);
      // 请求用户信息
      const userInfoResult = await requestUserInfoByid(id);
      console.log(userInfoResult);
      commit('changeUserInfo', userInfoResult);
      localCache.setCache('userInfo', userInfoResult);
      // 获取 权限路由
      const userMenusResult = await requestUserMenusByRoleid(
        userInfoResult.role.id
      );
      console.log(userMenusResult);
      commit('changeUserMenus', userMenusResult);
      localCache.setCache('userMenu', userMenusResult);

      dispatch('getInitialDataAction', null, { root: true });
      // 到首页
      router.push('/main');
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache('token');
      const userInfo = localCache.getCache('userInfo');
      const userMenu = localCache.getCache('userMenu');
      if (token) {
        commit('changeToken', token);
        dispatch('getInitialDataAction', null, { root: true });
      }
      if (userInfo) {
        commit('changeUserInfo', userInfo);
      }
      if (userMenu) {
        commit('changeUserMenus', userMenu);
      }
    }
  }
};
export default loginModule;
