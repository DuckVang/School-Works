<template>

  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <MainMenu></MainMenu>
</template>

<script>
import MainMenu from "./components/MainMenu.vue"

export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<style>
body {
  display: flex;
  justify-content: center;
  flex-direction: column;
 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>
