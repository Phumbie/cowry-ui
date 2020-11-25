<template>
  <div>
    <Grid :pictures="pictures" />
  </div>
</template>
<script>
  import Grid from "../GridLayout/Grid";
  export default {
    components: {
      Grid,
    },
    data() {
      return {
        bottom: "",
      };
    },
    created() {
      this.$store.dispatch("getAllPictures");
    },
    computed: {
      pictures() {
        return this.$store.state.pictures;
      },
    },
  };
</script>
