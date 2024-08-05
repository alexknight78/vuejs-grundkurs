<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div>
    <h2>{{ item.title }}({{ item.id }})</h2>
    <p>{{ item.body }}</p>
  </div>
</template>
