<script setup>
import { ref } from "vue";
import Product from "./Product.vue";
import { useItemsStore } from "../stores/Items.js";
import { useTagsStore } from "../stores/Tags";
import { computed } from "@vue/reactivity";
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { toRaw } from "vue";


defineProps({
  msg: String,
});

const count = ref(0);
const itemStore = useItemsStore();

const tagStore = useTagsStore();
//když se hodnota změní v storu tak se hodnota změní i tady
const { selectedTags } = storeToRefs(useTagsStore());
const filtered = ref([]);

watch(selectedTags, () => {
  filtered.value = toRaw(itemStore.items).filter((item) => {
    let select = toRaw(selectedTags.value);
 
    return select.includes(...item.tags);
  });
});
</script>

<template>
  <div class="products-list">
    <Product v-for="(item, index) in filtered" :key="index" :data="item"></Product>
  </div>
  {{ filtered }}
  {{ count }}
</template>

<style scoped lang="scss">
.products-list {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  margin-top: 20px;
}
@media only screen and (max-width: 1000px) {
  .products-list {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 600px) {
  .products-list {
    grid-template-columns: 1fr;
  }
}
</style>
