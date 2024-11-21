<template>
   <div :class="filling ? 'text-white bg-regular-0' : 'text-regular-0 border-2 border-regular-0'"
      class="font-ptsans text-center font-bold py-2px px-9px rounded-[6px]">
      <slot />
   </div>
</template>
<script setup>
const props = defineProps({
   filling: {
      typeof: Boolean,
      default: true
   }
})
</script>