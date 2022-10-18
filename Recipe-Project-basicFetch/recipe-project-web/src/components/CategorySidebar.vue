<script>
export default {
    data() {
        return {
            fetchedCategories: null,

        }
    },
    created() {
        fetch("https://jau21-grupp1-mn2l2rop49wl.sprinto.se/categories")
            .then(response => response.json())
            .then(data => this.fetchedCategories = data)
            .catch(error => console.log("Error: " + error));
    },

}
</script>

<template>

    <div class="categoryContainer">

        <h1>Kategorier</h1>

        <h3>
            <RouterLink to="/">Visa alla Kategorier</RouterLink>
        </h3>

        <ul v-if="fetchedCategories">
            <li v-for="category in fetchedCategories">

                <h3 class="categoryTitle">
                    <router-link :to="{name: 'categories', params: {categoryId: category.name}}">{{category.name}}
                        ({{category.count}})</router-link>
                </h3>

            </li>

        </ul>
    </div>
</template>

<style>

.categoryContainer {
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
    text-align: center;
    width: 200px;
    border-style: ridge;
    height: 100vh;
    padding-left: 0px;
}

ul {
    padding-left: 0;
}

.categoryTitle {
    text-decoration: none;
    
}

.categoryTitle:hover {
    background-color: red;
    text-decoration: none;
    cursor: pointer;
}

.categoryTitle:active {
    font-weight: bold;
    text-decoration: none;
}
</style> 