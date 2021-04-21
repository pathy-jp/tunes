// deps
import { createRouter, createWebHashHistory } from "vue-router";

// views
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Tunes from "../views/Tunes.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/tunes",
    name: "Tunes",
    component: Tunes,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
