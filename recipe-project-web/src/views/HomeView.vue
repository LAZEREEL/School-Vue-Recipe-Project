<script setup>

import AllRecepies from "../components/AllRecepies.vue";
import SearchBar from "../components/SearchBar.vue";

</script>

<template>

  <div class="recipeContainer">

    <AllRecepies />
    
  </div>

</template>

<style>

.recipeContainer {
  display: flex;
  flex-direction: row;
  text-decoration: none;

}
</style>
