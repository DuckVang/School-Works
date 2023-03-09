<script setup>
import defineProps from "vue";
defineProps({
  data: String,
});
</script>
<template>
  <div class="product">
    {{ data }}
  </div>
</template>
<style lang="scss"></style>
