<script>
export default {
    props: ["recipe"],
    methods: {
        starRating(starIndex) {
            let averageRating = Math.round(this.recipe.avgRating);
            console.log(this.recipe)
            if (starIndex <= averageRating) {
                return true;
            } else if (starIndex > averageRating) {
                return false;
            }
        }
    },
}
</script>

<template>
    <span v-for="starIndex in [1, 2, 3, 4, 5]">
        <i v-if="starRating(starIndex)" class="fa fa-star checked"></i>
        <i v-if="!starRating(starIndex)" class="fa fa-star"></i>
    </span>
</template>


<style scoped>
.checked {
  color: orange;
}
</style>