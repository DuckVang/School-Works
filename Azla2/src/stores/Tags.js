
import { defineStore } from "pinia";
import { ref } from "vue";
export const useTagsStore = defineStore("tags", () => {
  const tags = ref([]);
  function addTags(params) {
    items.value.push(params);
  }
  return {
    tags,
    addTags,
  };
});

