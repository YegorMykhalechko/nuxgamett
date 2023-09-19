<template>
  <button @click="onClick" class="button">
    <slot />
  </button>
</template>
<script>
export default {
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
<style scoped lang="scss">
.button {
  background-color: var(--btnPrimaryColor);
  color: var(--white);
  cursor: pointer;
  padding: 10px 30px;
  min-height: 41px;
  border-radius: 5px;
  width: 100%;
  border: none;
  font-size: 17px;
  font-weight: 500;
  &:disabled {
    background-color: var(--bgTitleCardColor);
    cursor: auto;
  }
  &--danger {
    background-color: var(--danger);
  }
}
</style>
