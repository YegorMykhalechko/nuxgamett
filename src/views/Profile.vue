<template>
  <div class="wrapper">
    <div class="page-profile">
      <Card :title="'Create Todo'">
        <CreateTodoForm @add="onAdd" />
      </Card>
      <UserCard :user="user" />
    </div>
    <div class="filters">
      <BaseSelect
        :modelValue="selectedFilterByStatus"
        @update:modelValue="setSelectedFilterStatus"
        :options="filterOptionsByStatus"
      />
      <BaseSelect
        :modelValue="selectedFilterByStatus"
        @update:modelValue="setSelectedFilterUser"
        :options="filterOptionsByUser"
      />
    </div>
    <BaseInput
      placeholder="Search..."
      class="search"
      :value="searchQuery"
      @update="setSearchQuery"
    />
    <TodoList
      @add="addPostToFav"
      @remove="removeFromFav"
      :todos="filtredTodosByStatusAndUserAndSearch"
    />
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import Card from "../components/Card.vue";
import BaseSelect from "../ui/BaseSelect.vue";
import BaseButton from "../ui/BaseButton.vue";
import TodoList from "../components/TodoList.vue";
import BaseInput from "../ui/BaseInput.vue";
import CreateTodoForm from "../components/CreateTodoForm.vue";
import UserCard from "../components/UserCard.vue";

export default {
  components: {
    BaseButton,
    TodoList,
    BaseSelect,
    BaseInput,
    Card,
    CreateTodoForm,
    UserCard,
  },
  computed: {
    ...mapGetters({
      user: "user/user",
      todos: "todo/todos",

      filterOptionsByStatus: "todo/filterOptionsByStatus",
      selectedFilterByStatus: "todo/selectedFilterByStatus",
      filtredTodosByStatus: "todo/filtredTodosByStatus",

      filterOptionsByUser: "todo/filterOptionsByUser",
      selectedFilterByUser: "todo/selectedFilterByUser",
      filtredTodosByStatusAndUser: "todo/filtredTodosByStatusAndUser",

      searchQuery: "todo/searchQuery",
      filtredTodosByStatusAndUserAndSearch:
        "todo/filtredTodosByStatusAndUserAndSearch",
    }),
  },
  mounted() {
    const id = localStorage.getItem("user");
    this.$store.dispatch("user/getUser", id);
    this.$store.dispatch("todo/getTodos");
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedFilterStatus: "todo/SET_SELECTED_FILTRED_STATUS",
      setSelectedFilterUser: "todo/SET_SELECTED_FILTRED_USER",
      setSearchQuery: "todo/SET_SEARCH_QUERY",
    }),
    onAdd(data) {
      this.$store.dispatch("todo/addTodo", data);
    },
    addPostToFav(data) {
      this.$store.dispatch("todo/addTodoToFavorites", data);
    },
    removeFromFav(data) {
      this.$store.dispatch("todo/removeTodoFromFavorites", data);
    },
  },
};
</script>
<style scoped lang="scss">
.page-profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}
.filters {
  gap: 10px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.search {
  margin-top: 20px;
}
</style>
