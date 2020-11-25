<template>
  <div>
    <div class="masonry-with-flex">
      <div class="tab-1">
        <div>
          <skeleton-line :height="`1rem`" :width="`4rem`" />
          <skeleton-line :height="`1rem`" :width="`2rem`" />
        </div>
      </div>
      <div class="tab-2">
        <div>
          <skeleton-line :height="`1rem`" :width="`4rem`" />
          <skeleton-line :height="`1rem`" :width="`2rem`" />
        </div>
      </div>
      <div class="tab-3">
        <div>
          <skeleton-line :height="`1rem`" :width="`4rem`" />
          <skeleton-line :height="`1rem`" :width="`2rem`" />
        </div>
      </div>
      <div class="tab-4">
        <div>
          <skeleton-line :height="`1rem`" :width="`4rem`" />
          <skeleton-line :height="`1rem`" :width="`2rem`" />
        </div>
      </div>
      <div class="tab-5">
        <div>
          <skeleton-line :height="`1rem`" :width="`4rem`" />
          <skeleton-line :height="`1rem`" :width="`2rem`" />
        </div>
      </div>
      <div class="tab-6">
        <div>
          <skeleton-line :height="`1rem`" :width="`4rem`" />
          <skeleton-line :height="`1rem`" :width="`2rem`" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .masonry-with-flex {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 800px;
    @media only screen and (max-width: 600px) {
      flex-wrap: nowrap;
      max-height: 100%;
    }
    @media only screen and (min-width: 768px) and (max-width: 768px) {
      max-height: 1300px;
    }
    div {
      width: 30%;
      background: #f5f5f5;
      color: white;
      margin: 0 1rem 1rem 0;
      //   text-align: center;
      font-family: system-ui;
      font-weight: 900;
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      border-radius: 5px;

      div {
        // margin-left: 1rem;
        display: flex;
        // margin-left: 0.2rem;
        width: 50%;
        margin-left: 1rem;
      }

      @media only screen and (max-width: 600px) {
        width: 100%;
      }

      @media only screen and (min-width: 768px) and (max-width: 768px) {
        width: 50%;
      }
    }
    // @for $i from 1 through 36 {
    //   div:nth-child(#{$i}) {
    //     $h: (random(400) + 100) + px;
    //     height: $h;
    //     line-height: $h;
    //   }
    // }
    .tab-1 {
      height: 310px;
    }
    .tab-2 {
      height: 302px;
    }
    .tab-3 {
      height: 460px;
    }
    .tab-4 {
      height: 156px;
    }
    .tab-5 {
      height: 283px;
    }
    .tab-6 {
      height: 361px;
    }
  }
</style>
