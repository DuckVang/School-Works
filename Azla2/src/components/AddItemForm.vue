<script setup>
import { reactive } from "vue";
import {useTagsStore} from "../stores/Tags";


const tags = useTagsStore().tags;
const data = reactive({
  name: "",
  price: "",
  description: "",
  selected: [],
});
function handleClick() {
  console.log(data);
}


</script>

<template>
  <div>
    <input v-model="data.name" placeholder="name" />
    <input v-model="data.price" placeholder="price" />
    <input v-model="data.description" placeholder="description..." />
    <select v-model="data.selected" multiple>
      <option v-for="tag in tags">{{ tag }}</option>
    </select>
    <button @click="handleClick()">Add</button>
  </div>
</template>

<style scoped lang="scss"></style>
