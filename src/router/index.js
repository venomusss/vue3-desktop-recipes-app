import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/recipes/:id",
    name: "receipt",
    component: () => import("../views/RecipeView.vue"),
  },
  {
    path: "/favourites",
    name: "favourites",
    component: () => import("../views/FavouritesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
