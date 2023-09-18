<template>
  <input
    class="input"
    :value="value"
    @input="$emit('update', $event.target.value)"
  />
</template>
<script>
export default {
  props: {
    value: String | Number,
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
}
</style>
