import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Index,
    },
    {
      path: "/example-1",
      name: "example-1",
      component: () => import("../components/examples/example1/example1.vue"),
    },
    {
      path: "/example-2",
      name: "example-2",
      component: () => import("../components/examples/example2/example2.vue"),
    },
    {
      path: "/example-3",
      name: "example-3",
      component: () => import("../components/examples/example3/example3.vue"),
    },
    {
      path: "/example-4",
      name: "example-4",
      component: () => import("../components/examples/example4/example4.vue"),
    },
  ],
});

export default router;
