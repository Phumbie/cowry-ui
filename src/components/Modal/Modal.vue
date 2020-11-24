<template>
  <div class="modal">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width="357px"
      height="357px"
      viewBox="0 0 357 357"
      style="enable-background:new 0 0 357 357;"
      xml:space="preserve"
      @click="closeModal"
    >
      <g>
        <g id="close">
          <polygon
            points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3     214.2,178.5   "
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
    <div class="lds-dual-ring" v-if="visibility === 'hidden'"></div>
    <div :style="{ visibility: visibility }" class="modal-content">
      <div class="modal__image">
        <img :src="displayInfo.urls.regular" alt="" @load="showImage" />
        <div>
          <h4>
            {{ displayInfo.user.first_name }}
            {{ displayInfo.user.last_name }}
          </h4>
          <p>{{ displayInfo.user.location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visibility: "hidden",
      };
    },
    // inheritAttrs: false,
    mounted() {
      document.body.style.overflow = "hidden";
    },
    beforeDestroy() {
      document.body.style.overflow = "initial";
    },
    methods: {
      closeModal() {
        this.$store.commit("SHOW_MODAL", false);
      },
      showImage() {
        console.log("show");
        this.visibility = "initial";
      },
    },
    computed: {
      displayInfo() {
        return this.$store.state.showInfo;
      },
    },
  };
</script>
<style lang="scss" scoped>
  * {
    --dark-blue: #283a5a;
    --primary-blue: #abb2be;
  }
  .modal {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;

    svg {
      fill: white;
      height: 1.3rem;
      width: 1.3rem;
      position: absolute;
      top: 2rem;
      right: 5rem;
      cursor: pointer;

      @media only screen and (max-width: 600px) {
        width: 0.8rem;
        top: 1rem;
        right: 2rem;
      }
    }
    .modal-content {
      display: flex;
      height: 80%;
      text-align: center;
      //   margin-top: 5rem;

      margin-top: 2rem;
      border-radius: 5px;

      .modal__image {
        max-width: 90%;
        margin: auto;
        border-radius: 10px;
        background-color: white;
      }
      .modal__image img {
        max-width: 100%;
        max-height: 30rem;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
      .modal__image div {
        text-align: left;
        position: relative;
        left: 2rem;
        margin: auto;

        h4 {
          color: var(--dark-blue);
        }
        p {
          color: var(--primary-blue);
        }
      }
    }
  }

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
    position: absolute;

    left: calc(50% - 40px);
    top: 40%;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
