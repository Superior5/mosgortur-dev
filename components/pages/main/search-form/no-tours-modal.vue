<template>
   <BlocksModal @close="$emit('close')"  classes="lg:(max-w-600px p-60px) md:(max-w-480px p-40px) p-30px">
      <div class="lg:text-40px text-26px text-center font-mulish font-thin leading-50px">
         😥 Извините, по Вашим параметрам ничего
не найдено
      </div>
   </BlocksModal>
</template>
<script setup>
const props = defineProps({
   field: String
})
</script>