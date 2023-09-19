<template>
  <header>
    <nav>
      <BaseButton
        v-if="user"
        type="button"
        class="logout button--danger"
        @click="logout"
        >Logout</BaseButton
      >
    </nav>
  </header>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  computed: {
    ...mapGetters({
      user: "user/user",
    }),
  },
  methods: {
    ...mapActions({
      logout: "logout",
    }),
  },
};
</script>
<style scoped lang="scss">
header {
  background-color: var(--bgSecondaryColor);
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  .logout {
    width: 150px;
  }
}
</style>
