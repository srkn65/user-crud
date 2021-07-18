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
    UPDATE_USER(state, val) {
      const index = state.users.findIndex((x) => x.email === val.email);
      state.users[index] = val;
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
