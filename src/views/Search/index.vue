<template>
  <div>
    <Header />
    <Search />

    <!-- <h1>Hello</h1> -->
  </div>
</template>

<script>
  import Header from "@/components/Header/Header";
  import Search from "@/components/Search/Search";
  // @ is an alias to /src
  // import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    name: "Home",
    components: {
      // HelloWorld,
      Header,
      Search,
    },
  };
</script>
<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
