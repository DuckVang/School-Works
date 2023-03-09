<script setup>
import AddItemForm from "./components/AddItemForm.vue";
import MainPage from "./components/MainPage.vue";
</script>

<template>
  <AddItemForm />
  <MainPage />
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#app > * {
  flex: 1;
}
</style>
