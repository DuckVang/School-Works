<template >
    <div class="product-wrapper" v-for="order in orders" v-bind:key="order.name">
        <div class="product" v-if="order.visible">
            <h1>{{ order.name }}</h1>
            <h2>{{ order.price }}</h2>
            <div class="tags">
                <div class="tag" v-for="tag in order.tags" v-bind:key="tag">{{ tag }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductsList',
    props: {
        orders: []
    }

}
</script>

<style>
.product-wrapper {
    background-color: azure;
    display: flex;
}
</style>