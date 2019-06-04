import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

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
      component: () => import("@/views/About.vue")
    },
    {
      path: "/institutions",
      name: "institutions",
      // Lazy-load when the route is visited.
      component: () => import("@/views/Institutions.vue")
    },
    {
      path: "/institution/:name",
      name: "institution",
      props: true,
      beforeEnter(to, from, next) {
        if (to.params.place) {
          next();
        } else {
          next({ name: "home" });
        }
      },
      // Lazy-load when the route is visited.
      component: () => import("@/views/Institution.vue")
    },
    {
      path: "/404",
      name: "404",
      // Lazy-load when the route is visited.
      component: () => import("@/views/NotFound.vue")
    },
    {
      path: "*",
      name: "default redirector",
      redirect: "/404"
    }
  ]
});
