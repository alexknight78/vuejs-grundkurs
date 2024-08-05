<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

import SingleProduct from '../components/SingleProduct.vue'

const loading = ref(true)
const productId = ref('')
const product = ref([])
const route = useRoute()
productId.value = route.params.id

const getProduct = async () => {
  console.log(productId.value)
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=1&id=${productId.value}`
  )
  product.value = await response.json()
  loading.value = false
}

onMounted(() => {
  getProduct()
})
</script>
<template>
  <div>
    <h1>Product Page</h1>
    <div v-if="!loading">
      <SingleProduct :item="product[0]"></SingleProduct>
    </div>
    <div v-else>wird geladen ...</div>
  </div>
</template>
