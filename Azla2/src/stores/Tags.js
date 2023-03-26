import { defineStore } from "pinia";
import { ref } from "vue";
import { reactive } from "vue";
export const useTagsStore = defineStore("tags", () => {
  const tags = ref([  "Body pillow", "Figurine", "Life size", "For schizophrenia", "Cat girl", "Gundam", "Nekopara", "Doki Doki"]);
  const selectedTags = ref([]);
  function addTags(params) {
    items.value.push(params);
  }
 
  return {
    tags,
    selectedTags,
    addTags,
  };
});
