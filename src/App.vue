<template>
  <div id="app">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>

<style lang="scss">
.wrapper {
  width: 1300px;
  margin: 0 auto;
}
</style>
