<script setup>
import { defineStore } from "pinia";

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
</script>
