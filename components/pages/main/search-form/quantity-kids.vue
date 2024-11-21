<template>
   <div class="flex gap-15px items-center select-none h-44px">
      <IconsMinus @click="minusKid" class="cursor-pointer" />
      <span class="w-20px text-center">{{ toursStore.quantityTourists[0].quantity }}</span>
      <IconsPlus @click="plusKid" class="cursor-pointer" />
   </div>
</template>
<script setup>
const toursStore = useToursStore()

const minusKid = () => {
   if (toursStore.quantityTourists[0].quantity > 1) toursStore.quantityTourists[0].quantity--
}

const plusKid = () => {
   if (toursStore.quantityTourists[0].quantity < 4) toursStore.quantityTourists[0].quantity++
}
</script>