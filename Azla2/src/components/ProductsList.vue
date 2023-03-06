<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="products">
    <div v.v-for="(item, index) in items" :key="index">
      <Item></Item>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
