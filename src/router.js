import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // Lazy-load when the route is visited.
      component: () => import("./views/About.vue")
    },
    {
      path: "/404",
      name: "404",
      component: () => import("./views/NotFoundComponent.vue")
    },
    {
      path: "*",
      name: "default redirector",
      redirect: "/404"
    }
  ]
});
