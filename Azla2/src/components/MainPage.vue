<script setup>
import { ref } from 'vue'
import ProductList from './components/ProductList.vue'
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <ProductList>
  
</template>

<style  scoped lang="scss">


</style>
