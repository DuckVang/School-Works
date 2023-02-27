<script setup>
import { ref, reactive } from 'vue'
const data = reactive({
  net: [],
  isActive: false,
  position: [0, 0]
})
const startCatch = () => {
  if (data.isActive == true) return
  data.position = [Math.random() * 95, Math.random() * 95]
  data.isActive = true
  setInterval(() => {
    data.isActive = false
  }, 5000)
}
const addFish = () => {
  data.net.push(["Julia", "Romeo", "Hort", "Humal", "Lenert", "Dáthovský", "Wombter", "Chát"][Math.floor(Math.random() * 8)])
  data.isActive = false
}
</script>

<template>
  <button @click="startCatch"></button>
  <button class="catch" :class="{ active: data.isActive, inactive: !data.isActive }"
    :style="`left: ` + data.position[0] + `%; top: ` + data.position[1] + `%`" @click="addFish">Start</button>
  <div class="net" v-for="fish in data.net">
    <div class="fish"> {{ fish }}</div>
  </div>
</template>

<style scoped>
.net {

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 150px);

}

.catch {
  position: absolute;
}

.active {
  visibility: visible;
}

.inactive {
  visibility: hidden;
}
</style>
