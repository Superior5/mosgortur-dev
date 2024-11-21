<template>
   <div class="w-full">
      <img src="@/assets/images/basket-tabs/1/extra-1.png" class="w-full" alt="">
      <div class="my-8px font-bold">{{ obj.name }}</div>
      <BlocksButton filling class="w-full md:text-16px text-14px">{{ obj.price }}</BlocksButton>
   </div>
</template>
<script setup>
const props = defineProps({
   obj: Object
})
</script>