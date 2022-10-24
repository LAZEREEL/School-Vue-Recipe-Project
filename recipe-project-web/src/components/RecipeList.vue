<script>
import SearchBar from "./SearchBar.vue";
export default {
  props: ["listOfRecipes"],
  components: { SearchBar },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    filteredListOfRecipes() {
      if (this.message === "") {
        return this.listOfRecipes;
      } else {
        return this.listOfRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(this.message.toLowerCase())
        );
      }
    },
  },
};
</script>

<template>
  <div class="recipeDisplay">
    <div class="inputBox">
      <search-bar @messageChanged="message = $event"></search-bar>
    </div>
    <div
      class="listCard"
      v-for="recipe in filteredListOfRecipes()"
      :key="recipe"
    >
      <router-link
        class="categoryLink"
        :to="{ name: 'recipe', params: { recipeId: recipe._id } }"
      >
        <img class="recipeImage" :src="recipe.imageUrl" alt="recipeImage" />

        <div class="recipeTextContainer">
          <div class="recipeText">
            <h1 class="recipeTitle">
              {{ recipe.title }} {{ recipe.avgRating }}
            </h1>
            <p class="recipeDescription">
              {{ recipe.description.substring(0, 180) + "..." }}
            </p>
            <p class="recipeIngredients">
              {{ recipe.ingredients.length }} Ingredienser |
              {{ recipe.timeInMins }} Minuter
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.inputBox {
  margin: 8px;
}

img {
  /* behöver ersätta float! */
  float: left;
}

.recipeTextContainer {
  margin-top: 5px;
}

/* p {
    
} */
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}

.listCard {
  font-family: "Courier New", Courier, monospace;
  font-size: 15px;
  display: inline;
  flex-direction: row;
  height: 200px;
  width: 800px;
  border-style: ridge;
  border-radius: 10px;

  background-color: lightgrey;
  border: solid;
  margin: 10px;
}

.recipeDisplay {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding-bottom: 10px;
}

.recipeDescription {
  font-size: 17px;
  flex-direction: column;
  display: flex;
}

.recipeTitle {
  margin: 2px;
  text-align: left;
}

.recipeImage {
  width: 200px;
  height: 200px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.recipeText {
  color: black;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
  margin-bottom: 5px;
}

.recipeIngredients {
  font-size: 17px;
  margin: 0px;
  margin-top: 10px;
  font-weight: bold;
}
</style>
