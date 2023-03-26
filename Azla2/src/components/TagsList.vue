<script setup>
import { ref } from "vue";
import Product from "./Product.vue";
import { useItemsStore } from "../stores/Items.js";
import { useTagsStore } from "../stores/Tags";

import { watch } from "vue";
import { storeToRefs } from "pinia";

defineProps({
  msg: String,
});

const count = ref(0);
const store = useTagsStore();
const tags = store.tags;
const {selectedTags} = storeToRefs(store)



console.log(selectedTags);
function handleClick() {}
</script>

<template>
  <div class="tags-list">
    <div v-for="(tag, index) in tags" class="tag">
      <input type="checkbox" :value="tag" v-model="selectedTags" />
      <label>{{ tag }}</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  .tag {
    position: relative;
    border: 2px solid black;
    padding: 1px 0.75rem;
  
    input {
      z-index: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }

    &:has([type="checkbox"]:checked) {
      background-color: green;
    }
  }
}
</style>
