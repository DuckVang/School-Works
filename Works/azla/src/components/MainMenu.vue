<script>
import ProductsList from './Products.vue'

import FilterButtons from './FilterButtons.vue'
class Order {
    constructor(name, price) {
        this.name = name
        this.price = price
        this.visible = true
    }
    AddTags(...tags) {
        this.tags = tags

    }

}
const ORDERS = []

let mikasa = new Order("Mikasa bodypillow", 1000)
let asuna = new Order("Asuna bodypillow", 1000)
let chocola = new Order("Chocola bodypillow", 1000)

mikasa.AddTags("body-pillow", "AOT")
asuna.AddTags("body-pillow", "SAO")
chocola.AddTags("body-pillow", "Nekopara")

ORDERS.push(mikasa, asuna, chocola)
console.log(mikasa)

export default {
    data() {
        return {
            ORDERS: ORDERS,
            tags: ["body-pillow", "SAO", "AOT"]
        }
    },
    name: "MainMenu",
    components: {
        ProductsList,
        FilterButtons
    }

}
</script>


<template>

    <div class="filters">
        <FilterButtons :tags="tags" :orders="ORDERS"></FilterButtons>
    </div>

    <main>
        <ProductsList :orders="ORDERS"></ProductsList>
    </main>

</template>

<style>
.filters {

    display: flex;
    gap: 10px;
    justify-content: center;
}
</style>