<script>
export default {
  emits: ["messageChanged"],
  data() {
    return {
      message: "",
    };
  },
  methods: {
    changeMessage(event) {
      this.message = event.target.value;
      this.$emit("messageChanged", this.message);
    },
  },
};
</script>

<template>
  <input class="input" type="text" @input="changeMessage" placeholder=" Sök" />
</template>
<style scoped>
.input {
  width: 800px;
  height: 40px;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  background-color: lightgrey;
  border: ridge;
  border-radius: 10px;
  border-color: black;
}
</style>