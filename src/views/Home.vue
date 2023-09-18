<template>
  <LoginCard />
</template>
<script>
import LoginCard from "../components/LoginCard.vue";
export default {
  components: {
    LoginCard,
  },
  data() {
    return {
      username: "",
      phone: "",
    };
  },
};
</script>
