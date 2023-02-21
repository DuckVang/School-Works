


<template>

    <button class="tag" v-for="tag in tags" v-bind:key="tag" @click="filter(orders,tag)">
        {{ tag }}
    </button>

</template>

<script>

function filter(orders,tag) {
    
    orders.map((order) => {
        if(order.tags.includes(tag)) order.visible = true
        else order.visible = false
    })
    console.table(orders)
    

}

export default {
    name: 'FilterButtons',
    props: {
        tags: [],
        orders: []

    },
    methods:{
        filter
    }
    
}
</script>


<style>

button.tag{

  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

}

</style>