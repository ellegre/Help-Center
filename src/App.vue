<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
    <Content />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer";
import Content from "./components/Content";


export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
    Content
  }
};
</script>

<style lang="scss">

</style>
