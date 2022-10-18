<script>
/* import RecipeList from "./RecipeList.vue"; */
export default {
    data() {
        return {
            categoryRecipes: null,
            recipeId: this.$route.params.recipeId
        };
    },
    created() {
        fetch("https://jau21-grupp1-mn2l2rop49wl.sprinto.se/recipes/" + this.recipeId)
            .then(response => response.json())
            .then(data => this.categoryRecipes = data)
            .catch(error => console.log("Error: " + error));
    },
    components: { RecipeList }
}
</script>

<template>

    <div class="categoryRecipeContainer">
        
        <RecipeList :list-of-recipes="categoryRecipes" />

    </div>

</template>

<style>

 .categoryRecipeContainer {
    display: flex;
    flex-direction: row;

} 

</style>




