import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import MemoList from "../views/MemoList.vue";
import NewView from "../views/NewView.vue";
import EditView from "../views/EditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/home",
    //   name: "home",
    //   component: HomeView,
    // },
    {
      path: "/",
      name: "list",
      component: MemoList,
    },
    {
      path: "/new",
      name: "new",
      component: NewView,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
