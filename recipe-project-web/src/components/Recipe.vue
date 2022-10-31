<script>
import PostRating from "./PostRating.vue";
import DisplayStarRating from "./DisplayStarRating.vue";
import CommentSection from "./CommentSection.vue";

export default {
  components: { PostRating, DisplayStarRating, CommentSection },
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
  computed: {
    recipe() {
      return this.singleRecipe;
    },
  },
};
</script>

<template>
  <div>
    <div v-if="!singleRecipe">Loading...</div>
    <div v-else class="recipeRecipeContainer">
      <div class="recipeInfoBox">
        <div class="recipeDesc">
          <h1>{{ this.singleRecipe.title }}</h1>
          {{ this.singleRecipe.description }} <br />

          <div v-if="!singleRecipe">No recipe found!</div>

          <div v-else class="recipeInfo">
            <display-star-rating :recipe="recipe"></display-star-rating> |
            {{ this.singleRecipe.ingredients.length }} INGREDIENSER |
            {{ this.singleRecipe.timeInMins }} MINUTER
          </div>
        </div>
        <img
          class="recipeImage"
          :src="singleRecipe.imageUrl"
          alt="recipeImage"
        />
      </div>
      <div class="line"></div>

      <div style="border-bottom: 1px solid white"></div>
      <div class="instructionsIngredients">
        <div class="ingredients">
          <b>Ingredienser:</b>
          <ul style="margin-left: -30px">
            <li
              v-for="ingredient in this.singleRecipe.ingredients"
              :key="ingredient.id"
            >
              - {{ ingredient.name }} {{ ingredient.amount }}
              {{ ingredient.unit }}
            </li>
          </ul>
        </div>
        <hr class="vertical" />
        <div v-if="!singleRecipe">No recipe found!</div>
        <div v-else class="instructions">
          <b>Gör så här:</b>
          <ul style="margin-left: -30px">
            <li
              v-for="instruction in this.singleRecipe.instructions"
              :key="instruction.id"
            >
              {{ instruction }}
            </li>
          </ul>
        </div>
      </div>
      <div class="line"></div>
      <br />
      <div class="rating">
        <b>Vad tyckte du om receptet?</b>
        <p>Klicka på en stjärna för att ge ditt betyg!</p>
        <post-rating :recipe="recipe"></post-rating>
      </div>
      <br />
      <div class="line"></div>
      <br />
      <div>
        <CommentSection />
      </div>
    </div>
  </div>
</template>

<style scoped>
.recipeRecipeContainer {
  display: flex;
  flex-direction: column;
  width: 1000px;
  align-items: center;
  margin-left: 10px;
  background-color: lightgrey;
  border-radius: 10px;
  border: ridge;
  border-color: black;
  font-family: "Courier New", Courier, monospace;
  margin-top: 10px;
  font-size: 18px;
}

li {
  margin-bottom: 10px;
}

h1 {
  margin-top: 0px;
}

.recipeImage {
  width: 250px;
  height: 250px;
  border-radius: 10px;
}

.recipeInfoBox {
  display: flex;
  flex-direction: row;
  padding: 20px;
  text-align: center;
}

.recipeDesc {
  text-align: center;
  padding-right: 20px;
  padding: 10px;
}

.recipeInfo {
  text-align: center;
  padding-right: 20px;
  font-weight: bold;
  margin-top: 40px;
}

.instructionsIngredients {
  display: flex;
  flex-direction: row;
  margin: 20px;
}

.ingredients {
  width: 300px;
}

.instructions {
  width: 600px;
}

.line {
  border-top: 2px ridge grey;
  width: 95%;
}

.vertical {
  margin: 20px;
}

.rating {
  text-align: center;
}

.checked {
  color: orange;
}
</style>
