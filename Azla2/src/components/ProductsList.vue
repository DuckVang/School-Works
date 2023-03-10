<script setup>
import { ref } from "vue";
import Product from "./Product.vue";
import {useItemsStore} from "../stores/Items.js";

defineProps({
  msg: String,
});

const count = ref(0);
const items = useItemsStore().items;
</script>

<template>
  <div class="products-list">
    <div v-for="(item, index) in items" :key="index">
      <Product :data="item"></Product>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
