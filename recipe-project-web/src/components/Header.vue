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
};
</script>

<template>
  <div class="header">
    <RouterLink to="/" style="text-decoration: none"
      ><h1>Drinkomania</h1></RouterLink
    >

    <!-- <ul v-if="fetchedCategories">
            <li v-for="category in fetchedCategories">
                <h3 class="categoryTitle">
                    <router-link class="categoryLink" :to="{name: 'categories', params: {categoryId: category.name}} ">
                        {{category.name}}
                </h3>

            </li>

        </ul>
 -->
  </div>
</template>

<style scoped>
.header {
  width: auto;
  height: 90px;
  font-size: 40px;
  text-align: center;
}
.header h1 {
  color: antiquewhite;
  margin-top: 0%;
  font-family: 'Courier New', Courier, monospace;
}
</style>
