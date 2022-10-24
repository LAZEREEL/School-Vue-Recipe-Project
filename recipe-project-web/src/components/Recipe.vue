<script>
export default {
  data() {
    return {
      singleRecipe: null,
      recipeId: this.$route.params.recipeId,
    };
  },
  created() {
    fetch(
      "https://jau21-grupp1-mn2l2rop49wl.sprinto.se/recipes/" + this.recipeId
    )
      .then((response) => response.json())
      .then((data) => (this.singleRecipe = data))
      .catch((error) => console.log("Error: " + error));
  },
  // components: { RecipeList }
};
</script>

<template>
  <div class="recipeRecipeContainer">
    <img class="recipeImage" :src="singleRecipe.imageUrl" alt="recipeImage" />
    {{ this.singleRecipe.title }}
    {{ this.singleRecipe.description }}
    {{ this.singleRecipe.instructions }}
    <div v-for="ingredient in this.singleRecipe.ingredients" :key="_id">
       <p>{{ ingredient.name }}</p>
       <p>{{ ingredient.amount }}</p>
       <p>{{ ingredient.unit }}</p>
    </div>
  </div>
</template>

<style scoped>
.recipeRecipeContainer {
  display: flex;
  flex-direction: row;
  width: 600px;
}

.recipeImage {

}
</style>
