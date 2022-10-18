
<script>
export default {
    props: ['listOfRecipes']
}

</script>
  
<template>

    <div class="recipeDisplay">

        <RouterLink to="/">
            <div class="listCard" v-for="recipe in listOfRecipes" :key="recipe">

                <img class="recipeImage" :src=recipe.imageUrl alt="recipeImage">

                <div>
                    <div class="recipeText">
                        <h1 class="recipeTitle">{{ recipe.title }} {{ recipe.avgRating }}</h1>
                        <p class="recipeDescription"> {{ recipe.description }} </p>
                        <p class="recipeIngredients">{{recipe.ingredients.length}} Ingredienser | {{recipe.timeInMins}}
                            Minuter</p>

                    </div>

                </div>

                <!-- <li v-for="category in recipe.categories">
                {{category}}
            </li> -->
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
    /* white-space: nowrap; */


}
</style>
  