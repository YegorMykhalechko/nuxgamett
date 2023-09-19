import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("user")) {
        next("/profile");
      } else {
        next();
      }
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("user")) {
        next("/");
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
