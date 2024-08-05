<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

import SingleProduct from '../components/SingleProduct.vue'

const products = ref([])

const getProducts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  products.value = await response.json()
}

onMounted(() => {
  getProducts()
})
</script>

<template>
  <div>
    <h1>Products Page</h1>
    <div>
      <div style="width: 50%; float: left" v-for="product in products" :key="product.id">
        <SingleProduct :item="product"></SingleProduct>
        <RouterLink :to="`/product/${product.id}`">Link</RouterLink>
      </div>
    </div>
  </div>
</template>
