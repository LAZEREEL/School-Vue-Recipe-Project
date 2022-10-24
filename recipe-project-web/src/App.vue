<script setup>
import { RouterView } from "vue-router";
import CategorySidebar from "./components/CategorySidebar.vue";

</script>

<template>

  <div class="header">
    <RouterLink to="/" style="text-decoration: none"
      ><h1>Drinkomania</h1></RouterLink>
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

li {
  list-style: none;
}

.header {
  width: auto;
  height: 90px;
  font-size: 40px;
  text-align: center;
}
.header h1 {
  color: antiquewhite;
  margin-top: 0%;
  font-family: 'Courier New', Courier, monospace;
}
</style> 