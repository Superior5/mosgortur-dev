<template>
   <div class="flex gap-12px items-center select-none h-auto children:(rounded-[5px])">
      <div @click="minusKid" class="cursor-pointer p-16px border-1 border-regular-0/80 text-regular-0/80 ">
         <IconsMinus />
      </div>
      <div class="w-full min-w-50px flex justify-center py-16px border-1 border-[#BDBDBD] text-[#BDBDBD]">
         <span class="text-center">{{ toursStore.quantityTourists[0].quantity }}</span>
      </div>
      <div @click="plusKid" class="cursor-pointer p-16px border-1 border-regular-0/80 text-regular-0/80 ">
         <IconsPlus />
      </div>
   </div>
</template>
<script setup>
const toursStore = useToursStore()

const minusKid = () => {
   if (toursStore.quantityTourists[0].quantity > 1) toursStore.quantityTourists[0].quantity--
}

const plusKid = () => {
   if (toursStore.quantityTourists[0].quantity < 17) toursStore.quantityTourists[0].quantity++
}
</script>