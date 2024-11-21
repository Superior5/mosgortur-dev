<template>
   <BlocksModal @close="$emit('close')">
      <div class="lg:(text-xl pt-0) text-lg pt-30px text-center">
         Задайте сначала поле <span class="font-bold">{{ field }}</span>
      </div>
   </BlocksModal>
</template>
<script setup>
const props = defineProps({
   field: String
})
</script>