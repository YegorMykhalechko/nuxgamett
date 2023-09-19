import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

import userModule from "./modules/userModules";
import todoModule from "./modules/todoModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userModule,
    todo: todoModule,
  },
  actions: {
    logout() {
      localStorage.removeItem("user");
      router.push("/");
    },
  },
});
