import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import sportsData from '../assets/data/sports';
import membersData from '@/assets/data/members';

export default new Vuex.Store({
  state: {
   sportsList: [],
   membersList: []
  },
  getters: {
    sportsList: state => state.sportsList,
    membersList: state => state.membersList
  },
  mutations: {
    setSportsList(state, value) {
      state.sportsList = value
    },
    setMembersList(state, value) {
      state.membersList = value
    }
  },
  actions: {
      getSportsList({ commit}) {
        commit("setSportsList", sportsData);
      },
      getMembersList({commit}) {
        commit("setMembersList", membersData);
      }
  },

})