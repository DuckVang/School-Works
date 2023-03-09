<script setup>
import { ref } from 'vue'
import Item from './components/Item.vue'
import useItemsStore from './stores/Items'

defineProps({
  msg: String,
})

const count = ref(0)
const items = useItemsStore().items
</script>

<template>
  <div class="products">
    <div v.v-for="(item, index) in items" :key="index">
      <Item ></Item>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
