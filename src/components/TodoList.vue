<template>
  <div v-if="todos.length > 0">
    <TransitionGroup name="user-list">
      <TodoItem
        @add="$emit('add', todo)"
        @remove="$emit('remove', todo)"
        v-for="todo in todos"
        :todo="todo"
        :key="todo.id"
      />
    </TransitionGroup>
  </div>
  <div v-else>Todo list is empty</div>
</template>
<script>
import BaseButton from "../ui/BaseButton.vue";
import UserCard from "../components/UserCard.vue";
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    BaseButton,
    UserCard,
    TodoItem,
  },
  props: {
    todos: Array,
  },
};
</script>

<style scoped lang="scss">
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
</style>
