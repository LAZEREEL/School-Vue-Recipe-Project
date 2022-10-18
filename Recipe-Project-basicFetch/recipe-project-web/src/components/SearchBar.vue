<script>
export default {
    props: ['searchBarListOfRecipes'],
    data() {
        return {
            searchBarInput: null,
        }
    },
    computed: {
        filteredListOfRecipes() {

            let parsedRecipes = JSON.parse(JSON.stringify(this.searchBarListOfRecipes))
            console.log(parsedRecipes);
            let filteredRecipes = [];

            for (let recipe in parsedRecipes) {
   
                console.log(recipe)
                filteredRecipes.push(recipe)
            }

            console.log(filteredRecipes)

            return filteredRecipes;
        }
    }
}
</script>

<template>

    <input v-model="searchBarInput" placeholder="edit me" />

    <li v-for="recipe in filteredListOfRecipes" :key="recipe">
        {{ recipe.title }}
        {{ recipe.avgRating }}
    </li>
</template>