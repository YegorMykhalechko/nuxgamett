<template>
  <button class="button">
    <slot />
  </button>
</template>
<script></script>
<style lang="scss">
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
}
</style>
