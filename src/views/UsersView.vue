<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const userId = ref('')

const route = useRoute()

userId.value = route.params.id
</script>
<template>
  <div>
    <h1>Users Page</h1>
    <p>Users ID (setup): {{ userId }}</p>
    <p>Users ID ($route): {{ $route.params.id }}</p>
  </div>
</template>
