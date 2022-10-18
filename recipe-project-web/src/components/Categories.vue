<script>
import RecipeList from "./RecipeList.vue";
export default {
    data() {
        return {
            categoryRecipes: null,
            categoryId: this.$route.params.categoryId
        };
    },
   created() {
        console.log("testar")
        fetch("https://jau21-grupp1-mn2l2rop49wl.sprinto.se/categories/" + this.categoryId + "/recipes")
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




