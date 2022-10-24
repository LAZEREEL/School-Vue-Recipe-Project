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
  <div v-if="!singleRecipe">No recipe found!</div>
  <div v-else class="recipeRecipeContainer">
    <img class="recipeImage" :src="singleRecipe.imageUrl" alt="recipeImage" />
    <h2>{{ this.singleRecipe.title }}</h2>
    <div class="recipeText"> {{ this.singleRecipe.description }}
    <br />
    {{ this.singleRecipe.instructions }}
    </div>

    <div v-for="ingredient in this.singleRecipe.ingredients" :key="id">
      <p>{{ ingredient.name }} {{ ingredient.amount }} {{ ingredient.unit }}</p>
    </div>
  </div>
</template>

<style scoped>
.recipeRecipeContainer {
  display: flex;
  flex-direction: column;
  width: 640px;
  align-items: center;
  margin-left: 10px;
  background-color:rgba(87, 95, 94, 0.622);
  border-radius: 120px;
}

.recipeImage {
    margin-top: 20px;
  width: 600px;
  height: 600px;
  border-radius: 100px;
}

.recipeText {
    margin: 20px;
    text-align: center;
}
</style>
