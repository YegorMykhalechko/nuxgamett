import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

import userModule from "./modules/userModules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userModule,
  },
  actions: {
    logout({ commit }) {
      localStorage.removeItem("user");
      router.push("/");
    },
  },
});
