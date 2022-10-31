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

    methods: {
        commentFailed() {
            var inputFieldContainer = document.querySelector('#inputFieldContainer')
            var sendingCommentHeader = document.querySelector('#sendingCommentHeader')
            var failToCommentHeader = document.querySelector('#failToCommentHeader')
            console.log('commentFailed körs')
            sendingCommentHeader.style.display = 'none';
            inputFieldContainer.style.display = 'block';
            failToCommentHeader.style.display = 'block';
        },

        successPostingComment() {
            var inputFieldContainer = document.querySelector('#inputFieldContainer')
            var sendingCommentHeader = document.querySelector('#sendingCommentHeader')
            var succesfullyCommentedHeader = document.querySelector('#succesfullyCommentedHeader')
            inputFieldContainer.style.display = 'none';
            sendingCommentHeader.style.display = 'none';
            succesfullyCommentedHeader.style.display = 'block';
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
        delay(time) {

            return new Promise(resolve => setTimeout(resolve, time));

        },

        postCommentMethod() {

            console.log('Posting comment..')
            console.log('ID:' + this.selectedRecipeIdTwo)
            console.log('Name:' + this.name)
            console.log('Comment:' + this.comment)

            var inputFieldContainer = document.querySelector('#inputFieldContainer')
            var sendingCommentHeader = document.querySelector('#sendingCommentHeader')
            var leaveCommentHeader = document.querySelector('#leaveCommentHeader')
            var failToCommentHeader = document.querySelector('#failToCommentHeader')

            inputFieldContainer.style.display = 'none';
            sendingCommentHeader.style.display = 'block';
            leaveCommentHeader.style.display = 'none';
            failToCommentHeader.style.display = 'none';

            if (this.selectedRecipeIdTwo == undefined) {
                this.commentFailed();
                console.log('Failed: No ID!')
            } else if (this.comment == '') {
                this.commentFailed();
                console.log('Failed: Empty Comment Field!')
            } else {
                console.log('Missing name! Posting as Anonymous!')
                if (this.name == '') {
                    this.name = 'Anonym';
                }
                
                console.log('Delaying!')
                this.delay(1000).then((()=> this.postFetch()  ));
            }


        },

        postFetch() {
            fetch("https://jau21-grupp1-mn2l2rop49wl.sprinto.se/recipes/" + this.selectedRecipeIdTwo + "/comments", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
                body: JSON.stringify({ comment: this.comment, name: this.name })
            }
            )
                .then(response => response.json())
                .then(data => {
                    this.postComment = data

                    console.log('Success posting, updating comments and running successful-post-method')

                    this.getCommentsMethod();
                    this.successPostingComment();
                    this.playAudio();

                })
                .catch(error => console.log("Error: " + error));
        },

        playAudio() {
            new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_17cba0354b.mp3").play();
        }

    }
}
</script>

<template>
    <div v-if="!comments">No comments from recipe found</div>

    <h2 id="leaveCommentHeader">Lämna en Kommentar</h2>
    <h2 id="sendingCommentHeader">Din kommentar skickas</h2>
    <h2 id="failToCommentHeader">Din kommentar skickades inte.</h2>
    <h2 id="succesfullyCommentedHeader">Tack för din Kommentar</h2>

    <div id="inputFieldContainer">
        <input id='comment' placeholder='Lämna din Kommentar här' name='comment' v-model='comment' />
        <input id='name' placeholder='Ditt namn' name='name' v-model='name' />

        <button v-if="selectedRecipeIdTwo" @click="postCommentMethod">Skicka</button>

    </div>

    <div v-for="commentLocal in comments">

        <h1>{{ commentLocal.comment }}</h1>
        <h2>Skickat av: {{ commentLocal.name }}</h2>
        <h3>Skickat: {{ commentLocal.createdAt.substring(0, 10) }} {{ commentLocal.createdAt.substring(11, 16) }}</h3>

    </div>

</template>

<style>
#succesfullyCommentedHeader {
    display: none;
}

#sendingCommentHeader {
    display: none;
}

#failToCommentHeader {
    display: none;
}
</style>