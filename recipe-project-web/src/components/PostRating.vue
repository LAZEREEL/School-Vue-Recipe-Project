<script>
export default {
    props: ["recipe"],
    methods: {
        postRating(starIndex) {
            console.log(this.recipe)
            console.log(starIndex)
        //     fetch('https://jau21-grupp1-mn2l2rop49wl.sprinto.se/recipes/' + this.recipe._id + "/ratings", {
        //         method: 'POST',
        //         rating: starIndex,
        //     })
        //         .then((response) => response.json())
        //         .then((result) => {
        //             console.log('Success:', result);
        //         })
        //         .catch((error) => {
        //             console.error('Error:', error);
        //         });
        // }
    },
}
</script>

<template>
    <div class="allStarsContainer">
        <span class="starContainer" v-for="starIndex in [1, 2, 3, 4, 5]" @click="postRating(starIndex)">
            <i class="fa fa-star"></i>
        </span>
    </div>
</template>


<style scoped>
.allStarsContainer {
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    /* width: 200px;
    height: 200px; */
}

.fa-star {
    font-size: xx-large;
}
</style>