import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    SET_USER(state, val) {
      state.users.push(val);
    },
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
