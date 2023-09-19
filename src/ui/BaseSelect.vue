<template>
  <select class="select" @change="changeOption">
    <option disabled value="">Choose</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.select {
  box-sizing: border-box;
  width: 100%;
  display: block;
  background: white;
  border-radius: 5px;
  padding: 10px;
  border: none;
  &::placeholder {
    color: #353535;
  }
  &:focus-visible {
    outline: 1px solid var(--bgPrimaryColor);
  }
  &__error {
    position: absolute;
    color: var(--danger);
    font-size: 12px;
  }
}
</style>
