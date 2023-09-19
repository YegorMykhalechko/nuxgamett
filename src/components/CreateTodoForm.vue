<template>
  <form @submit.prevent="add">
    <div class="form__inputs">
      <BaseInput placeholder="User ID" type="text" v-model.trim="userId" />
      <BaseInput placeholder="Title" type="text" v-model.trim="title" />
    </div>
    <div class="form__actions">
      <BaseButton type="submit">Add</BaseButton>
    </div>
  </form>
</template>
<script>
import BaseButton from "../ui/BaseButton.vue";
import BaseInput from "../ui/BaseInput.vue";

export default {
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      userId: "",
      title: "",
    };
  },
  methods: {
    add() {
      this.$emit("add", {
        userId: this.userId,
        title: this.title,
      });
      this.userId = "";
      this.title = "";
    },
  },
};
</script>
