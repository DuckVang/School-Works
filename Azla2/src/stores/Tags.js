
import { defineStore } from "pinia";
import { ref } from "vue";
export const useTagsStore = defineStore("tags", () => {
  const tags = ref(["tag1", "tag2", "tag3", "tag4", "tag5"]);
  function addTags(params) {
    items.value.push(params);
  }
  return {
    tags,
    addTags,
  };
});

