// skl-blog/src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/pages/Home.vue";
import About from "../components/pages/About.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
