<script>


export default {
  props: {
    name: String

  },
  data() {

    return {


    }
  },
  methods: {
    sendMessage() {
      this.$emit("addMessage", { name: this.name, message: "This is message from " + this.name })
    }

  }

}


</script>

<template>
  <button @click="sendMessage">{{ name }}</button>
</template>

<style scoped></style>
