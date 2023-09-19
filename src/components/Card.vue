<template>
  <div class="card">
    <div class="card__header">
      <p class="title">{{ title }}</p>
    </div>
    <div class="card__body">
      <div class="card__body-description">
        <p class="text">{{ description }}</p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import LoginForm from "./LoginForm.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    LoginForm,
  },
  props: {
    title: String,
    description: String,
  },
};
</script>
<style scoped lang="scss">

