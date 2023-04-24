<script setup>
import { onMounted } from "vue";
import { useDateStore } from "../stores/date.js";
import { usePlaygroundStore } from "../stores/playground.js";
import { ref } from "vue";

const dateStore = useDateStore();
const playgroundStore = usePlaygroundStore();

const text = ref("")
const selectedUser = ref(undefined)

onMounted(() => {
  dateStore.load();
  playgroundStore.load();
});
function Send(){
console.log(text.value)
playgroundStore.create(text.value.toString())
}
</script>
<template>
  <main>
    <div class="list" v-if="playgroundStore.playgrounds">
      <p v-for="object in playgroundStore.playgrounds">
        from {{ object.user }}: {{ object.data ? object.data : "nothing" }}
      </p>
    </div>
    <input type="text" v-model="text">
    <button @click="Send">send</button>
    <input type="text" v-model="selectedUser" placeholder="some user id">
    <button>delete by user id</button>
  </main>
</template>
<style>
.list {
  width: 100vw;
  height: 500px;
  overflow: scroll;
}
</style>
