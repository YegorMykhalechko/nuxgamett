<template>
  <header>
    <div class="nav">
      <RouterLink to="/">Home</RouterLink>|<RouterLink to="/about"
        >About</RouterLink
      >
    </div>
  </header>
</template>
<style lang="scss">
header {
  background-color: var(--bgSecondaryColor);
  .nav {
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      font-weight: 500;
      color: var(--textColor);
      margin: 0 5px;
    }

    a.router-link-exact-active {
      color: var(--linkActiveColor);
    }
  }
}
</style>
