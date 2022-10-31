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

            },
            //Gör att recipeId-routern ändras med nytt innehåll även första gången.
            { immediate: true }
        );
        this.getCommentsMethod();
    },
    mounted() {
        var btnSubmit = document.querySelector('.btnSubmit')
        var container = document.querySelector('#container')
        var postComment = document.querySelector('.postComment')
        var hideHeader = document.querySelector('.hideHeader')

        btnSubmit.onclick = function () {
            container.style.display = 'none';
            postComment.style.display = 'block';
            hideHeader.style.display = 'none';

        }

    },
    methods: {
        commentFailed() {
            var container = document.querySelector('#container')
            var postComment = document.querySelector('.postComment')
            var failToComment = document.querySelector('.failToComment')

            postComment.style.display = 'none';
            container.style.display = 'none';
            failToComment.style.display = 'block';
        },
 
        successPostingComment() {
            var container = document.querySelector('#container')
            var postComment = document.querySelector('.postComment')
            var successContainer = document.querySelector('.successContainer')
            container.style.display = 'none';
            postComment.style.display = 'none';
            successContainer.style.display = 'block';
        },
        getCommentsMethod() {
            console.log('Nu körs getCommentsMethod')
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

            console.log(this.selectedRecipeIdTwo)
            console.log(this.name)
            console.log(this.comment)

            if (this.selectedRecipeIdTwo == undefined) {
                
            } else if (this.comment == '') {
                
            }  else {

                if (this.name == '') {
                 this.name = 'Anonym';
            }

                fetch("https://jau21-grupp1-mn2l2rop49wl.sprinto.se/recipes/" + this.selectedRecipeIdTwo + "/comments", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
                    body: JSON.stringify({ comment: this.comment, name: this.name })
                }
                )
                    .then(response => response.json())
                    .then(data => {
                        this.postComment = data

                        console.log('Success.')
                        this.getCommentsMethod();
                        this.successPostingComment();
                        this.playAudio();
                        
                    })
                    .catch(error => console.log("Error: " + error));
            }

        },
        playAudio() {
            new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_17cba0354b.mp3").play();
        }

    }
}
</script>

<template>
    <div v-if="!this.comments">No comments from recipe found</div>

    <h2 class="hideHeader">Lämna en Kommentar</h2>
    <h2 class="postComment">Din kommentar skickas</h2>
    <h2 class="failToComment">Din kommentar skickades inte.</h2>
    <h2 class="successContainer">Tack för din Kommentar</h2>

    <div id="container">
            <input id='comment' placeholder='Lämna din Kommentar här' name='comment' v-model='comment' />
            <input id='name' placeholder='Ditt namn' name='name' v-model='name' />

            <div class="btnSubmit">
                <button v-if="this.selectedRecipeIdTwo" @click="postCommentMethod">Skicka</button>
            </div>
    </div>


    <div v-for="commentLocal in comments">

        <h1>{{ commentLocal.comment }}</h1>
        <h2>Skickat av: {{ commentLocal.name }}</h2>
        <h3>Skickat: {{ commentLocal.createdAt.substring(0, 10) }} {{ commentLocal.createdAt.substring(11, 16) }}</h3>

    </div>

</template>

<style>


.successContainer {
    display: none;
}

.postComment {
    display: none;
}

.failToComment {
    display: none;
}
</style>