import { Module } from 'vuex';
import { ILoginState } from './types';
import { IRootState } from '../types';
import { accountLoginRequest } from '@/service/login/login';
import { IAccount } from '@/service/login/types';
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    }
  },
  actions: {
    async accountLoginActions({ commit }, payload: IAccount) {
      console.log('执行accountLoginActions', payload);
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult;
      console.log(id, token);
      commit('changeToken', token);
    }
  }
};
export default loginModule;
