<template>
  <form @submit.prevent="login" class="form">
    <div class="form__inputs">
      <BaseInput
        placeholder="Username"
        type="text"
        v-model.trim="username"
        :errorMsg="msg.username"
      />
      <BaseInput
        placeholder="Phone Number"
        type="text"
        v-model.trim="phone"
        :errorMsg="msg.phone"
      />
    </div>
    <div class="form__actions">
      <BaseButton type="submit" :disabled="isDisabledButton">Login</BaseButton>
    </div>
    <div v-if="loginError" class="form__error">{{ loginError }}</div>
  </form>
</template>
<script>
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
import formValidation from "../mixins/formValidation";
export default {
  components: {
    BaseInput,
    BaseButton,
  },
  props: {
    loginError: String,
  },
  mixins: [formValidation],
  data() {
    return {
      username: "",
      phone: "",
    };
  },
  methods: {
    login() {
      this.$emit("login", {
        username: this.username,
        phone: this.phone,
      });
      this.username = " ";
      this.phone = " ";
    },
  },
};
</script>
