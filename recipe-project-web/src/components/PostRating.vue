<script>
export default {
    props: ["recipe"],
    data() {
        return {
            hasPostedRating: false,
            hover1: false,
            hover2: false,
            hover3: false,
            hover4: false,
            hover5: false,
        };
    },
    methods: {
        postRating(starIndex) {
            console.log(starIndex)
            fetch('https://jau21-grupp1-mn2l2rop49wl.sprinto.se/recipes/' + this.recipe._id + '/ratings', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    rating: starIndex,
                })
            })
                .catch((error) => {
                    console.error('Error:', error);
                });

            this.hasPostedRating = true;
        },
    },
}
</script>

<template>
    <div v-if="!hasPostedRating" class="allStarsContainer">
        <!-- <span class="starContainer" v-for="starIndex in [1, 2, 3, 4, 5]" @click="postRating(starIndex)">
            @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }">
            <i class="fa fa-star fa-4x"></i>
        </span> -->
        <i class="fa fa-star fa-4x" @click="postRating(1)" @mouseover="hover1 = true" @mouseleave="hover1 = false" :class="{ active: hover1 }"></i>
        <i class="fa fa-star fa-4x" @click="postRating(2)" @mouseover="hover2 = true" @mouseleave="hover2 = false" :class="{ active: hover2 }"></i>
        <i class="fa fa-star fa-4x" @click="postRating(3)" @mouseover="hover3 = true" @mouseleave="hover3 = false" :class="{ active: hover3 }"></i>
        <i class="fa fa-star fa-4x" @click="postRating(4)" @mouseover="hover4 = true" @mouseleave="hover4 = false" :class="{ active: hover4 }"></i>
        <i class="fa fa-star fa-4x" @click="postRating(5)" @mouseover="hover5 = true" @mouseleave="hover5 = false" :class="{ active: hover5 }"></i>
    </div>
    <h2 v-else>Tack för ditt betyg!</h2>
</template>


<style scoped>
.active {
    color: orange;
}
</style>