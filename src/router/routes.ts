import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("#pages/home.vue"),
    name: "home",
  },
  {
    path: "/product-types",
    component: () => import("#pages/product-types.vue"),
    name: "product-types",
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("#pages/error-not-found.vue"),
  },
];

export default routes;
