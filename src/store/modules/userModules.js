import { Users } from "../../api/index";
import router from "../../router";

const userModule = {
  namespaced: true,
  state: {
    user: null,
    error: null,
  },
  actions: {
    async getUser({ commit }, data) {
      try {
        const users = await Users();
        let currentUser = null;
        users.data.forEach((user) => {
          if (user.username === data.username && user.phone === data.phone)
            currentUser = user;
        });
        if (!currentUser) {
          throw new Error("login error");
        } else {
          commit("SET_USER", currentUser);
          localStorage.setItem("user", JSON.stringify(currentUser.id));
          router.push("/profile");
        }
      } catch (err) {
        commit("SET_ERROR", err.message);
      }
    },
  },
  mutations: {
    SET_USER(state, newState) {
      state.user = newState;
    },
    SET_ERROR(state, newState) {
      state.error = newState;
    },
  },
  getters: {
    user: (state) => state.user,
    loginError: (state) => state.error,
  },
};

export default userModule;
