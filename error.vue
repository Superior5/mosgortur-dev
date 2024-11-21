<template>
  <NuxtLayout>
    <PagesError404 v-if="error.statusCode = 404"/>
  </NuxtLayout>
</template>

<script setup>
defineProps(['error']);
</script>