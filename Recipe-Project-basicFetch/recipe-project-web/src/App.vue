<script>
// import { method } from "cypress/types/bluebird";
// import { RouterLink, RouterView } from "vue-router";
import SearchBar from "./components/SearchBar.vue";
import CategorySidebar from "./components/CategorySidebar.vue";

export default {
  data() {
    return {
      listOfRecipes: null,
      
    }
  },
  mounted() {
    /* console.log("Running fetchListOfRecipes"); */
    fetch('https://jau21-grupp1-mn2l2rop49wl.sprinto.se/recipes')
      .then(response => response.json())
      .then(data => {
        this.listOfRecipes = data
        console.log(this.listOfRecipes)
      });
  },
  components: {
    SearchBar,
    CategorySidebar,
  }
}
</script>

<template>

<div>
  <SearchBar :searchBarListOfRecipes="listOfRecipes" />
</div>  

  <div class="mainContent">

    <div class="categorySidebar">
      <CategorySidebar :listOfCategories="listOfRecipes"/>
    </div>

    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->

    
    <div class="recipeDisplay">

      <li v-for="recipe in listOfRecipes" :key="recipe">
        <img :src=recipe.imageUrl alt="recipeImage" width="200">
        {{ recipe.title }}
        {{ recipe.avgRating }}
        {{ recipe.description }}
        
       <li v-for="category in recipe.categories">
        {{category}}
      </li> 
      
      
      </li>
    </div>
  </div>


  <!-- <RouterView /> -->
</template>

<style>
li {
  list-style: none;
}

.mainContent {
  display: flex;
}

.categorySidebar {
width: auto;
padding-right: 20px;
}
</style>
