<template>
   <span
      class="min-w-30px font-bold text-16px h-30px border-1 border-rarely-1 flex items-center justify-center rounded-1/2">
      {{ num }}
   </span>
</template>
<script setup>
const props = defineProps({
   num: Number || String
})
</script>