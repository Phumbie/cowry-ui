<template>
  <div>
    <div class="container">
      <Loader v-show="visibility !== 'initial'" />
      <div :style="{ visibility: visibility }" class="grid" ref="grid">
        <div
          class="item photo"
          v-for="picture in pictures"
          :key="picture.id"
          @click="showInfo(picture)"
        >
          <div class="content">
            <div class="overlay"></div>
            <img
              class="photothumb"
              :src="picture.urls.small"
              @load="rendered"
            />
            <div class="desc">
              <p>{{ picture.user.first_name }} {{ picture.user.last_name }}</p>
              <p>{{ picture.user.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import api from "../../../utils/api";
  import Loader from "../Loader/loader";
  export default {
    props: ["pictures"],
    components: {
      Loader,
    },
    data() {
      return {
        // pictures: [],
        loadedImage: 0,
        showPictures: false,
        visibility: "hidden",
        // loading: false,
      };
    },
    created() {
      let masonryEvents = ["load", "resize"];
      masonryEvents.forEach((event) => {
        window.addEventListener(event, this.resizeAllGridItems);
      });
    },
    computed: {
      loading() {
        return this.$store.state.loading;
      },
    },
    watch: {
      loadedImage(val) {
        // console.log(val);
        if (val === this.pictures.length) {
          this.showPictures = true;
          this.resizeAllGridItems();
        }
      },
      pictures() {
        this.loadedImage;
        let masonryEvents = ["load", "resize"];

        masonryEvents.forEach((event) => {
          window.addEventListener(event, this.resizeAllGridItems);
        });
        this.$store.commit("SET_LOADING", false);
      },
    },
    methods: {
      resizeAllGridItems() {
        let allItems = document.getElementsByClassName("item");
        for (let i = 0; i < allItems.length; i++) {
          this.resizeMasonryItem(allItems[i]);
        }
      },
      resizeMasonryItem(item) {
        /* Get the grid object, its row-gap, and the size of its implicit rows */
        let grid = document.getElementsByClassName("grid")[0],
          rowGap = parseInt(
            window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
          ),
          rowHeight = parseInt(
            window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
          );
        let rowSpan = Math.ceil(
          (item.querySelector(".content").getBoundingClientRect().height +
            rowGap) /
            (rowHeight + rowGap)
        );

        /* Set the spanning as calculated above (S) */
        item.style.gridRowEnd = "span " + rowSpan;
        this.visibility = "initial";
      },
      rendered() {
        if (this.loadedImage === this.pictures.length) {
          this.loadedImage = 0;
        }
        this.loadedImage++;
        // console.log(event.target.complete, this.loadedImage);
      },
      showInfo(value) {
        this.$store.commit("SHOW_MODAL", true);
        this.$store.commit("DISPLAY_INFO", value);
      },
    },
  };
</script>
<style lang="scss" scoped>
  .container {
    width: 65%;
    margin: auto;
    transform: translateY(-2.5rem);

    @media only screen and (max-width: 600px) {
      width: 80%;
    }

    & .grid {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
      grid-auto-rows: 10px;
      //   visibility: hidden;

      @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
      }
      @media only screen and (min-width: 768px) and (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(35%, 1fr));
      }

      & .item {
        background-color: #ffffff;
        border-radius: 10px;
        position: relative;
        border-radius: 5px;
        cursor: pointer;

        & .photothumb {
          width: 100%;
        }
        &.overlay {
          position: absolute;
          height: 100%;
          width: 100%;
          border-radius: 5px;
          top: 0;
          background: linear-gradient(
            180deg,
            transparent 0,
            transparent 30%,
            #000
          );
          opacity: 0.8;
          z-index: 1;
        }
        & .content {
          position: relative;
        }

        & .desc {
          position: absolute;
          color: white;
          bottom: 1rem;
          left: 1rem;
          z-index: 2;
        }
      }

      & .item img {
        height: 100%;
        border-radius: 5px;

        width: 100%;
      }
    }
  }
</style>
