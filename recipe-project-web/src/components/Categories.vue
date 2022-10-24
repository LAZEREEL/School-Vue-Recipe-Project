<script>
import RecipeList from "./RecipeList.vue";
export default {
  data() {
    return {
      categoryRecipes: null,
      selectedCategoryId: null,
    };
  },
  methods: {
    getCategories() {
      let url =
        "https://jau21-grupp1-mn2l2rop49wl.sprinto.se/categories/" +
        this.selectedCategoryId +
        "/recipes";
      console.log(url);
      console.log("nu körs fetch, categoryId:" + this.selectedCategoryId);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.categoryRecipes = data;
          console.log(data);
        })
        .catch((error) => console.log("Error: " + error));
    },
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        console.log("nu körs watchern");
        this.selectedCategoryId = toParams.categoryId;
        this.getCategories();
      },
      //Gör att category-routern ändras med nytt innehåll även första gången.
      { immediate: true }
    );
    // console.log("testar")
    // this.selectedCategoryId = this.$route.params.categoryId;
    // this.getCategories();
  },
  components: { RecipeList },
};
</script>

<template>
  <div>
    <div class="categoryRecipeContainer">
      <RecipeList :list-of-recipes="categoryRecipes" />
    </div>
  </div>
</template>

<style scoped>
.categoryRecipeContainer {
  display: flex;
  flex-direction: row;
}
</style>
