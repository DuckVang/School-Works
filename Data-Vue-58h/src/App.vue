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
  <header>
    <Logger name="Varování" @addMessage="addMessage" />
    <Logger name="Informace" @addMessage="addMessage" />
    <Logger name="Error" @addMessage="addMessage" />
  </header>
  <main>

    <p v-for="message in messages" :key="messages.length">{{ message.name }}: {{ message.message }}</p>

  </main>
</template>

<style scoped>

header{

  display: flex;
  justify-content: space-between;

}
main {
  margin-top: 10px;
  text-align: left;
  border: black solid 1px;
  height: 75vh;
  width: 25vw;
  overflow: scroll;
  padding: 20px;
;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
