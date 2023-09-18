<template>
  <div class="card">
    <div class="card__header">
      <p class="title">description</p>
    </div>
    <div class="card__body">
      <div class="card__body-description">
        <p class="text">description</p>
      </div>
      <form @submit.prevent="register" class="form">
        <div class="form__inputs">
          <BaseInput placeholder="Username" type="text" v-model="username" />
          <span v-if="msg.username">{{ msg.username }}</span>
          <BaseInput placeholder="Phone Number" type="text" v-model="phone" />
          <span v-if="msg.phone">{{ msg.phone }}</span>
        </div>
        <div class="form__actions">
          <BaseButton type="submit" :disabled="isDisabledButton"
            >Login</BaseButton
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      username: "",
      phone: "",
      msg: [],
      disabled: [true, true],
    };
  },
  watch: {
    username(value) {
      this.validateUsername(value);
    },
    phone(value) {
      this.validatePhone(value);
    },
  },
  computed: {
    isDisabledButton() {
      return !this.disabled.every((i) => i === false);
    },
  },
  methods: {
    validateUsername(value) {
      if (!/^[a-zA-Z]+$/.test(value) && value.length > 0) {
        this.msg["username"] = "Может содержать только буквы.";
        this.disabled = [true, this.disabled[1]];
      } else if (value.length <= 0) {
        this.msg["username"] = "Длина имени пользователя должна быть >0";
        this.disabled = [true, this.disabled[1]];
      } else {
        this.msg["username"] = "";
        this.disabled = [false, this.disabled[1]];
      }
    },
    validatePhone(value) {
      if (
        !/^[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-|=]+$/.test(value) &&
        value.length > 0
      ) {
        this.msg["phone"] = "Только цифры и символы";
        this.disabled = [this.disabled[1], true];
      } else if (value.length <= 0) {
        this.msg["phone"] = "Длина имени пользователя должна быть >0";
        this.disabled = [this.disabled[1], true];
      } else {
        this.msg["phone"] = "";
        this.disabled = [this.disabled[1], false];
      }
    },
    register() {
      console.log(this.username);
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
