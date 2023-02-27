<script setup>
import { ref, reactive } from 'vue'
const data = reactive({
  posts: [],
  title: "",
  content: ""

})

const addPost = (title, content) => {
  title.trim()
  content.trim()
  if (!title || !content) return
  data.posts.push({ title: title, content: content })
}


</script>

<template>
  <div class="post" v-for="post in data.posts">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </div>

  <input type="text" v-model="title" placeholder="title">
  <input type="text" v-model="content" placeholder="content">

  <button @click="addPost(title, content)"></button>
</template>

<style scoped></style>
