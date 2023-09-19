<template>
  <Card :title="'description'" :description="'description'">
    <LoginForm @login="onLogin" :loginError="loginError" />
  </Card>
</template>
<script>
import { mapGetters } from "vuex";
import Card from "../components/Card.vue";
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "Home",
  components: {
    Card,
    LoginForm,
  },
  computed: {
    ...mapGetters({
      loginError: "user/loginError",
    }),
  },
  methods: {
    onLogin(data) {
      this.$store.dispatch("user/findUser", data);
    },
  },
};
</script>
