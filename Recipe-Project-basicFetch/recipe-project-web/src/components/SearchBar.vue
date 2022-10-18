<script>
export default {
    props: ['searchBarListOfRecipes'],
    data() {
        return {
            searchBarInput: null,
        }
    },
    methods: {
        filteredListOfRecipes() {
            return this.searchBarListOfRecipes.filter(recipe => recipe.title.toLowerCase().includes(this.searchBarInput.toLowerCase()));
        }
    }
}
</script>

<template>

    <input type="text" v-model="searchBarInput" placeholder="Search" />
    <button type="button" @click="filteredListOfRecipes">Search</button>

    <!-- <ul>
        <li v-for="recipe in filteredListOfRecipes" :key="recipe">
            {{ recipe.title }}
            {{ recipe.description.substring(0, 50) + '...' }}
            {{ recipe.avgRating }}
        <li v-for="category in recipe.categories">
            {{category}}
        </li>
        <img :src=recipe.imageUrl alt="recipeImage" width="200">
        </li>
    </ul> -->
    <!-- <div class="item error" v-if="input&&!filteredList().length">
        <p>No results found!</p>
    </div> -->
</template>