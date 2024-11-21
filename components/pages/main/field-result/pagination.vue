<template>
  <!-- <div class="pagination">
    <div @click="$emit('nextPage', actPage - 1)" :class="{ disabled: actPage == 1 }">
      <IconsSliderArrow class="transform rotate-180" />
    </div>
    <span @click="$emit('nextPage', page)" v-for="page in pages" :key="page" :class="{ 'bg-rarely-4': actPage == page }">
      {{ page }}
    </span>
    <div @click="$emit('nextPage', actPage + 1)" :class="{ disabled: actPage == pages }">
      <IconsSliderArrow />
    </div>
  </div> -->
  <BlocksButton @click="$emit('nextPage', actPage + 1)" class="w-full">Показать еще</BlocksButton>
</template>
<script setup>
const props = defineProps({
  pages: Number,
  actPage: Number,
});
</script>
<style scoped>
.pagination {
  @apply flex gap-5px transition-all items-center h-54px children:(w-54px h-full cursor-pointer flex items-center justify-center);
}

.pagination>*:hover {
  @apply bg-rarely-4;
}

.pagination .disabled {
  @apply opacity-40 cursor-not-allowed;
}
</style>