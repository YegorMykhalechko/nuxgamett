<template>
  <div>
    <BaseButton type="button" @click="logout">Logout</BaseButton>
  </div>
</template>
<script>
import BaseButton from "../ui/BaseButton.vue";
import { mapActions } from "vuex";

export default {
  components: {
    BaseButton,
  },
  methods: {
    ...mapActions({
      logout: "logout",
    }),
  },
};
</script>
