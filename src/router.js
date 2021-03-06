import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/plane",
      name: "plane",
      component: () => import("./views/Plane.vue")
    },
    {
      path: "/sortable",
      name: "sortable",
      component: () => import("./views/Sortable.vue")
    }
  ]
});
