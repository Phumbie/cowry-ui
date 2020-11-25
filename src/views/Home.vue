<template>
  <div>
    <Header />
    <Pictures />
  </div>
</template>

<script>
  import Header from "@/components/Header/Header";
  import Pictures from "@/components/Pictures/Pictures";
  // @ is an alias to /src
  // import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    name: "Home",
    components: {
      // HelloWorld,
      Header,
      Pictures,
    },
    computed: {
      showModal() {
        return this.$store.state.showModal;
      },
    },
  };
</script>
<style lang="scss" scoped></style>
