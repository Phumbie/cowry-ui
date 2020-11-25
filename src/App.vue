<template>
  <div id="app">
    <router-view />
    <transition name="fade">
      <Modal v-if="showModal" />
    </transition>
  </div>
</template>
<script>
  import Modal from "@/components/Modal/Modal";

  export default {
    components: {
      Modal,
    },
    computed: {
      showModal() {
        return this.$store.state.showModal;
      },
    },
  };
</script>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
