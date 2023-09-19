<template>
  <div class="todo">
    <div>
      <div>{{ todo.title }}</div>
    </div>

    <div class="todo__actions">
      <div class="todo--comleted" v-if="todo.completed">Completed</div>
      <BaseButton v-if="!todo.favorite" @click="$emit('add', todo)"
        >Add to Favorites</BaseButton
      >
      <BaseButton class="button--danger" v-else @click="$emit('remove', todo)"
        >Remove from Favorites</BaseButton
      >
    </div>
  </div>
</template>
<script>
import BaseButton from "../ui/BaseButton.vue";
import UserCard from "../components/UserCard.vue";

export default {
  components: {
    BaseButton,
    UserCard,
  },
  props: {
    todo: Object,
  },
};
</script>

<style scoped lang="scss">
.todo {
  padding: 15px;
  background-color: var(--bgCardColor);
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &--comleted {
    color: var(--btnPrimaryColor);
  }
  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
