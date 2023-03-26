<script setup>
defineProps({
  data: Object,
});
</script>
<template>
  <div class="product">
    <img :src="data.imgUrl" :alt="data.name" />
    <div class="upper">
      <div class="name">
        <h2>{{ data.name }}</h2>
      </div>
      <div class="price">{{ data.price }}</div>
    </div>
    <div class="lower">{{ data.description }}</div>
  </div>
</template>
<style lang="scss">
.product {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    aspect-ratio: 1/1;
  }
  .upper {
    display: flex;
    justify-content: space-between;
    align-items: start;
    .name {
      h2 {
        font-size: 1.1rem;
        margin: 0;
      }
    }
    .price {
      font-size: large;
      font-weight: 500;

      &::after {
        content: ", -Kč";
      }
    }
  }
  .lower {
    font-size: 0.9rem;
    color: grey;
  }
}
</style>
