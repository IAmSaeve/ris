import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/Store/store";
import "@/registerServiceWorker";

import StarRating from "vue-star-rating";

Vue.config.productionTip = false;

export const eventBus = new Vue();
Vue.component("star-rating", StarRating);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
