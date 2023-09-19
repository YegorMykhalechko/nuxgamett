<template>
  <LoginCard />
</template>
<script>
import LoginCard from "../components/LoginCard.vue";
export default {
  name: "Home",
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
