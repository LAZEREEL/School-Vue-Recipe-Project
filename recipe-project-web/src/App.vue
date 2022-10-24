<script setup>
import { RouterView } from "vue-router";
import CategorySidebar from "./components/CategorySidebar.vue";
import Header from "./components/Header.vue";

</script>

<template>

  <div class="header">

    <Header />

  </div>


  <div class="appContainer">

    <div class="categoryShow">
      <CategorySidebar />
    </div>
    <RouterView/>
  </div>
</template>


<style>
body {
  background-color: rgb(76, 76, 76);
}

.appContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* kika på */

}

.searchBar {
  display: flex;
  justify-content: center;

}

li {
  list-style: none;
}
</style> 