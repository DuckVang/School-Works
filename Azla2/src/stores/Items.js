
import { ref } from "vue";
import { defineStore } from "pinia";
export const useItemsStore = defineStore("items", () => {
  const items = ref([]);
  function addItem(params) {
    items.value.push(params);
  }
  return {
    items,
    addItem,
  };
});

