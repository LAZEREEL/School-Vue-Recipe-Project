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

            // return this.searchBarInput
            let parsedRecipes = JSON.parse(JSON.stringify(this.searchBarListOfRecipes))
            console.log(parsedRecipes);
            let filteredRecipes = [];

            for (let recipe in parsedRecipes) {
                // if(recipe.title == this.searchBarInput){
                //     this.filteredRecipes.push(recipe)
                // }
                console.log(recipe)
                filteredRecipes.push(recipe)
            }

            console.log(filteredRecipes)

            return filteredRecipes;

            // this.searchBarListOfRecipes.filter(function (recipe) {
            //     return recipe.toLowerCase().includes(this.searchBarInput.value.toLowerCase())
            // });


        }
    }
}
</script>

<template>
    <!-- <input type="text" v-model="input" placeholder="Search..." /> -->

    <!-- <p>Message is: {{ filteredListOfRecipes }}</p> -->
    <input v-model="searchBarInput" placeholder="edit me" />

    <li v-for="recipe in filteredListOfRecipes" :key="recipe">
        {{ recipe.title }}
        {{ recipe.avgRating }}

    <!-- <li v-for="category in recipe.categories">
        {{category}}
        
    </li> -->
    <!-- <img :src=recipe.imageUrl alt="recipeImage" width="200"> -->
    </li>

    <!-- <div class="item error" v-if="input&&!filteredList().length">
        <p>No results found!</p>
    </div> -->
</template>