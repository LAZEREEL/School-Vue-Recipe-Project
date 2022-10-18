import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryView from "../views/CategoryView.vue";
import RecipeView from "../views/RecipeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/category/:categoryId",
      name: "categories",
      props: true,
      component: CategoryView
    }
     ,
    {
      path: "/recipes/:recipeId",
      name: "recipes",
      props: true,
      component: RecipeView
    } 
    
  ],
});

export default router;
