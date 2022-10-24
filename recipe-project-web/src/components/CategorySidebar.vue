<script>
export default {
  data() {
    return {
      fetchedCategories: null,
    };
  },
  created() {
    fetch("https://jau21-grupp1-mn2l2rop49wl.sprinto.se/categories")
      .then((response) => response.json())
      .then((data) => (this.fetchedCategories = data))
      .catch((error) => console.log("Error: " + error));
  },
  /*  components: { SearchBar } */
};
</script>

<template>
  <div class="categoryContainer">
    <h1>Kategorier</h1>

    <h3 class="categoryTitle">
      <RouterLink class="allCategoriesLink" to="/">Alla Kategorier</RouterLink>
    </h3>

    <ul v-if="fetchedCategories">
      <li v-for="category in fetchedCategories">
        <h3 class="categoryTitle">
          <router-link
            class="categoryLink"
            :to="{ name: 'categories', params: { categoryId: category.name } }"
          >
            {{ category.name }}
            ({{ category.count }})</router-link
          >
        </h3>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.categoryContainer {
  background-color: lightgrey;
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
  text-align: center;
  width: 250px;
  border-style: ridge;
  border-color: black;
  height: 100vh;
  padding-left: 0px;
  margin-top: 10px;
  border-radius: 10px;
}

ul {
  padding-left: 0;
}

li {
  list-style: none;
}

/*  .allCategorieslink a{
    text-decoration: none;
    background-color: rgb(175, 199, 243);
    font-weight: lighter;
}  */

.categoryTitle {
  font-weight: lighter;
}

.categoryTitle a {
  text-decoration: none;
  color: black;
  font-weight: lighter;
}

.categoryTitle a:active {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.categoryTitle a:hover {
  /* background-color: rgb(216, 228, 248); */
  text-decoration: underline;
  font-weight: bold;
}

/* a.router-link-active {
    background-color: rgb(175, 199, 243);

} */

a.router-link-exact-active {
  font-weight: 600;
  font-size: 40;
}
</style>
