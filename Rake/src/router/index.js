import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/hackathon/:id",
    name: "HackathonDetail",
    component: () => import(/* webpackChunkName: "about" */ "../views/HackathonDetail"),
  },
  {
    path: "/team",
    name: "Team",
    component: () => import(/* webpackChunkName: "about" */ "../views/Team"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
