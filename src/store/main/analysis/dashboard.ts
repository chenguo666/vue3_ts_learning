import { Module } from 'vuex';
import { IDashboardState } from './type';
import { IRootState } from '../../types';
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard';
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    };
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list;
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list;
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list;
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list;
    }
  },
  actions: {
    async getDashboardDataActions({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount();
      commit('changeCategoryGoodsCount', categoryCountResult);
      const categoryGoodsSaleResult = await getCategoryGoodsSale();
      commit('changeCategoryGoodsSale', categoryGoodsSaleResult);
      const categoryGoodsFavorResult = await getCategoryGoodsFavor();
      commit('changeCategoryGoodsFavor', categoryGoodsFavorResult);
      const addressGoodsSaleResult = await getAddressGoodsSale();
      commit('changeAddressGoodsSale', addressGoodsSaleResult);
    }
  }
};
export default dashboardModule;
