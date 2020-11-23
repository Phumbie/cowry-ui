import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import SkeletonLine from "./components/Partials/skeleton/skeletonLine";
import SkeletonCircle from "./components/Partials/skeleton/skeletonCircle";
import SkeletonSquare from "./components/Partials/skeleton/skeletonSquare";
import SkeletonBody from "./components/Partials/skeleton/skeletonBody";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.component("SkeletonLine", SkeletonLine);
Vue.component("SkeletonCircle", SkeletonCircle);
Vue.component("SkeletonSquare", SkeletonSquare);
Vue.component("SkeletonBody", SkeletonBody);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
