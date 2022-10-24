<script>
export default {
    emits: ["messageChanged"],
    data() {
        return {
            message: '',
        }
    },
    methods: {
        changeMessage(event) {
            this.message = event.target.value;
            this.$emit('messageChanged', this.message);
        }
    }
}
</script>

<template>
    <input type="text" @input="changeMessage" placeholder="Search"/>
</template>