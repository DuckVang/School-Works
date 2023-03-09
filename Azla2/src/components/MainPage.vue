<script setup>
import { ref } from 'vue'
import ProductsList from './ProductsList.vue'
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <ProductsList />

</template>

<style  scoped lang="scss">


</style>
