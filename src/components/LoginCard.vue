<template>
  <div class="card">
    <div class="card__header">
      <p class="title">description</p>
    </div>
    <div class="card__body">
      <div class="card__body-description">
        <p class="text">description</p>
      </div>
      <LoginForm @login="onLogin" :loginError="loginError" />
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
  data() {
    return {
      username: "",
      phone: "",
    };
  },
  computed: {
    ...mapGetters({
      loginError: "user/loginError",
    }),
  },
  methods: {
    onLogin(data) {
      this.$store.dispatch("user/getUser", data);
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
