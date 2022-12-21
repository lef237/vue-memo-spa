import { createRouter, createWebHistory } from "vue-router";
import MemoList from "../views/MemoList.vue";
import NewView from "../views/NewView.vue";
import EditView from "../views/EditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
});

export default router;
