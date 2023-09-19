<template>
  <div>
    <input
      class="input"
      :value="value"
      @input="$emit('update', $event.target.value)"
    />
    <span class="input__error" v-if="errorMsg">{{ errorMsg }}</span>
  </div>
</template>
<script>
export default {
  props: {
    value: String | Number,
    errorMsg: String,
  },
  model: {
    prop: "value",
    event: "update",
  },
};
</script>
<style scoped lang="scss">
.input {
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
