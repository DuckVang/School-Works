<script setup>
import { ref } from "vue";
import ProductsList from "./ProductsList.vue";
import TagsList from "./TagsList.vue";
defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="main-page">
    <header>
      <h1>AZLA</h1>
      <nav>
        <button>Domů</button>
        <button>Přidání</button>
      </nav>
    </header>
    <div class="h-line" />
    <main>
      <h1>Azla dobrá!</h1>
      <sub
        >Azla je nejlepší prodejce náhodných věcí na světě! &mdash; to je otevřeno tisíce
        kočkami</sub
      >
      <TagsList />
      <ProductsList />
    </main>
  </div>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  margin: 0.5rem auto;
  nav {
    display: flex;
    gap: 10px;
    button {
      border: none;
    }
  }
}
.main-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  .h-line {
    width: 100vw;
    height: 3px;
    background-color: black;
  }
  main {
    height: 100%;
    width: 70vw;
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    gap: 1rem;
    h1 {
      margin: 0;
      font-size: 3rem;
      font-family: "Dancing Script";
    }
    sub {
      font-size: 1rem;
      font-weight: 100;
    }

  }
}
</style>
