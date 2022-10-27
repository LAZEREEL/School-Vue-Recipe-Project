<script>
export default {
    data() {
        return {
            postComment: null,
            comments: [],
            selectedRecipeIdOne: null,
            selectedRecipeIdTwo: null,
            comment: '',
            name: '',
            urlPathName: '',

        };
    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log('nu körs watchern i AllCommentsForRecipe.vue');
                this.selectedRecipeIdOne = toParams.recipeId;
                this.selectedRecipeIdTwo = toParams.recipeId;
                // console.log('this.selectedRecipeId är: ' + this.selectedRecipeId)
            },
            //Gör att recipeId-routern ändras med nytt innehåll även första gången.
            { immediate: true }
        );
        this.getCommentsMethod();
    },
    mounted() {
    },
    methods: {
        getCommentsMethod() {
            // console.log('utskrift this.selectedRecipeId ' + this.selectedRecipeId);
            fetch("https://jau21-grupp1-mn2l2rop49wl.sprinto.se/recipes/" + this.selectedRecipeIdOne + "/comments")
                .then(response => response.json())
                .then(data => {
                    this.comments = data
                    this.comments.reverse();
                })
                .catch(error => console.log("Error: " + error));
            return this.comments;
        },
        postCommentMethod() {
            console.log('nu körs postComment')
            console.log(this.comment)
            console.log(this.name)
            fetch("https://jau21-grupp1-mn2l2rop49wl.sprinto.se/recipes/" + this.selectedRecipeIdTwo + "/comments", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
                body: JSON.stringify({ comment: this.comment, name: this.name })
            }
            )
                .then(response => response.json())
                .then(data => {
                    this.postComment = data
                    console.log('här är data i Comments.vue fetch post: ' + data)
                })
                .catch(error => console.log("Error: " + error));
        }
    }
}
</script>

<template>
    <div v-if="!this.comments">No comments from recipe found</div>

    <div class="container">
        <h2>Lämna en Kommentar</h2>
        <form>
            <div class="btn">
            <input id='comment' placeholder='Lämna din Kommentar här' name='comment' v-model='comment' />
            <input id='name' placeholder='Ditt namn' name='name' v-model='name' />
            
                <button v-if="this.selectedRecipeIdTwo" @click="postCommentMethod()">Skicka</button>
                <button>Avbryt</button>
            </div>
        </form>
    </div>

    <div v-for="commentLocal in comments">

        <h1>{{ commentLocal.comment }}</h1>
        <h2>Skickat av: {{ commentLocal.name }}</h2>
        <h3>Skickat: {{ commentLocal.createdAt }}</h3>
        <h3>Senast Uppdaterad: {{ commentLocal.updatedAt }}</h3>
    </div>

</template>

<style>

</style>