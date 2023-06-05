import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "JobsContainer",
    component: () => import("../views/JobsContainer.vue"),

  },
  {
    path: "/job/:jobId",
    name: "JobDetails",
    component: () => import("../views/JobDetails.vue"),
    props: true,

  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
