<template>
  <div class="card">
    <div class="card__header">
      <p class="title">description</p>
    </div>
    <div class="card__body">
      <div class="card__body-description">
        <p class="text">description</p>
      </div>
      <LoginForm @login="onLogin" />
    </div>
  </div>
</template>
<script>
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
import LoginForm from "./LoginForm.vue";
export default {
  components: {
    BaseInput,
    BaseButton,
    LoginForm,
  },
  data() {
    return {
      username: "",
      phone: "",
    };
  },
  methods: {
    onLogin(data) {
      console.log(data);
    },
  },
};
</script>
<style scoped lang="scss">
.card {
  margin: auto;
  width: 100%;
  max-width: 447px;
  background: var(--bgCardColor);
  border-radius: 5px;
  min-height: 299px;
  overflow: auto;

  &__body {
    padding: 0 25px 30px;
    &-description {
      min-height: 50px;
      display: flex;
      align-items: center;
    }
  }

  &__header {
    text-align: center;
    padding: 15px 0;
    background: var(--bgTitleCardColor);
  }
}

.form {
  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__actions {
    margin-top: 25px;
  }
}
</style>
