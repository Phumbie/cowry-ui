<template>
  <div>
    <Grid :pictures="searchPictures" />
  </div>
</template>
<script>
  import Grid from "../GridLayout/Grid";
  export default {
    components: {
      Grid,
    },
    created() {
      //   this.$store.commit("SEARCHING", true);
      this.$store.dispatch("getSearchPictures", this.$route.params.id);
    },
    beforeDestroy() {
      this.$store.commit("EMPTY_PICTURES");
    },
    computed: {
      searchPictures() {
        return this.$store.state.searchPictures;
      },
    },
  };
</script>
