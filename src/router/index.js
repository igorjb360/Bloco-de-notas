import { createRouter, createWebHistory } from "vue-router";
import Todolist from "../views/Todo_list.vue";
import List from "../views/List.vue";
import Form from "../views/Form.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "todolist",
      component: Todolist,
    },
    {
      path: "/list",
      name: "list",
      component: List,  
    },
    {
      path: "/form",
      name: "create",
      component: Form,
    },
    {
      path: "/form/:index",
      name: "form",
      component: Form,
    },
  ],
});

export default router;
