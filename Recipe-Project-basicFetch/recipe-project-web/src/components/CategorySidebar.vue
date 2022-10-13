<script>
/* import { RouterLink, RouterView } from 'vue-router' */
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
    }
}
</script>

<template>

    <!-- en kommentar -->
    <div class="categoryContainer">

        <h1>Kategorier</h1>

        <ul v-if="fetchedCategories">
            <li v-for="category in fetchedCategories">


                <!-- Sätta onclick på dessa?? -->
                <h3>{{category.name}} ({{category.count}})</h3>

            </li>

        </ul>
    </div>
</template>

<style>
.categoryContainer {
    text-align: center;
    width: 200px;
    border-style: ridge;
    height: 100vh;
    padding-left: 0px;

}

ul {
    padding-left: 0;
}


</style> 