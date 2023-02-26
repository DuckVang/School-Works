<script>


export default {
  props: {
    name: String,
    type: String

  },
  data() {

    return {


    }
  },
  methods: {
    sendMessage() {
      this.$emit("addMessage", { type: this.type, message: "Toto je testovací zpráva" })
    }

  }

}


</script>

<template>
  <button @click="sendMessage">
    <h2>{{ name }}</h2>
  </button>
</template>

<style scoped>
button {


  width: 120px;
  height: fit-content;

  border: 2px solid orange;

  background-color: rgb(219, 174, 3);

  padding: 20px;

  display: flex;
  text-align: center;
  justify-content: center;
}
button:active{
  background-color: rgba(210, 176, 3, 0.511);
}
h2{
  margin: 0;
  padding: 0;
}
</style>
