<script setup>
import { RouterView } from "vue-router";
import CategorySidebar from "./components/CategorySidebar.vue";
/* import AllRecepies from "./components/AllRecepies.vue"; */
</script>

<template>

  <!-- <div class="wrapper">
     <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/categories">About</RouterLink>
    </nav>
  </div> -->

  <div class="appContainer">

    <div class="categoryShow">
      <CategorySidebar />
    </div>

    <!-- <div class="recipeShow">
      <AllRecepies />
    </div> -->

    <RouterView :key="$route.path" />
  </div>
</template>


<style>
.appContainer {
  display: flex;
  flex-direction: row;

}
</style> 