<template>
  <div>
    <Header />
    <Pictures />
    <transition name="fade">
      <Modal v-if="showModal" />
    </transition>
    <!-- <h1>Hello</h1> -->
  </div>
</template>

<script>
  import Header from "@/components/Header/Header";
  import Pictures from "@/components/Pictures/Pictures";
  import Modal from "@/components/Modal/Modal";
  // @ is an alias to /src
  // import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    name: "Home",
    components: {
      // HelloWorld,
      Header,
      Pictures,
      Modal,
    },
    computed: {
      showModal() {
        return this.$store.state.showModal;
      },
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
