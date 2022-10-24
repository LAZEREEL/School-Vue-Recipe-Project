
<script>
export default {
    props: ['listOfRecipes'],
    components: { SearchBar },
    data() {
        return {
            message: '',
        }
    },
    methods: {
        filteredListOfRecipes() {
            if (this.message === "") {
                return this.listOfRecipes
            } else {
                return this.listOfRecipes.filter(recipe => recipe.title.toLowerCase().includes(this.message.toLowerCase()));
            }
        }
    }
}

</script>
  
<template>

    <search-bar @messageChanged="message = $event"></search-bar>

    <div class="recipeDisplay">

        <RouterLink to="/">
            <div class="listCard" v-for="recipe in filteredListOfRecipes()" :key="recipe">

                <img class="recipeImage" :src=recipe.imageUrl alt="recipeImage">

                <div>
                    <div class="recipeText">
                        <h1 class="recipeTitle">{{ recipe.title }} {{ recipe.avgRating }}</h1>
                        <p class="recipeDescription"> {{ recipe.description.substring(0, 50) + '...' }} </p>
                        <p class="recipeIngredients">{{recipe.ingredients.length}} Ingredienser | {{recipe.timeInMins}}
                            Minuter</p>

                    </div>

                </div>
            </div>

        </RouterLink>

    </div>

</template>
  
<style >
li {
    list-style: none;
}


.categorySidebar {
    width: auto;
    padding-right: 20px;
    font-family: 'Courier New', Courier, monospace;
}

.listCard {
    display: flex;
    flex-direction: row;
    height: 200px;
    width: 400px;

    background-color: lightgray;
    border: solid;
    margin: 10px;
}

.recipeDisplay {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    padding-bottom: 10px;
}

.recipeDescription {
    flex-direction: column;
    display: flex;
}

.recipeTitle {
    margin: 2px;
    text-align: left;
}


.recipeImage {
    width: 200px;
    height: 200px;
}

.recipeText {
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: hidden;
    margin-bottom: 5px;
}
</style>
  