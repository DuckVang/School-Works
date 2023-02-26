<script >
import Logger from './components/Logger.vue';

export default {

  components: {
    Logger
  },

  data() {

    return {
      messages: []



    }

  },
  methods: {
    addMessage(message) {
      this.messages.push(message)
    }
  }

}
</script>

<template>
  <div class="wrapper">
    <header>
      <Logger name="Varování" type="warn" @addMessage="addMessage" />
      <Logger name="Informace" type="info" @addMessage="addMessage" />
      <Logger name="Error" type="error" @addMessage="addMessage" />
    </header>
    <main>

      <p v-for="message in messages" :key="messages.length"><b> {{ message.type }}</b>: {{ message.message }}</p>

    </main>
  </div>
</template>

<style scoped >
header {

  display: flex;
  justify-content: space-between;
  width: 100%;
}


main {
  margin-top: 10px;
  text-align: left;
  border: black solid 1px;
  height: 100%;

  overflow: scroll;
  padding: 20px;
  width: 100%;
  background-color: rgb(207, 228, 235);
  border: 2px solid cadetblue;
}
main>p {
  margin: 2px;
  padding: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 40vw;

}
</style>
