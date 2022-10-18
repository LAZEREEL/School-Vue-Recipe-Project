<script>
import RecipeList from "./RecipeList.vue";
export default {
    data() {
        return {
            recipesData: null,
        };
    },
    created() {

        fetch("https://jau21-grupp1-mn2l2rop49wl.sprinto.se/recipes")
            .then(response => response.json())
            .then(data => this.recipesData = data)
            .catch(error => console.log("Error: " + error));
    },
    components: { RecipeList }
}
</script>

<template>

<RecipeList :list-of-recipes="recipesData" />

</template>

