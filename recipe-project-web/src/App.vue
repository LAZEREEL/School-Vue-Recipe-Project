<script setup>
import { RouterView } from "vue-router";
import CategorySidebar from "./components/CategorySidebar.vue";
</script>

<template>

  <div class="appContainer">

    <div class="categoryShow">
      <CategorySidebar />
    </div>
    <RouterView :key="$route.path" />
  </div>
</template>


<style>
.appContainer {
  display: flex;
  flex-direction: row;

}
</style> 