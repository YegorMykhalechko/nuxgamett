import { Todos, AddTodo } from "../../api/index";
const updateTodos = (state) => {
  state.todos = state.todos.map((todo) => ({
    ...todo,
    favorite: JSON.parse(localStorage.getItem("favorites")).includes(todo.id),
  }));
};

const todoModule = {
  namespaced: true,
  state: {
    todos: [],
    selectedFilterByStatus: "",
    selectedFilterByUser: "",
    filterOptionsByStatus: [
      { value: "all", name: "All" },
      { value: "completed", name: "Completed" },
      { value: "uncompleted", name: "Uncompleted" },
      { value: "favorites", name: "Favorites" },
    ],
    filterOptionsByUser: [{ value: "all", name: "All Users" }],
    searchQuery: "",
    favoriteTodos: [],
  },
  actions: {
    async getTodos({ commit }) {
      try {
        const todos = await Todos();
        commit("SET_TODOS", todos.data);
        const uniqueUsers = [
          ...new Set(todos.data.map((todo) => todo.userId)),
        ].map((userId) => {
          return {
            value: userId,
            name: userId,
          };
        });
        commit("SET_FILTER_OPTIONS_USER", uniqueUsers);
      } catch (err) {
        console.log(err);
      }
    },
    async addTodo({ commit }, data) {
      try {
        const res = await AddTodo(data);
        if (res.status === 201) {
          const newTodo = {
            userId: data.userId,
            id: Date.now(),
            title: data.title,
            completed: false,
          };
          commit("ADD_TODO", newTodo);
        }
      } catch (err) {
        console.log(err);
      }
    },
    addTodoToFavorites({ commit }, data) {
      commit("ADD_FAVOTITE_TODOS", data);
    },
    removeTodoFromFavorites({ commit }, data) {
      commit("REMOVE_FAVOTITE_TODOS", data);
    },
  },
  mutations: {
    ADD_TODO(state, newState) {
      state.todos.push(newState);
    },
    SET_TODOS(state, newState) {
      state.todos = newState;

      if (localStorage.getItem("favorites")) {
        updateTodos(state);
      }
    },
    SET_SELECTED_FILTRED_STATUS(state, newState) {
      state.selectedFilterByStatus = newState;
    },

    SET_FILTER_OPTIONS_USER(state, newState) {
      state.filterOptionsByUser = [...state.filterOptionsByUser, ...newState];
    },
    SET_SELECTED_FILTRED_USER(state, newState) {
      state.selectedFilterByUser = newState;
    },
    SET_SEARCH_QUERY(state, newState) {
      state.searchQuery = newState;
    },
    ADD_FAVOTITE_TODOS(state, newState) {
      if (localStorage.getItem("favorites")) {
        state.favoriteTodos = JSON.parse(localStorage.getItem("favorites"));
      }

      state.favoriteTodos.push(newState.id);

      localStorage.setItem(
        "favorites",
        JSON.stringify([...new Set(state.favoriteTodos)])
      );

      updateTodos(state);
    },
    REMOVE_FAVOTITE_TODOS(state, newState) {
      if (localStorage.getItem("favorites")) {
        state.favoriteTodos = JSON.parse(localStorage.getItem("favorites"));
      }

      state.favoriteTodos = state.favoriteTodos.filter(
        (todo) => todo !== newState.id
      );

      localStorage.setItem(
        "favorites",
        JSON.stringify([...new Set(state.favoriteTodos)])
      );

      updateTodos(state);
    },
  },
  getters: {
    todos: (state) => state.todos,

    filterOptionsByStatus: (state) => state.filterOptionsByStatus,
    selectedFilterByStatus: (state) => state.selectedFilterByStatus,
    filtredTodosByStatus: (state) => {
      const filtredTodos = state.todos.filter((todo) => {
        switch (state.selectedFilterByStatus) {
          case "completed":
            return todo.completed === true;
          case "uncompleted":
            return todo.completed === false;
          case "favorites":
            return todo.favorite === true;
          default:
            return todo;
        }
      });
      return filtredTodos;
    },

    filterOptionsByUser: (state) => state.filterOptionsByUser,
    selectedFilterByUser: (state) => state.selectedFilterByUser,
    filtredTodosByStatusAndUser: (state, getters) => {
      if (!state.selectedFilterByUser || state.selectedFilterByUser === "all")
        return getters.filtredTodosByStatus;
      const filtredTodos = getters.filtredTodosByStatus.filter((todo) => {
        return todo.userId === +state.selectedFilterByUser;
      });
      return filtredTodos;
    },

    searchQuery: (state) => state.searchQuery,
    filtredTodosByStatusAndUserAndSearch: (state, getters) => {
      return getters.filtredTodosByStatusAndUser.filter((todo) => {
        return todo.title
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase());
      });
    },
  },
};

export default todoModule;
