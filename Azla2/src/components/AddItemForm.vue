<script setup>
import { reactive, toRaw } from "vue";
import { useTagsStore } from "../stores/Tags";
import { useItemsStore } from "../stores/Items";

let isOpened = false;

const tags = useTagsStore().tags;
const items = useItemsStore();
const data = reactive({
  name: "",
  price: "",
  description: "",
  selected: [],
});
function handleClick() {
  const obj = toRaw(data);
  items.addItem({ ...obj });
}
function close(){

}
</script>

<template>
  <div class="add-form" :v-if="isOpened">
    <input v-model="data.name" placeholder="name" />
    <input v-model="data.price" placeholder="price" />
    <input v-model="data.description" placeholder="description..." />
    <select v-model="data.selected" multiple>
      <option :v-for="tag in tags">{{ tag }}</option>
    </select>
    <button @click="handleClick()">Add</button>
  </div>
</template>

<style scoped lang="scss"></style>
